import React from 'react';

require('../../scss/Articles.scss');

import happyNewYear from '../../assets/imgs/happyNewYear.jpg'
import resolutions from '../../assets/imgs/resolutions.jpg'

export const Articles = _ => (
	<div id="articles">
		<section className="hero">
			<header>
				<h1>Blog</h1>
				<h2>A <b>sassy</b> subtitle</h2>
			</header>
		</section>
		<main>
			<section className="container" style={{flexDirection: 'row-reverse'}}>
				<article className="col-1-2">
					<div className="title"><h3>Novoroční předsevzetí</h3></div>
					<div className="article_innerWrapper">
						<p>Ke konci roku nevyhnutelně patří jeho analýza, zhodnocení a vyvození důsledků. I my jsme se tak rozhodli vytáhnout pár ponaučení z loňského ročníku soutěže a podělit se s vámi o ně.</p>
						<p>V prvé řadě bychom vám chtěli slíbit pravidelný přísun obsahu jak zde, tak na <a href="https://www.facebook.com/ALCanSat" target="_blank">facebooku</a> a <a href="https://twitter.com/almghtLobsters" target="_blank">twitteru</a>.
						Dále jsme si uvědomili, že spousta komplikací, které jsme si užili vloni, byla způsobena problémy v komunikaci uvnitř týmu. Na tom jsme se tedy rozhodli zapracovat a s pomocí našich mentorů, slacku, githubu a dalších nástrojů se nám to snad povede.
						A doufáme, že nebudeme mít problémy ani se třetím předsevzetím, a totiž dodržování časových rámců a termínů. Zatím se docela držíme a brzy uvidíme jak to vydržíme.</p>
						<p>A konečně, k čemu by to všechno bylo, kdybychom nakonec nevyhráli, a tak se i tento bod dostal do listu našich předsevzetí.</p>
						<p>A co vy? Napište nám na facebook, nebo twitter s hashtagem <em>#LobsterResolutions</em> jak jste na tom s předsevzetími vy a co si myslíte o těch našich.</p>
					</div>
				</article>
				<a href={resolutions} className="col-1-2"><img src={resolutions} alt="New Year's resolutions: publish frequently, communicate more, finish on time, win" /></a>
			</section>
			<section className="container">
				<article className="col-1-3">
					<div className="title"><h3>Vlastní stránka</h3></div>
					<div className="article_innerWrapper">
						<p>Po měsíci plném plánování, příprav, testování a praktikování černé css magie, vám hrdě ohlašujeme spuštění naší vlastní web stránky. Můžete se těšit na (více méně) pravidelné články o našem postupu, obrázky, představení kódu, atd.</p>
						<p>Šťastný nový rok, plný úspěchů a obsahu z <a href="http://almighty.lobsters.tech">almighty.lobsters.tech</a>!</p>
					</div>
				</article>
				<a href={happyNewYear} className="col-2-3"><img src={happyNewYear} alt="Happy New Year for the Almighty Lobsters team" /></a>
			</section>
		</main>
	</div>
)
