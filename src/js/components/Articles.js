import React from 'react';
import { Article } from './Article';
import axios from 'axios';

export class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            articles: []
        };
    }

    componentDidMount() {
        axios.get('/api/articles')
            .then(res => { this.setState({ articles: res.data || [] }); })
            .catch(err => { this.setState({ err, articles: []}); });
    }

    render() {
        return (
            <div id="articles">
                <section className="hero">
                    <header>
                        <h1>Blog</h1>
                        <h2>Work <b>almost</b> in progress</h2>
                    </header>
                </section>
                <main>
                    <section id="content">
                        <div className="articlesWrapper">
                            {this.state.err
                                ? <p>{this.state.err}</p>
                                : this.state.articles.map(art => <Article data={art} />)}
                        </div>
                        <div className="socialFeed">
                            <iframe src="https://snapwidget.com/embed/335969" className="instaWidget" allowTransparency="true" frameborder="0" scrolling="yes"></iframe>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}
