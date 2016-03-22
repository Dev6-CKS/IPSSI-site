var gulp            = require('gulp');
var less            = require('gulp-less');
var browserify      = require('browserify');
var notify          = require("gulp-notify");
var watchify        = require('watchify');
var reactify        = require('reactify');
var source          = require('vinyl-source-stream');
var handleErrors    = require('./gulpHandleErrors');

var showFileUpdated = function(files){
    console.log('File(s) updated :');
    files.forEach(function(file){
        console.log('-' + file);
    });
};

gulp.task('less', function () {
    gulp.src('resources/assets/less/main.less') // path to your file
        .pipe(less({strictMath: true}).on('error', handleErrors))
        .pipe(gulp.dest('public/style'));
});

gulp.task('watch', function() {
  gulp.watch('resources/assets/less/**/*.less', ['less']);

  var watcher = watchify(browserify({
    entries: ['resources/js/app.jsx'],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function (files) {
    watcher.bundle().on('error', handleErrors)
      .pipe(source('main.js'))
      .pipe(gulp.dest('public/js'))
      showFileUpdated(files);
  })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['watch']);