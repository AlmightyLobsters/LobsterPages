import React from 'react';

require('../../scss/Code.scss');

export const Code = _ => (
	<div id="code">
		<section className="hero">
			<header>
				<h1>Kód</h1>
				<h2>GitHub but <b>snappier</b></h2>
			</header>
		</section>
		<main>
			<section>
				<article>
					<div className="title" style={{borderBottom: 'thin #000 solid', borderTop: 'thin #000 solid'}}>
						<h3 style={{margin: '10px'}}>Účel</h3>
					</div>
					<div className="article_innerWrapper">
						<p><em>Je to zvláštní věc, mít záložku na stránkách, místo pro prezentaci už dávno připravené, ale věc prezentovanou, nikde v dohledu.</em></p>
						<p>Na tomto místě by měla být, a možná i někdy v nedaleké budoucnosti bude, prezentace našeho kódu. Přehlídka inženýrského řešení problémů abstraktních i příliš reálných. Místo toho, to zde zeje prázdnotou. Dá se řící, že efekt zamýšlený, tedy přiblížení projektu širšímu publiku, byl nahrazen účinkem zcela opačným, a totiž pocitem neúplnosti, až jakéhosi odcizení. Vše způsobené jednou záložkou skýtající příslib zajímavého obsahu a poskytující matoucí prázdno.</p>
						<p>Tedy, i když zde má být prezentace srozumitelně popsaného kódu a veškeré magie, která zaručuje bezvadné fungování naší sondy, nezbývá mi pro tento moment, naž odkázat na <a href="https://github.com/AlmightyLobsters/CanSat2017.Probe" target="_blank">GitHub</a>, repozitář, kde je všechen kód uložen.</p>
						<div style={{textAlign: 'right'}}><em>- Prázdá stránka</em></div>
					</div>
				</article>
			</section>
		</main>
	</div>
)
