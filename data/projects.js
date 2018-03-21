const timur = {
    'name': 'Тимур Мустафин',
    'link': 'http://timur.clienddev.ru'
};
const artur = {
    'name': 'Артур Атнагулов',
    'link': 'http://i.atnartur.ru',
    'post': 'Главный разработчик'
};
const ilya = {
    'name': 'Илья Чирков',
    'link': 'http://mssg.me/chirkov',
    'post': 'Android-разработчик'
};
const bulat = {
    'name': 'Булат Хабиров',
    'link': 'https://mssg.me/khabiroff',
    'post': 'iOS-разработчик'
};
const andrew = {
    'name': 'Андрей Александров',
    'link': 'https://github.com/postgred',
    'post': 'Системный администратор'
};

const projects = {
    'ClienD backend': {
        'text': '<p>Занимается парсингом, сжатием, подготовкой данных для мобильных приложений (API).</p>',
        'tech': 'nginx, PHP5, MySQL (Percona DB), Redis, Docker, Gitlab CI',
        'year': 'c 2013',
        'people': [
            {...artur, post: 'Главный разработчик, системный администратор'},
            {...timur, post: 'Руководитель проекта, разработчик'},
            andrew
        ]
    },
    'ClienD frontend': {
        'link': 'http://app.cliend.ru',
        'text': '<p>Веб-приложение</p>',
        'tech': 'HTML, CSS (Bootstrap), JavaScript (jQuery), gulp',
        'year': 'c 2013',
        'people': [
            {...artur, post: 'Главный разработчик, дизайнер, системный администратор'},
            {...timur, post: 'Руководитель проекта, разработчик'},
            {
                'name': 'Савелий Красовский',
                'link': 'https://krasovsky.me/',
                'post': 'Дизайнер'
            }
        ]
    },
    'ClienD.ru': {
        'link': 'http://cliend.ru',
        'text': '<p>Главный сайт ClienD с информацией о всех подпроектах и приложениях</p>',
        'tech': 'HTML, CSS (Bootstrap), JavaScript (jQuery), gulp',
        'year': 'c 2013',
        'people': [
            {...artur, post: 'Главный разработчик, дизайнер, системный администратор'},
            {...timur, post: 'Руководитель проекта, разработчик'},
            {
                'name': 'Савелий Красовский',
                'link': 'https://krasovsky.me/',
                'post': 'Дизайнер'
            }
        ]
    },
    'ClienD for Android': {
        'link': 'http://android.cliend.ru',
        'text': '<p>Android-приложение</p>',
        'tech': 'Java 8, Robospice',
        'year': 'c 2014',
        'people': [ilya]
    },
    'ClienD for iOS': {
        'link': 'http://ios.cliend.ru',
        'text': '<p>iOS-приложение</p>',
        'tech': 'Swift 4, J2ObjC',
        'year': 'c 2014',
        'people': [bulat]
    },
    'Расширение ClienD': {
        'text': '<p>Упрощает и ускоряет выставление оценок, помогает системным администраторам работать с сайтом электронного образования. Проект с открытым исходным кодом.</p>',
        'link': 'http://ext.cliend.ru',
        'year': 'c 2014',
        'tech': 'HTML, CSS (Bootstrap), JavaScript (jQuery), gulp',
        'people': [artur]
    },
    'ClienD bot': {
        'link': 'http://t.me/cliendbot',
        'text': '<p>Бот для Telegram</p>',
        'tech': 'NodeJS (express, node-telegram-bot-api)',
        'year': 'c 2017',
        'people': [
            artur,
            {
                'name': 'Зарина Афлятунова',
                'link': 'https://vk.com/start_number1'
            }, {
                'name': 'Анна Новикова',
                'link': 'https://vk.com/id135084044'
            },
        ]
    },
    'ClienD proxy': {
        'text': '<p>Скрипт для настройки proxy-серверов для Wireless@School на Linux. Проект с открытым исходным кодом.</p>',
        'link': 'http://proxy.cliend.ru',
        'year': 2015,
        'tech': 'NodeJS, Bash',
        'people': [artur]
    },
    'ClienD status': {
        'text': '<p>Отображает статистику запросов на edu.tatar.ru от системы бекенд-серверов ClienD: частота, тип, источник.</p>',
        'link': 'http://status.cliend.ru',
        'year': 'c 2014',
        'tech': 'HTML, CSS (Bootstrap), JavaScript (jQuery, Socket.io), gulp, PHP5 (Phalcon 2), NodeJS (Socket.io), Redis',
        'people': [artur]
    },
    'ClienD stat': {
        'text': '<p>Сайт со статистикой</p>',
        'tech': 'HTML, CSS (Bootstrap, Admin LTE), JavaScript (jQuery, moment, highcharts), PHP5 (Phalcon 2), MySQL',
        'year': 'c 2016',
        'people': [artur]
    },
    'Рекламная система (1 версия)': {
        'text': '<p>Система для показа рекламы в приложениях</p>',
        'tech': 'HTML, CSS (Bootstrap), JavaScript (jQuery), PHP5 (Phalcon 2), MySQL',
        'link': 'https://github.com/braska/SimpleBannerRotator',
        'year': '2015-2017',
        'people': [
            {
                'name': 'Данил Агафонов',
                'link': 'http://www.live-notes.ru/',
                'post': 'Веб-разработчик'
            },
            artur
        ]
    },
    'Рекламная система (2 версия)': {
        'text': '<p>Система для показа рекламы в приложениях - обновленная версия. Ушли проблемы с перегрузками базы' +
        'данных во время подсчета статистики.</p>',
        'tech': 'HTML, CSS (Bootstrap), JavaScript (jQuery), .NET Core 2, ASP.NET Core, Entity Framework Core, Handlebars, MySQL',
        'link': 'https://github.com/atnartur/ads-system',
        'year': 'c 2017',
        'people': [
            artur,
            {
                'name': 'Данила Бутин',
                'link': 'https://vk.com/id176956071',
                'post': '.NET-разработчик'
            }
        ]
    },
    'Crossplatform parser': {
        'text': '<p>Реализация парсера вместе с выполнением сетевых запросов на edu.tatar.ru. Библиотека встраивается в мобильные приложения и в серверную часть.</p>',
        'tech': 'Java 8, Gradle, J2ObjC',
        'year': 'c 2017',
        'people': [artur, ilya, bulat]
    },
    'api tests': {
        'text': '<p>Автоматические тесты на backend API</p>',
        'tech': 'Python 3 (unittest)',
        'year': 2017,
        'people': [
            artur,
            {
                'name': 'Альбина Галимзянова',
                'link': 'https://vk.com/albina_galimzyanova'
            }
        ]
    },
    'edutatar.js': {
        'text': '<p>Реализация парсера вместе с выполнением сетевых запросов на edu.tatar.ru.</p>',
        'tech': 'NodeJS',
        'year': 2015,
        'people': [artur]
    },
    'last visit worker': {
        'text': '<p>По ночам собирает статистику из базы данных, складывает в определенное место для сайта статистики и отправляет информацию в Telegram.</p>',
        'year': 2016,
        'tech': 'NodeJS (node-telegram-bot-api)',
        'people': [artur]
    },
    'web balancer': {
        'text': '<p>Балансировщик backend-серверов</p>',
        'year': 'c 2014',
        'tech': 'nginx',
        'people': [artur, andrew]
    },
    'edutataremul': {
        'text': '<p>Эмулятор edu.tatar.ru</p>',
        'tech': 'PHP',
        'year': 2014,
        'people': [artur]
    },
};

module.exports = projects;
