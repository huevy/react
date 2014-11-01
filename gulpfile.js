var gulp = require('gulp');
var browserify = require('gulp-browserify');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var react = require('gulp-react');
var serve = require('gulp-serve');
var less = require('gulp-less');
var reactify = require('reactify');


var SRC = './src';
var SRC_LESS = './less/main.less';
var BUILD = './build';
var BUILD_CSS = './build/css/';
var APP_MAIN = SRC + '/index.jsx';

gulp.task('serve', serve(['html', 'build']));

gulp.task('styles', function() {
	gulp
		.src(SRC_LESS)
		.pipe(less())
		.pipe(gulp.dest(BUILD_CSS));
});

gulp.task('js', function() {
	gulp
		.src(APP_MAIN)
		.pipe(plumber())
		.pipe(browserify({
			// insertGlobals: true,
			debug: !gulp.env.production,
			transform: [reactify]
		}))
		.pipe(rename('index.js'))
		.pipe(gulp.dest(BUILD));
});

gulp.task('lint', function() {
	gulp
		.src(SRC + '/**')
		.pipe(react())
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
	gulp.watch(SRC + '/**', ['lint', 'js']);
});

gulp.task('default', ['watch', 'lint', 'js', 'styles', 'serve']);