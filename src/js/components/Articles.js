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

    componentWillMount() {
        axios.get('/articles')
            .then(res => { this.setState({ articles: res.data || [] }); })
            .catch(err => { this.setState({ err, articles: []}); });
    }

    render() {
        return (
            <div id="articles">
                <section className="hero">
                    <header>
                        <h1>Blog</h1>
                        <h2>A <b>sassy</b> subtitle</h2>
                    </header>
                </section>
                <main>
                    <div className="articlesWrapper">
                        {this.state.err
                            ? <p>{this.state.err}</p>
                            : this.state.articles.map(art => <Article data={art} />)}
                    </div>
                    <div className="socialFeed">
                        {/*Social feed code*/}
                    </div>
                </main>
            </div>
        );
    }
}
