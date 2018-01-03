$(document).ready(function() {
    $('#loginform').submit(function(e){
        e.preventDefault();
        const $this = $(this);
        const login = $this.find('#login').val();
        const pass = $this.find('#pass').val();
        $this.find('button').text('Происходит вход...');

        const url = 'http://app.cliend.ru';
        const w = window.open(url);

        console.log(w);
        $(w).ready(function() {
            setTimeout(function() {
                console.log('app loaded');
                w.postMessage({cliendLogin: {login: login, pass: pass}}, url);
                w.focus();
                // window.close();
            }, 500);
        });
    })
});