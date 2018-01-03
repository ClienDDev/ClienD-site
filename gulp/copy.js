const gulp = require('gulp');

gulp.task('copy-fa-css', () => gulp.src([
    './node_modules/font-awesome/css/*'
]).pipe(gulp.dest('./public/dist/font-awesome/css/')));

gulp.task('copy-fa-fonts', () => gulp.src([
    './node_modules/font-awesome/fonts/*'
]).pipe(gulp.dest('./public/dist/font-awesome/fonts/')));

gulp.task('copy', ['copy-fa-css', 'copy-fa-fonts']);
