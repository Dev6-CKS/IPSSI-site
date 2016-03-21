import gulp from 'gulp'
import less from 'gulp-less'
import notify from 'gulp-notify'
import watchify from 'watchify'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'

import handleErrors from './gulpHandleErrors'

const showFileUpdated = (files) => {
    console.log('File(s) updated :')
    files.forEach(function(file){
        console.log('-' + file)
    })
}

gulp.task('less', () => {
    gulp.src('resources/assets/less/main.less') // path to your file
        .pipe(less({strictMath: true}).on('error', handleErrors))
        .pipe(gulp.dest('public/style'))
});

gulp.task('watch', () => {
  gulp.watch('resources/assets/less/**/*.less', ['less'])

  const watcher = watchify(browserify({
    entries: ['resources/js/app.jsx'],
    transform: [babelify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }))

  return watcher.on('update', (files) => {
    watcher.bundle().on('error', handleErrors)
      .pipe(source('main.js'))
      .pipe(gulp.dest('public/js'))
      showFileUpdated(files)
  })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('public/js'))
});

gulp.task('default', ['watch'])