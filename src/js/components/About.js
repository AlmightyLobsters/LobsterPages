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
			<article className="classicArticle">
				<h3>Co jsme zač</h3>
				<div className="article_innerWrapper">
					<div className="videoWrapper"><iframe width="560" height="349" src="https://www.youtube.com/embed/9YXB2fL1riA" frameBorder="0" allowFullScreen></iframe></div>
					<p><em>Jsme skupina 5 studentů 5. ročníku Česko-Francouzské sekce <b>Gymnázia Jana Nerudy</b> v Praze na Malé straně, která se přihlásila do soutěže <a href="http://www.esero.scientica.cz/cansat">CanSat</a>.</em></p>
					<p>No, tak to by bylo formální zařazení, a teď po lidsku. Co jsme to za lidi, že jsme dostali ten neobyčejný nápad zabít jakýkoliv zbylý volný čas stavbou čehosi, co snad z povzdálí i připomíná seriózní vědeckou sondu.</p>
					<h4>CanSat</h4>
					<p>CanSat, název vzniklý sloučením anglického názvu pro plechovku a zkráceným slovem pro satelit. Volně přeloženo tedy plechovkový satelit, <em>satelit v plechovce</em>. Co to je, ptáte se? Jedná se o soutěž ve světě již se 17 letou tradicí. Jak název napovídá, jde o to nacpat co nejvíc technologií, více, či méně, relevantních pro satelity, do pravidly stanovených rozměrů.</p>
				</div>
			</article>
		</main>
	</div>
);
