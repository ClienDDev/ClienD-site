const moment = require('moment');
moment.locale('ru');


module.exports = {
    banner: '/*! ClienD site (build ' + moment().format('L LT') + ') by ClienDDev */' + "\r\n",
    public: './public/',
    api_host: 'http://api.cliend.ru',
    app_host: 'http://app.cliend.ru'
};
