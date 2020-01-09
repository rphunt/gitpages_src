/*
Gulp 4 build flow
NPM Setup:
npm i gulp --global
npm i -D gulp
npm i -D gulp-sass
npm i -D gulp-uglify
npm i -D gulp-uglifycss
npm i -D pump
npm i -D gulp-babel@next @babel/core
npm i -D gulp-babel@next @babel/core @babel/preset-env
*/

/*
Transpiles and minifies SCSS from /src/scss to CSS to /public/css
Transpiles and minifies JS from /src/es to /public/js
Copies index.html file to /public
*/

const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var uglifycss = require('gulp-uglifycss');
const babel = require('gulp-babel');

/* functions */

/*
Transpile and minify SCSS from /scss and place in /src_css
*/
const transminscss = () => {
    return src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(uglifycss({
      "maxLineLen": 0,
      "uglyComments": true
    }))
    .pipe(dest('./public/css'));
};

/*
TRanspile and minify JS from /es and place in /js
*/
const transminjs = () => {
  return pump([
       src('./src/es/**/*.js'),
       babel({
               presets: ['@babel/env']
       }),
       uglify(),
       dest('./public/js')
      ]
    );
};


const copy = () => {
  return src('./src/*.html')
    .pipe(dest('./public'));
};

/*
Transpile and minify the SCSS & JS
Copy over to /public
*/
exports.all = series(transminscss, transminjs, copy);
