var runnerConfig = require('./runner-config'),
    wd = require('wd')
    browser = wd.promiseRemote();

browser.on('status', function(info){
    console.log('\x1b[36m%s\x1b[0m', info);
});

browser.on('command', function(meth, path, data){
    console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
});

browser.init({
    browserName: 'firefox',
    tags: ['some test'],
    name: 'This is an example test'
}).then(function () {
        // should have some waiting logic here to wait for the page loaded everything
        return browser.get(runnerConfig.testSiteUrl);
    }).then(function () {
        return browser.execute(runnerConfig.getScriptsToInject());
    }).fin(function () {
        //browser.quit(); // todo: get the test results back and close the browser
    }).done();

