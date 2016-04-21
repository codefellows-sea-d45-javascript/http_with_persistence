'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var expect = require('chai').expect;
var jshint = require('gulp-jshint');
var appFiles = ['server.js', './lib/**/*.js'];
var testFiles = ['./test/**/*.js'];

gulp.task('jshint:test', () => {
	return gulp.src(testFiles)
		.pipe(jshint({
				node: true,
				globals: {
					describe: true,
					it: true,
					before: true,
					after: true
				}
		}))
		.pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', () => {
	return gulp.src(appFiles)
	.pipe(jshint({
		node: true
	}))
	.pipe(jshint.reporter('default'));
});


gulp.task('mocha:test', () => {
	return gulp.src(testFiles)
	.pipe(mocha({
		reporter: 'spec' }));
});

gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('mocha', ['mocha:test']);
gulp.task('default', ['jshint']);
