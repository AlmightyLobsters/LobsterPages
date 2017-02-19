import React from 'react';

export const About = _ => (
    <div id="about">
        <section className="hero">
            <header>
                <h1>O nás</h1>
                <h2>We are <b>Lobsters</b></h2>
            </header>
        </section>
        <main>
            <section id="content">
                <section className="articlesWrapper">
                    <div className="articleWrapper" id="Preface">
                        <h1>Almighty Lobsters</h1>
                        <hr/>
                        <blockquote>Jsme skupina studentů 5. ročníku <a href="http://gjn.cz">Gymnázia Jana Nerudy</a>. Ačkoliv studujeme ve francouzštině a letos nás čeká francouzská maturita, ve zbytcích volného času se věnujeme moderním technologiím a snažíme se zvýšit veřejné povědomí o problematikách s nimi souvisejícími.</blockquote>
                        <hr/>
                    </div>
                    <div className="articleWrapper" id="Intro">
                        <h2 id="predstaveni-tymu">Představení týmu</h2>
                    </div>
                    <div className="videoWrapper" id="IVideo"><iframe width="560" height="349" src="https://www.youtube.com/embed/9YXB2fL1riA" frameBorder="0" allowFullScreen></iframe></div>
                    <div className="articleWrapper" id="Introb">
                        <p>Tým vznikl v roce 2015 za účelem účasti v soutěži CanSat a nyní se dostáváme i k dalším zajímavým projektům. Možná přemýšlíte na samotným vznikem názvu týmu. Nebudeme vám lhát, je složený ze dvou <em>nezávislých</em> generátorů slov.</p>
                    </div>
                    <div className="articleWrapper" id="Members">
                        <h2 id="clenove">Členové</h2>
                        <h3 id="vojtech-stepancik">Vojtěch Štěpančík</h3>
                        <p>Člen programu Microsoft Student partner, ve volném čase se věnuje IoT, programování aplikací pro Windows a vývoji webů. Jakékoli Apple produkty v jeho dohledné vzdálenosti jsou rozhodně ve velkém nebezpečí. Kromě toho je jedním z hlavních vývojářů pro Čerstvou Sváču.</p>
                        <h3 id="jan-simek">Jan Šimek</h3>
                        <p>Redaktor webu WindowsCentrum.cz a fanoušek Nokia. Ačkoliv se přímo nepodílí na vývoji softwaru a hardwaru a spíše se přiučuje, často jeho práci naleznete ve formě obsahu na webu, sociálních sítích a podobně.</p>
                        <h3 id="jakub-bohacek">Jakub Boháček</h3>
                        <p>Tišší člen týmu, který začíná dobře orientovat v programování webů (Jakékoliv stížnosti na web směřujte právě na něj <span class="emoji emoji-smiley">😃</span> ), zajímá se o grafiku a focení. Rozený perfekcionista. Miluje rozložení klávesnice DVORAK, což pro znalé pro jeho popis bohatě postačí.</p>
                        <h3 id="maxim-oweyssi">Maxim Oweyssi</h3>
                        <p>Max je v srdci fyzik, což ho uvedlo do práce s velkými daty a je novopečeným datovým analytikem. Pracuje v týmu Almighty Lobsters na projektu CanSat. Momentálně si dělá kurz Calculus BC  v rámci projektu Kurzy pro talentovanou mládež. Je definicí fráze thinking outside the box.</p>
                        <h3 id="petr-rambousek">Petr Rambousek</h3>
                        <p>Petr je ten za kým přijdete a zeptáte se ho, jestli je nějaké (většinou technické) řešení proveditelné<br />
                        a jaké by mohlo mít mouchy. Nebojí se vyjádřit svůj názor, pokud si myslí, že se situace ubírá špatným
                        směrem. Má také zkušenosti s kontrolou a směřováním práce. Jeho
                        nadšení pro mechaniku se plně
                        projevilo na 3D tiskárně, kterou má doma a navrhuje na ní tisknutelná vylepšení nebo náhradní díly.</p>
                    </div>
                    <div className="articleWrapper" id="Projects">
                        <h2 id="projekty">Projekty</h2>
                        <p>Kromě individuálních zájmů se již druhým rokem účastníme soutěže CanSat pořádanou asociací ESERO za podpory Evropské vesmírné agentury. Část týmu se věnuje i tvorbě alternativní 3D tiskárny, interně označovanou jako Polly. Jejím hlavním znakem je využití pouze dvou motorů, kdy první otáčí deskou po šroubovici a druhý po ose x s náplní. Dále se ve spolupráci s ManapGroup podílíme na projektu Čerstvá Sváča a NFCtron.</p>
                        <h2 id="cansat">CanSat</h2>
                        <p>Idea takzvaných nanosatelitů vznikla v roce 1998 na prvním “University Space System Symposium” (Univerzitní sympozium vesmírných systémů) na Havaji. Představil ji profesor Bob Twiggs ze Stanfordské univerzity. Byl to týž Twiggs, který ve spolupráci s profesorem Jordi Puig-Suari, přišel rok poté s velmi úspěšnou myšlenkou CubeSatů. Soutěže v konstrukci CanSatů mají největší tradici v Japonsku, kde se také konala ta vůbec první. Později se tento fenomén rozšířil téměř po celém světě a vlastní verzi má i Evropská kosmická agentura (ESA). Ta je na rozdíl od soutěží v ostatních zemích zaměřena na studenty středních škol a je rozdělena na kolo národní a pro jejich vítěze pak kolo evropské.</p>
                    </div>
                </section>
            </section>
        </main>
    </div>
);
