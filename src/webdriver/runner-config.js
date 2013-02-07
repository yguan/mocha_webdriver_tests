var testscriptBaseUrl = 'http://localhost:8000/';

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
    testSiteUrl: testscriptBaseUrl + 'test.html', //'http://www.jquery.com', //testscriptBaseUrl + 'test.html',
    getScriptsToInject: function () {
        var cssInject = '$("head").append("<link rel=\'stylesheet\' href=\'http:\/\/localhost:8000\/mocha.css\'\/>");',
            jsInject = '$("body").append("<script src=\'http:\/\/localhost:8000\/js\/test-scripts.js\'><\/script>");';
        return cssInject + jsInject;
    }
};

module.exports = config;
