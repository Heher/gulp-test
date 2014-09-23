var gulp = require('gulp');
var gutil = require('gulp-util');

// require sass
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
  gulp.src('./assets/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/styles'));
});

gulp.task('default', ['sass']);