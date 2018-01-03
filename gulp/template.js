const gulp = require('gulp');
const Handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const packageJson = require('../package');
const config = require('./config');
const projects = require('../data/projects');

const templateData = {
    year: (new Date()).getFullYear(),
    version: packageJson.version,
    static_host: '',
    api_host: config.api_host,
    app_host: config.app_host,
    projects
};

const readFile = filename => fs.readFileSync('./templates/'+filename+'.hbs').toString();

Handlebars.registerHelper('getKeyFromName', function(options) {
    return options.fn(this).toLocaleLowerCase().replace(' ', '-');
});


gulp.task('template', () => {
    const layout = Handlebars.compile(readFile('layout'));
    const renderPage = page => {
        const fullPath = path.join('./public/', page !== 'index' ? page : '', '/index.html');
        const dir = path.dirname(fullPath);

        if (!fs.existsSync(dir))
            fs.mkdirSync(dir);

        fs.writeFileSync(fullPath, layout({
            ...templateData,
            content: Handlebars.compile(readFile(page))(templateData)
        }));
    };

    renderPage('index');
    renderPage('projects');
});
