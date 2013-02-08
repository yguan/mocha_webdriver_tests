
window.testConfig = {
    testScriptUrl: 'http://localhost:8000/' // change it to the site that hosts the scripts
};

(function () {
    function injectJs(link) {
        var scr = document.createElement('script');
        scr.type = 'text/javascript';
        scr.src = link;
        document.getElementsByTagName('head')[0].appendChild(scr);
    }

    var testScriptUrl = window.testConfig.testScriptUrl;

    injectJs(testScriptUrl + 'js/lib/require.js');
    injectJs(testScriptUrl + 'js/base.js');
})();