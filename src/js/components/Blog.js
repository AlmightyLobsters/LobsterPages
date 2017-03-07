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
                            {this.state.article.imgPath
                            && <section className="hero" style={{background: `url(${this.state.article.imgPath}) fixed center no-repeat`, filter: 'blur(200px)', height: '50vh'}} />
                            }
                            <main>
                                <section>
                                    <article>
                                        <div className="title">
                                            <h3>{this.state.article.title}</h3>
                                        </div>
                                        <div className="article_innerWrapper">
                                            {(typeof(this.state.article.text) === 'string' ? [this.state.article.text] : this.state.article.text)
                                                .map(par => <p dangerouslySetInnerHTML={{__html: par}}></p>)}
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
