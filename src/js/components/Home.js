import React from 'react';

export const Home = _ => (
    <div id="home">
        <section className="hero">
            <section id="welcome">
                <header>
                    <h1>Vítejte</h1>
                </header>
            </section>
            <section id="lobsters">
                <article id="brief" className="col-2-3">
                    <h2>We are <b>Lobsters</b></h2>
                    <hr/>
                    <blockquote>Jsme skupina studentů 5. ročníku <a href="http://gjn.cz">Gymnázia Jana Nerudy</a>. Ačkoliv studujeme ve francouzštině a letos nás čeká francouzská maturita, ve zbytcích volného času se věnujeme moderním technologiím a snažíme se zvýšit veřejné povědomí o problematikách s nimi souvisejícími.</blockquote>
                    <hr/>
                </article>
                <section id="projects" className="col-1-3">
                    test
                </section>
            </section>
        </section>
        <div id="lastArticle">
            {/*some kind of js logic that pulls the last article from the store and puts it here*/}
        </div>
    </div>
);
