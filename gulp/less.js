const gulp = require('gulp');
const less = require('gulp-less');
const nano = require('gulp-cssnano');
const rename = require('gulp-rename');
const header = require('gulp-header');
const config = require('./config');
const banner = config.banner;

gulp.task('less-main3', function() {
    return gulp.src('static/styles/mobile3/base2.less')
        .pipe(less())
        .pipe(nano())
        .pipe(rename('base2.min.css'))
        .pipe(header(banner))
        .pipe(gulp.dest('public/static/styles/mobile3/'));
});
gulp.task('less-bootstrap', function() {
    return gulp.src('static/styles/mobile3/bootstrap/bootstrap.less')
        .pipe(less())
        .pipe(nano())
        .pipe(rename('bootstrap_cliend.min.css'))
        .pipe(gulp.dest('public/static/styles/mobile3/'));
});
gulp.task('less-bootstrap-full', function() {
    return gulp.src('static/styles/mobile3/bootstrap/bootstrap_full.less')
        .pipe(less())
        .pipe(nano())
        .pipe(rename('bootstrap_cliend.full.min.css'))
        .pipe(gulp.dest('public/static/styles/mobile3/'));
});

gulp.task('less', ['less-main3', 'less-bootstrap', 'less-bootstrap-full']);