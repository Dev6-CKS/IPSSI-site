import gulp from 'gulp'
import less from 'gulp-less'
import watchify from 'watchify'
import browserify from 'browserify'
import browserSync from 'browser-sync'
import babelify from 'babelify'
import source from 'vinyl-source-stream'

import {handleErrors} from './gulpHandleErrors'

const envs = {
  DEV  : "DEV",
  TEST : "TEST",
  PROD : "PROD"
}

let env = envs.DEV; // Default DEV
let port = env == envs.TEST ? 8010 : 8000;

const showFileUpdated = (files) => {
  console.log('File(s) updated :');
  files.forEach((file) => {
    console.log('-' + file);
  })
}

const reactifyES6 = (file) => {
  return reactify(file, {'es6': true});
}

gulp.task('browser-sync', function() {
  browserSync.init({
    target: "localhost:" + port,
    open: env == envs.TEST ? false : true,
    port: port,
    server: {
      baseDir: "./"
    }
  })
})

gulp.task('less', () => {
  gulp.src('resources/assets/less/main.less')
    .pipe(less({strictMath: true}).on('error', handleErrors))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('./public/css'));
})

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch('resources/assets/less/**/*.less', ['less']);

  const watcher = watchify(browserify({
      entries: ['./resources/js/app.jsx'],
      transform: [babelify],
      debug: true,
      cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', (files) => {
      watcher.bundle().on('error', handleErrors)
          .pipe(source('main.js'))
          .pipe(gulp.dest('./public/js'))
      showFileUpdated(files);
  })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./public/js'));
})

gulp.task('default', ['watch'], () => {
  gulp.watch("./public/js/main.js").on('change', browserSync.reload)
})