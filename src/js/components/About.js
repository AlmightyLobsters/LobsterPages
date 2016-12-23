import React from 'react';

require("../../scss/About.scss");

export const About = _ => (
	<div id="about">
		<section className="hero">
			<header>
				<h1>About</h1>
				<h2>We are <b>Lobsters</b></h2>
			</header>
		</section>
		<main>
			<article className="classicArticle">
				<h3>Who we are</h3>
				<div className="article_innerWrapper">
					<div className="videoWrapper"><iframe width="560" height="349" src="https://www.youtube.com/embed/9YXB2fL1riA" frameBorder="0" allowFullScreen></iframe></div>
					<p>We are Lobsters, enormous creatures armored by #lobster_red powerfull shells that protect us from bashing. We live in the darkest depths of the abyss that you call sea.</p>
					<p>Praesent velit sem, accumsan non cursus vel, fermentum vitae nibh. Quisque a augue faucibus, ultricies est nec, facilisis odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sem nisi, varius nec malesuada ac, sagittis at risus. Donec finibus nibh id metus auctor, nec finibus augue hendrerit. Mauris sollicitudin ut nisl eu ornare. Suspendisse ac sagittis elit, quis posuere erat. Maecenas quis fermentum elit. Fusce ac aliquam lorem. Curabitur sed libero at tortor sollicitudin commodo. Nullam tristique ultricies risus, ut aliquam ipsum tempor id. In hendrerit suscipit libero, et auctor turpis sodales non. Sed quis sem vestibulum, posuere elit quis, hendrerit odio.</p>
					<p>Suspendisse dictum ipsum in massa lobortis, et auctor eros ullamcorper. Aenean mollis luctus ligula nec porta. Nullam eget accumsan lorem, ut mollis felis. Mauris ac sapien id metus fringilla fermentum. Vestibulum finibus justo nec nisi ultrices, vel cursus tortor porttitor. Nam blandit tempor sapien, quis fermentum metus tempus quis. Phasellus accumsan sagittis tellus in aliquam. Proin ac metus tortor. Vestibulum congue tincidunt lacus, a fringilla nulla congue id. Nunc vel mauris sed libero interdum convallis. Etiam ac urna vehicula, molestie sapien id, fringilla magna. Nullam quis lacinia est, sit amet tempus enim. Cras sodales leo vitae est ornare, eget viverra nisl auctor. Curabitur finibus tincidunt porta.</p>
					<p>Nunc quis libero diam. Fusce malesuada aliquet enim eget interdum. Aliquam erat volutpat. Nulla vulputate mi vitae augue elementum venenatis. Phasellus non rutrum augue. Vivamus sed egestas metus. Fusce at leo ac libero vestibulum interdum. Nullam placerat sit amet purus in scelerisque. Mauris et massa tortor. Donec hendrerit mi velit, sit amet sagittis tortor semper at. In faucibus pulvinar orci. Donec neque nunc, ornare eget enim in, tristique lacinia tellus. Pellentesque eu tempus quam. Morbi nec mauris eget nunc feugiat tincidunt dignissim ac odio. Praesent elementum eleifend elit id semper.</p>
					<p>Aliquam id interdum sem. Nulla vitae semper ante, vitae pharetra odio. Suspendisse nec nibh volutpat, sodales libero vitae, tincidunt urna. Integer a faucibus leo, tincidunt lacinia eros. Donec bibendum, urna et efficitur ornare, augue nulla dignissim risus, eget semper mauris velit a enim. Vivamus pellentesque scelerisque vehicula. Nam vitae turpis urna. Mauris sit amet rhoncus mauris. Praesent vitae egestas sapien. Proin nec pulvinar tellus, efficitur interdum ante. Cras tempor libero dictum sapien euismod ultrices. Suspendisse in vestibulum ante. Integer dui dui, vehicula at magna at, eleifend varius metus. Mauris et lorem ultricies orci eleifend pellentesque nec congue leo.</p>
				</div>
			</article>
		</main>
	</div>
);
