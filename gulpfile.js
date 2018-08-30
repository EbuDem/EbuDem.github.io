var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function(){
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'))
});

gulp.task('css', function(){
  return gulp.src('less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('js', function(){
  return gulp.src('js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('build/js'))
});


gulp.task('img', function(){
    return gulp.src('img/*')
      .pipe(gulp.dest('build/img'))
});

gulp.task('fonts', function(){
    return gulp.src('fonts/*')
      .pipe(gulp.dest('build/fonts'))
});

gulp.task('default', [ 'html', 'css', 'js', 'img','fonts' ]);