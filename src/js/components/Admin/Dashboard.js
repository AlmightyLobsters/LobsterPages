import React from 'react';
import axios from 'axios';


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            articles: []
        };
    }

    componentDidMount() {
        axios.get('/articles')
            .then(res => {
                this.setState({
                    err: null,
                    articles: res.data
                });
            })
            .catch(err => {
                this.setState({
                    err,
                    articles: []
                });
            });
    }

    deleteArticle(id) {
        return e => {
            e.preventDefault();
            const select = this.state.articles.find(val => val.id===id);
            if (confirm(`Do you want to delete article: '${select.title}'?`)) // eslint no-alert:0
                axios.delete(`/articles/${id}`)
                    .then(res => {
                        this.setState((prevState, props) => ({
                            err: null,
                            articles: prevState.articles.filter(a => a.id !== res.data.id)
                        }));
                    })
                    .catch(err => {
                        this.setState({err});
                    });
        };
    }

    render() {
        return (
            <div id="adminDash">
                <h3>Dashboard</h3>
                <main>
                    <div className="articleList">
                        <button>Add an article</button>
                        {this.state.err
                            ? <p>{this.state.err}</p>
                            : this.state.articles.map(art => (
                                <div className="articleHeader">
                                    <header>
                                        <p>{art.title}<span className="idIndicator">{`#${art.id}`}</span></p>
                                        <div className="controls">
                                            <button className="edit">Edit</button>
                                            <button className="delete" onClick={this.deleteArticle(art.id)}>Delete</button>
                                        </div>
                                    </header>
                                    <div className="editForm">
                                    </div>
                                </div>
                            ))}
                    </div>
                </main>
            </div>
        );
    }
}
