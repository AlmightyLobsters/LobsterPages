import React from 'react';
import axios from 'axios';
import { Article } from '../Article';


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            articles: []
        };
    }

    render() {
        // axios.get('/articles')
        //     .then(res => this.setState({ articles: res.data}))
        //     .catch(err => this.setState({err}));
        return (
            <div id="adminDash">
                <h3>Dashboard</h3>
                {this.state.err
                    ? <p>{this.state.err}</p>
                    : this.state.articles.map(art => <Article data={art} />)}
                <input type="button" value="Add an Article" />
            </div>
        );
    }
}
