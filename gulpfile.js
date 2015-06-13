var gulp = require('gulp');
var	sass = require('gulp-ruby-sass');
var sassdoc = require('sassdoc');
var deploy = require('gulp-gh-pages');
var clean = require('gulp-clean');

var SASSDOC_OPTIONS = {
	dest: './sassdoc/',
	verbose: true,
    basePath: 'https://github.com/skoks/sassy-border',
    googleAnalytics: 'UA-63800864-1',
};

gulp.task('clean', function () {
    return gulp.src('./sassdoc/', {read: false})
        .pipe(clean());
});

gulp.task('sassdoc', ['clean'], function() {
	return gulp.src('./_sassy-border.scss')
		.pipe(sassdoc(SASSDOC_OPTIONS));
});

gulp.task('default', ['sassdoc'], function() {
	return sass('./_sassy-border.scss', {
    		style: 'expanded',
    		precision: 10,
        	lineNumbers : true
    	})
    	.pipe(gulp.dest('./build'))
});

gulp.task('watch', function() {
	gulp.watch('./_sassy-border.scss', ['default']);
});

gulp.task('deploy', function() {
  return gulp.src('./sassdoc/**/*')
    .pipe(deploy());
});

var gulp = require('gulp');
var plugins = {
  clean: require('gulp-clean'),
};
