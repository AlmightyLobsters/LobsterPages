import React, { Component } from 'react';
import io from 'socket.io-client';
import C3Chart from 'react-c3js';
import axios from 'axios';

const P0 = 1013.25;
const feet = 0.3084;

const standardPadding = {
    left: 48,
    right: 48,
    top: 48
};

export const altitudePressure = pressure => (1 - (pressure / (P0 * 10)) ** 0.190284) * 145366.45 * feet;

export class DataExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            data: [],
            parsedData: {
                times: [],
                temps: [],
                press: [],
                hmdts: [],
                relAlts: []
            }
        };
    }

    parseData(data) {
        if (!data || typeof data !== 'string') return;
        global.serverData = this.state;
        const [TIME,TEMPERATURE,PRESSURE,HUMIDITY] = data.split(',');
        this.setState(prevState => ({
            data: [
                ...prevState.data,
                data
            ],
            parsedData: {
                times: [
                    ...prevState.parsedData.times,
                    TIME
                ],
                temps: [
                    ...prevState.parsedData.temps,
                    TEMPERATURE / 100
                ],
                press: [
                    ...prevState.parsedData.press,
                    PRESSURE / 10
                ],
                hmdts: [
                    ...prevState.parsedData.hmdts,
                    HUMIDITY / 100
                ],
                relAlts: [
                    ...prevState.parsedData.relAlts,
                    altitudePressure(PRESSURE)
                ]
            }
        }));
    }

    componentDidMount() {
        this.socket = io.connect('/listener');
        this.socket.on('newData', newData => {
            this.parseData(newData);
        });
        axios.get('/api/data/lastFew')
            .then(res => res.data.forEach(d => this.parseData(d)))
            .catch(err => this.setState({ err, data: [] }));
    }

    render() {
        return (
            <div id="dataExplorer">
                {this.state.err
                    ? <p>{this.state.err}</p>
                    : <div id="charts">
                        <C3Chart
                            className="temps col-1-1"
                            data={{ json: { Temperature: this.state.parsedData.temps }, type: 'line' }}
                            padding={standardPadding}
                            color={{ pattern: ['blue'] }}
                            axis={{ x: { tick: { count: this.state.parsedData.times.length / 10 } } }} />
                        <C3Chart
                            className="press col-1-2"
                            data={{ json: { Pressure: this.state.parsedData.press }, type: 'line' }}
                            padding={standardPadding}
                            color={{ pattern: ['red'] }}
                            axis={{ x: { tick: { count: this.state.parsedData.times.length / 10 } } }} />
                        <C3Chart
                            className="hmdts col-1-2"
                            data={{ json: { Humidity: this.state.parsedData.hmdts }, type: 'line' }}
                            padding={standardPadding}
                            color={{ pattern: ['green'] }}
                            axis={{ x: { tick: { count: this.state.parsedData.times.length / 10 } } }} />
                        <C3Chart
                            className="relAlt col-1-1"
                            data={{ json: { 'Relative Altitude': this.state.parsedData.relAlts }, type: 'line' }}
                            padding={standardPadding}
                            color={{ pattern: ['orange'] }}
                            axis={{ x: { tick: { count: this.state.parsedData.times.length / 10 } } }} />
                    </div>}
            </div>
        );
    }
}
