
require(['./js/config', './js/lib/jquery', './js/lib/mocha'], function () {
    $('body').append('<div id="mocha"></div>');
    window.mocha.ui('bdd');
    window.mocha.reporter('html');
    require(['specs/all'], function () {
        window.mocha.run();
    });
});