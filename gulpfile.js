const { src, dest, watch, series } = require('gulp');
const less = require('gulp-less');

function css() {
  return src('less/*.less')
    .pipe(less())
    .on('error', function(err) {
      console.log('Error:', err);
    })
    .pipe(dest('css'));
}

function watchFiles() {
  watch('less/*.less', css);
}

exports.css = css;
exports.default = series(css, watchFiles);