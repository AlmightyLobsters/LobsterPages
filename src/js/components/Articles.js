import React from 'react';

export const Articles = _ => (
    <div id="articles">
        <section className="hero">
            <header>
                <h1>Blog</h1>
                <h2>A <b>sassy</b> subtitle</h2>
            </header>
        </section>
        <main>
            <div className="row">
                <article className="tweetArticle col-1-3">
                    <h3>Vlastní stránka</h3>
                    <div className="article_innerWrapper">
                        <p>Po měsíci plném plánování, příprav, testování a praktikování černé css magie, vám hrdě ohlašujeme spuštění naší vlastní web stránky.</p>
                        <p>Můžete se těšit na (více méně) pravidelné články o našem postupu, obrázky, představení kódu, atd.</p>
                        <p>Šťastný nový rok, plný úspěchů a obsahu z <a href="http://almighty.lobsters.tech">almighty.lobsters.tech</a>!</p>
                    </div>
                </article>
                <article className="imageArticle col-2-3">
                    <img src="/imgs/happyNewYear.jpg" alt="Happy New Year for the Almighty Lobsters team" />
                </article>
            </div>
        </main>
    </div>
);
