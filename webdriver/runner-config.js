
var testScriptHost = 'localhost:8000'; // change it to the site that hosts the scripts

var config = {
    webdriver: {
        server: {
            host: 'localhost',
            port: 4444,
            retries: 5,
            delay: 500
        },
        capabilities: {
            'browserName': 'firefox',
            'version': '',
            'platform': 'ANY',
            'javascriptEnabled': true
        }
    },
    testScriptHost: testScriptHost,
    testSiteUrl: 'http://www.jquery.com/',
    getScriptsToInject: function () {
        var cssInject = '$("head").append("<link rel=\'stylesheet\' href=\'http:\/\/{host}\/mocha.css\'\/>");',
            jsInject = '$("body").append("<script src=\'http:\/\/{host}\/js\/test-scripts.js\'><\/script>");';
        return (cssInject + jsInject).replace(/{host}/g, testScriptHost);
    }
};

module.exports = config;
