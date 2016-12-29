import React from 'react';

require('../../scss/Articles.scss');

import testImg from '../../assets/imgs/about.old.jpg';

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
					<h3>We launched a site</h3>
					<div className="article_innerWrapper">
						<p>After a month full of planning and development we finally managed to launch a site of our own. It is currently only in english (and will propably stay that way).</p>
						<p>Happy New Year!</p>
					</div>
				</article>
				<article className="videoArticle col-2-3">
					<div className="videoWrapper"><iframe width="560" height="349" src="https://www.youtube.com/embed/9YXB2fL1riA" frameBorder="0" allowFullScreen></iframe></div>
				</article>
			</div>
			<div className="row">
				<article className="classicArticle col-2-3">
					<h3>Lorem Ipsum</h3>
					<div className="article_innerWrapper">
						<p>+ěščřžýáíéPraesent velit sem, accumsan non cursus vel, fermentum vitae nibh. Quisque a augue faucibus, ultricies est nec, facilisis odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Interdum quis fermentum elit. Fusce ac aliquam lorem. Curabitur sed libero at tortor sollicitudin commodo. Nullam tristique ultricies risus, ut aliquam ipsum tempor id. In hendrerit suscipit libero, et auctor turpis sodales non. Sed quis sem vestibulum, posuere elit quis, hendrerit odio.</p>
					</div>
				</article>
				<article className="imageArticle col-1-3">
					<img src={testImg} alt="Grid testing image" />
				</article>
			</div>
			<div className="row">
				<article className="tweetArticle col-1-2">
					<h3>Final test</h3>
					<div className="article_innerWrapper">
						<p>Hey, so this is a paragraph that is supposed to prevent the footer from being completely out of place. and this is just a fodder text to find out if it will break to the second column. And it does</p>
						<p>Sure hope it works :)</p>
					</div>
				</article>
			</div>
		</main>
	</div>
)
