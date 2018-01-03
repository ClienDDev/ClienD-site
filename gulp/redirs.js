const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const config = require('./config');

gulp.task('redirs', () => {
    const redirs = {
        '/about': '/projects',
        '/app': 'http://app.cliend.ru'
    };
    for (let name in redirs) {
        const dest = redirs[name];
        const fullpath = path.join(config.public, name, '/');
        if (!fs.existsSync(fullpath))
            fs.mkdirSync(fullpath);

        let html = `<!DOCTYPE html>
                    <html>
                        <head>
                            <meta charset="utf-8">
                            <link rel="canonical" href="${dest}">
                            <meta http-equiv="refresh" content="0; url=${dest}">
                        </head>
                    </html>`;

        fs.writeFileSync(path.join(fullpath, 'index.html'), html);
    }
});