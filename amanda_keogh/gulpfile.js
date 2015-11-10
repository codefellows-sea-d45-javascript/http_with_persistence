var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var expect = require('chai').expect;

var appFiles = ['server.js'];
var testFiles = ['gulpfile.js', __dirname + '/test/**/*.js'];

gulp.task('jshint:apps', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true,
      globals: {
        describe: true,
        it: true
      }
    })).pipe(jshint.reporter('default'));
});

gulp.task('jshint:tests', function() {
  return gulp.src(testFiles)
    .pipe(jshint({
      node: true,
      globals: {
        describe: true,
        it: true
      }
    })).pipe(jshint.reporter('default'));
});

gulp.task('mocha', function() {
  return gulp.src(appFiles)
    .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch(appFiles, ['jshint:apps', 'mocha']);
  gulp.watch(testFiles, ['jshint:tests']);
});

gulp.task('default', ['watch']);
