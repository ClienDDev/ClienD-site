const gulp = require('gulp');
const livereload = require('gulp-livereload');

gulp.task('watch', function(){
    livereload.listen();
    const cb = () => livereload.reload();

    gulp.watch('./static/js/mobile3/base.js', ['uglify-base3', cb]);
    gulp.watch('./static/styles/mobile3/*.less', ['less-main3', cb]);
    gulp.watch('./static/styles/mobile3/bootstrap/*', ['less-bootstrap', cb]);
});
