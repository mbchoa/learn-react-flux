// var gulp = require('gulp');
// var react = require('gulp-react');
// var concat = require('gulp-concat');
//
// gulp.task('default', function() {
//   // tells gulp to:
//   //  1. go into src directory and load every file in folder (**)
//   //  2. convert loaded jsx files to js
//   //  3. concat all js files to single applicaiton.js file
//
//   return gulp.src('src/**') // ** = load every file in src folder
//     .pipe(react()) // turn jsx files to js; pipe denotes next steps
//     .pipe(concat('application.js')) // concat to single application .js file
//     .pipe(gulp.dest('./')) // copy application.js file to destination dir
// });

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');  // throwing text files to another
var browserify = require('browserify'); // dependency management
var watchify = require('watchify'); // automatically reruns gulpfile when /src files change
var reactify = require('reactify'); // converts jsx files to js

gulp.task('default', function() {
  // bundler - responsible for running browserify on code base
  var bundler = watchify(browserify({
    //config properties
    entries: ['./src/app.jsx'], // entry point where main application will run
    transform: [reactify],  // tells browserify to compile jsx to js
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  // executes bundler work
  function build(file) {
    if(file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle() // do work
      .on('error', gutil.log.bind(gutil, 'Browserify Error')) // log out on error
      .pipe(source('main.js'))  // similar to concat and gulp.dest; compile to single file called main.js
      .pipe(gulp.dest('./')); // put in current working directory
  };

  build() // build now
  bundler.on('update', build); // make a change on files, build again
});
