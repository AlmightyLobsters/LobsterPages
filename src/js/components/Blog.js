import React from 'react';
import axios from 'axios';

export class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            article: null
        };
    }
    componentDidMount() {
        axios.get(`/api/articles/${this.props.params.artId}`)
            .then(resp => this.setState({err: null, article: resp.data}))
            .catch(err => this.setState({err}));
    }
    render() {
        return (
            <div id="blog">
                {this.state.err
                ? <p>{this.state.err}</p>
                : (this.state.article
                    ? (
                        <div id="article">
                            <section className="hero" style={{ background: this.state.article.imgPath ? `url(${this.state.article.imgPath}) no-repeat` : '#e57373', filter: 'blur(200px)' }} />
                            <main>
                                <section>
                                    <article>
                                        <div className="title">
                                            <h3>{this.state.article.title}</h3>
                                        </div>
                                        <div className="article_innerWrapper">
                                            {(typeof(this.state.article.text) === 'string' ? [this.state.article.text] : this.state.article.text)
                                                .map(par => <p dangerouslySetInnerHTML={{__html: par}}></p>)}
                                            {this.state.article.imgPath && <img src={this.state.article.imgPath}></img>}
                                        </div>
                                    </article>
                                </section>
                            </main>
                        </div>
                    )
                    : <p>Not loaded yet</p>)}
            </div>
        );
    }
}
