import React from 'react';

export const Home = _ => (
    <div id="home">
        <section className="hero">
            <header>
                <h1>Vítejte</h1>
            </header>
        </section>
        <div id="brief" className="articleWrapper">
            <h1>We are <span className="red">Lobsters</span></h1>
            <hr/>
            <blockquote>Jsme skupina studentů 5. ročníku <a href="http://gjn.cz">Gymnázia Jana Nerudy</a>. Ačkoliv studujeme ve francouzštině a letos nás čeká francouzská maturita, ve zbytcích volného času se věnujeme moderním technologiím a snažíme se zvýšit veřejné povědomí o problematikách s nimi souvisejícími.</blockquote>
            <hr/>
        </div>
    </div>
);
