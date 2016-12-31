require('babel-register');
require('react-router-sitemap');

const router = require('./js/routes.js').default;

(
	new Sitemap(router)
		.build('http://almighty.lobsters.tech')
		.save('./sitemap.xml')
);