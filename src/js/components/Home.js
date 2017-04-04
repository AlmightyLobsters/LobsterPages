import React from 'react';

export const Home = _ => (
    <div id="home">
        <section className="hero">
            <header>
                <h1>Lobsters</h1>
            </header>
        </section>
        <main>
            <section id="lobsters">
                <article id="brief" className="col-2-3">
                    <div id="heading" className="v-center">
                        <h2><b>Almighty</b> Lobsters</h2>
                    </div>
                    <div id="quote">
                        <div id="innerQuote">
                            <hr/>
                            <blockquote>Jsme skupina studentů 5. ročníku <a href="http://gjn.cz">Gymnázia Jana Nerudy</a>. Ačkoliv studujeme ve francouzštině a letos nás čeká francouzská maturita, ve zbytcích volného času se věnujeme moderním technologiím a snažíme se zvýšit veřejné povědomí o problematikách s nimi souvisejícími.</blockquote>
                            <hr/>
                        </div>
                    </div>
                </article>
                <section id="socialNetworks" className="col-1-3">
                    <div id="innerSocial">
                        <a id="facebook" href="https://www.facebook.com/AlmightyLobsters" target="_blank">
                            <i className="fa fa-3x fa-facebook-square" aria-hidden="true"></i>
                            <span>AlmightyLobsters</span>
                        </a>
                        <a id="twitter" href="https://twitter.com/almghtLobsters" target="_blank">
                            <i className="fa fa-3x fa-twitter-square" aria-hidden="true"></i>
                            <span>AlmghtLobsters</span>
                        </a>
                        <a id="instagram" href="https://www.instagram.com/almightylobsters/" target="_blank">
                            <i className="fa fa-3x fa-instagram" aria-hidden="true"></i>
                            <span>almightylobsters</span>
                        </a>
                        <a id="github" href="https://github.com/AlmightyLobsters" target="_blank">
                            <i className="fa fa-3x fa-github-square" aria-hidden></i>
                            <span>AlmightyLobsters</span>
                        </a>
                    </div>
                </section>
            </section>
            <section id="projects">
                <div className="links col-1-3 v-center">
                    <div>
                        <a href="/about"><h1>O nás</h1></a>
                        <a href="/blog"><h1>Blog</h1></a>
                    </div>
                </div>
                <div className="project col-2-3" id="cansat">
                    <div className="imgWrapper">
                        <img src="/imgs/CanSat.jpg"></img>
                    </div>
                    <div className="noteWrapper v-center">
                        <article>
                            <h1>CanSat</h1>
                            <p>Almighty Lobsters se účastní soutěže CanSat 2017 s podporou SiliconHill a Microsoftu.</p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    </div>
);
