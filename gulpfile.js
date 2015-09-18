var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('default', function() {
  return gulp.src('*.png')
    .pipe(imageResize({ width: '50%' }))
    .pipe(gulp.dest('dist'));
});
