/* eslint no-console: 0 */
const join = require('path').join;
const fs = require('fs');

// SASS
require('node-sass').render(
    { file: join(__dirname, 'src', 'scss', 'main.scss'),
        outputStyle: "compressed"
    }, function(err, result) {
    if(err) console.error(err);
    else {
        if(!fs.existsSync(join(__dirname, 'public', 'styles'))) fs.mkdirSync(join(__dirname, 'public', 'styles'));
        require('postcss')([require('autoprefixer'), require('postcss-url')])
            .process(result.css, {
                from: join(__dirname, 'src', 'scss', 'main.scss'),
                to: join(__dirname, 'public', 'styles', 'main.css')
            }).then(function(result) {
                fs.writeFile(join(__dirname, 'public', 'styles', 'main.css'), result.css, function(err) {
                    if (err) console.error(err);
                    else console.log('Style bundled');
                });
            });
    }
});

// JS
require('webpack')(require('./webpack.config')).run(function(err, stats) {
    if (err) console.error(err);
    else console.log('Client bundled');
});

if(process.env.NODE_ENV === 'production') {

// Favicons
    require('favicons')(
        './public/imgs/logoRed.svg',
        {
            appName: 'LobsterPages',
            path: '/icons'
        },
        function (err, resp) {
            if (err) console.log(err);
            else {
                fs.writeFile(join(__dirname, 'src', 'faviconsHeader.ejs'), resp.html.join('\n'), function(err) {
                    if (err) console.log(err);
                    else console.log('Favicons header written');
                });
                if(!fs.existsSync(join(__dirname, 'public', 'icons'))) fs.mkdirSync(join(__dirname, 'public', 'icons'));
                resp.files.concat(resp.images).forEach(function(item) {
                    fs.writeFile(join(__dirname, 'public', 'icons', item.name), item.contents, function(err) {
                        if (err) console.log(err);
                        else console.log(`Written ${item.name}`);
                    });
                });
            }
        }
    );

// Sitemap
    require('babel-register');
    new (require('react-router-sitemap').default)(require('./src/js/routes').LobsterRoutes)
        .build('http://almighty.lobsters.tech')
        .save('./public/sitemap.xml');
    console.log('Sitemap generated');
}
