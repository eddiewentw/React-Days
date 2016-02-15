var gulp = require('gulp');
var babel = require('gulp-babel');
var replaceHTML = require('gulp-html-replace');
var rename = require('gulp-rename');

var targetDAY = 'DAY-1-Clock/';

gulp.task( 'default', ['babel', 'html'] );

gulp.task( 'babel', function(){
	return gulp.src( targetDAY+'main.jsx' )
		.pipe( babel({
			presets: ['es2015', 'react']
		}) )
		.pipe( rename('main.js') )
		.pipe( gulp.dest( targetDAY ) );
});

gulp.task( 'html', function(){
	// Just copy original file
	gulp.src( targetDAY+'index.html' )
		.pipe( rename('_index.html') )
		.pipe( gulp.dest( targetDAY ) );

	// New index.html
	return gulp.src( targetDAY+'index.html' )
		.pipe( replaceHTML({
			del: '',
			js: {
				src: 'main.js',
				tpl: '<script type="text/javascript" src="%s"></script>'
			}
		}, {
			keepBlockTags: true
		}) )
		.pipe( gulp.dest( targetDAY ) );
});