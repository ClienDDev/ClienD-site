const gulp = require('gulp');

require('./gulp/less');
require('./gulp/watch');
require('./gulp/server');
require('./gulp/copy');
require('./gulp/template');
require('./gulp/redirs');

gulp.task('default', ['less', 'copy', 'template', 'redirs']);
