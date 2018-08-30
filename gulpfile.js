var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'))
});

gulp.task('css', function(){
  return gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'))
});

gulp.task('js', function(){
  return gulp.src('src/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('js'))
});


gulp.task('img', function(){
    return gulp.src('src/img/*')
      .pipe(gulp.dest('img'))
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/*')
      .pipe(gulp.dest('fonts'))
});

gulp.task('default', [ 'html', 'css', 'js', 'img','fonts' ]);