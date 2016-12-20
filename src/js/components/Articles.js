import React from 'react';

require('../../scss/Articles.scss');

export const Articles = _ => (
	<div id="articles">
		<section className="hero">
			<header>
				<h1>Articles</h1>
				<h2>A <b>sassy</b> subtitle</h2>
			</header>
		</section>
		<section className="articles_wrapper">
			<h3>We launched a site</h3>
			<article>
				After a month full of planning and development we finally managed to launch a site of our own. Happy New Year!
			</article>
		</section>
	</div>
)
