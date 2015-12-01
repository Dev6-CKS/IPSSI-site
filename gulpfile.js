var gulp            = require('gulp');
var less            = require('gulp-less');
var browserify      = require('browserify');
var notify          = require("gulp-notify");
var watchify        = require('watchify');
var reactify        = require('reactify');
var source          = require('vinyl-source-stream');
var handleErrors    = require('./gulpHandleErrors');

gulp.task('less', function () {
    gulp.src('resources/assets/less/main.less') // path to your file
        .pipe(less({strictMath: true}).on('error', handleErrors))
        .pipe(gulp.dest('public/style'));
});

gulp.task('watch', function() {
  gulp.watch('resources/assets/less/**/*.less', ['less']);

  var watcher  = watchify(browserify({
    entries: ['resources/js/app.jsx'],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('public/js'))
      console.log('Updated');
  })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['watch']);