var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var sass = require('gulp-sass');

// add custom browserify options here
var customOpts = {
  entries: ['JavaScript.songs.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)); 


gulp.task('default', ['lint', 'watch', 'styles']);
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal


gulp.task('lint', function() {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', ['lint'], function() {
  gulp.watch(['./src/scripts/index.js'],[
    'lint',
    'browserify'
  ]);
  gulp.watch('./javascripts/**/*.js', ['lint']);
  gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('browserify', bundle);

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/'));
});

gulp.task('lint', function() {
  return gulp.src('./javascripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'));
}



