const gulp = require('gulp');
const serve = require('gulp-serve');
const config = require('./config');

gulp.task('server', serve({
    root: config.public,
    port: 3000
}));
