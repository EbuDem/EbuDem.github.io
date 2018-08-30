var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var minify = require('gulp-minify');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');

gulp.task('html', function(){
  return watch('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('css', function(){
  return watch('src/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'))
});

gulp.task('js', function(){
  return watch('src/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('js'))
});


gulp.task('img', function(){
    return watch('src/img/*')
      .pipe(gulp.dest('img'))
});

gulp.task('fonts', function(){
    return watch('src/fonts/*')
      .pipe(gulp.dest('fonts'))
});

gulp.task('default', [ 'html', 'css', 'js', 'img','fonts' ]);