@ECHO off

pushd %~dp0..\
	call node_modules\.bin\node-sass.cmd --output-style compressed src\scss\main.scss src\scss\main.css
	call node_modules\.bin\postcss.cmd -o public\styles\main.css --use autoprefixer --use postcss-url src\scss\main.css
	del src\scss\main.css
popd