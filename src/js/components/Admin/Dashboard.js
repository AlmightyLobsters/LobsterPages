import React from 'react';
import axios from 'axios';


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            articles: [],
            adding: false,
            newArt: {
                title: '',
                text: ''
            }
        };
        this.articleElements = [];
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

    postArticle() {
        const addForm = document.getElementById('addForm');
        const newArt = {
            title: this.state.newArt.title,
            text: this.state.newArt.text.split('\n'),
            reversed: addForm.querySelector('#reversed').checked
        }
        const files = addForm.querySelector('[name="headerImg"]').files;
        const doPost = () => {
            axios.post('/articles', newArt)
                .then(resp => this.setState(prevState => ({
                    err: null,
                    articles: [
                        newArt,
                        ...prevState.articles
                    ]
                })))
                .catch(err => this.setState({err}));
        };
        if(files.length === 1) {
            const data = new FormData();
            data.append('file', files[0]);
            axios.post('/upload', data)
                .then(resp => {
                    const imgFormE = addForm.querySelector('#imgFormat');
                    newArt.imgPath = resp.headers.location;
                    newArt.imgFormat = imgFormE.options[imgFormE.selectedIndex].value;
                    doPost();
                })
                .catch(err => this.setState({err}));
        }
        else doPost();
    }

    deleteArticle(id) {
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
    }

    toggleActive(id) {
        const isOn = this.articleElements[id].className.match(/(?:^|\s)active(?!\S)/g);
        this.articleElements.forEach(item => item.className = item.className.replace(/(?:^|\s)active(?!\S)/g, ''));
        if (!isOn) this.articleElements[id].className += ' active';
    }

    toggleAddView() {
        this.setState(prevState => ({
            adding: !prevState.adding
        }));
    }

    updateNewArt(prop, val) {
        this.setState(prevState => ({
            newArt: {
                ...prevState.newArt,
                [prop]: val
            }
        }));
    }

    render() {
        return (
            <div id="adminDash">
                <h3>Dashboard</h3>
                <main>
                    <div className="articleList">
                        {!this.state.adding
                            ? <button onClick={e => this.toggleAddView()}>Add an article</button>
                            : (
                                <div id="addForm" className="articleHeader active">
                                    <div className="editForm">
                                        <input name="title" className={`${this.state.newArt.title === '' ? 'invalid' : ''}`} onChange={e => this.updateNewArt('title', e.target.value)} type="text" />
                                        <textarea name="text" className={`${this.state.newArt.text === '' ? 'invalid' : ''}`} onChange={e => this.updateNewArt('text', e.target.value)} />
                                        <section>
                                            <section>
                                                <section>
                                                    <label htmlFor="imgFormat">Image Format: </label>
                                                    <select id="imgFormat">
                                                        <option value="wide">Wide</option>
                                                        <option value="medium">Medium</option>
                                                        <option value="tall">Tall</option>
                                                    </select>
                                                </section>
                                                <section>
                                                    <label htmlFor="reversed">Image on the left</label>
                                                    <input type="checkbox" id="reversed"/>
                                                </section>
                                            </section>
                                            <section className="imgSelect">
                                                <input type="file" name="headerImg" accept="image/*,text/*"/>
                                            </section>
                                            <section className="buttons">
                                                <button disabled={this.state.newArt.text === '' || this.state.newArt.title === ''} onClick={e => this.postArticle()}>Add</button>
                                                <button onClick={e => this.toggleAddView()}>Cancel</button>
                                            </section>
                                        </section>
                                    </div>
                                </div>
                            )
                        }
                        {this.state.err
                            ? <p>{this.state.err}</p>
                            : this.state.articles.map(art => (
                                <div className="articleHeader" ref={c => this.articleElements[art.id] = c}>
                                    <header>
                                        <p>{art.title}<span className="idIndicator">{`#${art.id}`}</span></p>
                                        <div className="controls">
                                            <button className="edit" onClick={e => this.toggleActive(art.id)}>Edit</button>
                                            <button className="delete" onClick={e => this.deleteArticle(art.id)}>Delete</button>
                                        </div>
                                    </header>
                                    <div className="editForm">
                                        <input type="text" value={art.title}/>
                                        <textarea value={(!art.text ? [] : typeof(art.text) === 'string' ? [art.text] : art.text).join('\n')}/>
                                        <section>
                                            <section>
                                                <section>
                                                    <label htmlFor="imgFormat">Image Format: </label>
                                                    <select id="imgFormat">
                                                        <option value="wide">Wide</option>
                                                        <option value="medium">Medium</option>
                                                        <option value="tall">Tall</option>
                                                    </select>
                                                </section>
                                                <section>
                                                    <label htmlFor="reversed">Image on the left</label>
                                                    <input type="checkbox" id="reversed"/>
                                                </section>
                                            </section>
                                        </section>
                                    </div>
                                </div>
                            ))}
                    </div>
                </main>
            </div>
        );
    }
}
