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
			<article className="tweetArticle col-1-3">
				<h3>We launched a site</h3>
				<div className="article_innerWrapper">
					<p>After a month full of planning and development we finally managed to launch a site of our own. It is currently only in english (and will propably stay that way).</p>
					<p>Happy New Year!</p>
				</div>
			</article>
			<article className="classicArticle col-2-3">
				<h3>Lorem Ipsum</h3>
				<div className="article_innerWrapper">
					<p>+ěščřžýáíéPraesent velit sem, accumsan non cursus vel, fermentum vitae nibh. Quisque a augue faucibus, ultricies est nec, facilisis odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sem nisi, varius nec malesuada ac, sagittis at risus. Donec finibus nibh id metus auctor, nec finibus augue hendrerit. Mauris sollicitudin ut nisl eu ornare. Suspendisse ac sagittis elit, quis posuere erat. Maecenas quis fermentum elit. Fusce ac aliquam lorem. Curabitur sed libero at tortor sollicitudin commodo. Nullam tristique ultricies risus, ut aliquam ipsum tempor id. In hendrerit suscipit libero, et auctor turpis sodales non. Sed quis sem vestibulum, posuere elit quis, hendrerit odio.</p>
					<p>Suspendisse dictum ipsum in massa lobortis, et auctor eros ullamcorper. Aenean mollis luctus ligula nec porta. Nullam eget accumsan lorem, ut mollis felis. Mauris ac sapien id metus fringilla fermentum. Vestibulum finibus justo nec nisi ultrices, vel cursus tortor porttitor. Nam blandit tempor sapien, quis fermentum metus tempus quis. Phasellus accumsan sagittis tellus in aliquam. Proin ac metus tortor. Vestibulum congue tincidunt lacus, a fringilla nulla congue id. Nunc vel mauris sed libero interdum convallis. Etiam ac urna vehicula, molestie sapien id, fringilla magna. Nullam quis lacinia est, sit amet tempus enim. Cras sodales leo vitae est ornare, eget viverra nisl auctor. Curabitur finibus tincidunt porta.</p>
					<p>Nunc quis libero diam. Fusce malesuada aliquet enim eget interdum. Aliquam erat volutpat. Nulla vulputate mi vitae augue elementum venenatis. Phasellus non rutrum augue. Vivamus sed egestas metus. Fusce at leo ac libero vestibulum interdum. Nullam placerat sit amet purus in scelerisque. Mauris et massa tortor. Donec hendrerit mi velit, sit amet sagittis tortor semper at. In faucibus pulvinar orci. Donec neque nunc, ornare eget enim in, tristique lacinia tellus. Pellentesque eu tempus quam. Morbi nec mauris eget nunc feugiat tincidunt dignissim ac odio. Praesent elementum eleifend elit id semper.</p>
				</div>
			</article>
			<article className="videoArticle col-2-3">
				<div className="videoWrapper"><iframe width="560" height="349" src="https://www.youtube.com/embed/9YXB2fL1riA" frameBorder="0" allowFullScreen></iframe></div>
			</article>
			<article className="imageArticle col-1-3">
				<img src={testImg} alt="Grid testing image" />
			</article>
		</main>
	</div>
)
