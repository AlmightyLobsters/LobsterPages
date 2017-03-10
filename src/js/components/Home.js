import React from 'react';

export const Home = _ => (
    <div id="home">
        <section className="hero">
            <section id="welcome" className="v-center">
                <header>
                    <h1>Vítejte</h1>
                </header>
            </section>
            <section id="lobsters">
                <article id="brief" className="col-2-3">
                    <div id="heading">
                        <h2>We are <b>Lobsters</b></h2>
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
                        <a id="facebook" href="https://www.facebook.com/ALCanSat" target="_blank">
                            <i className="fa fa-3x fa-facebook-square" aria-hidden="true"></i>
                            ALCanSat
                        </a>
                        <a id="twitter" href="https://twitter.com/almghtLobsters" target="_blank">
                            <i className="fa fa-3x fa-twitter-square" aria-hidden="true"></i>
                            AlmghtLobsters
                        </a>
                        <a id="gplus" href="https://plus.google.com/b/102005371252944081919/102005371252944081919" target="_blank">
                            <i className="fa fa-3x fa-google-plus-square" aria-hidden="true"></i>
                            Almighty Lobsters
                        </a>
                        <a id="github" href="https://github.com/AlmightyLobsters" target="_blank">
                            <i className="fa fa-3x fa-github-square" aria-hidden></i>
                            AlmightyLobsters
                        </a>
                    </div>
                </section>
            </section>
        </section>
        <div id="projects">
        </div>
    </div>
);
