var injectJsFunc = function injectJs(link) {
        var scr = document.createElement('script');
        scr.type = 'text/javascript';
        scr.src = link;
        document.getElementsByTagName('head')[0].appendChild(scr);
    },
    injectJsActionsFunc = function injectJsActions() {
        var testscriptBaseUrl = 'http://localhost:8000/';
        injectJs(testscriptBaseUrl + 'js/lib/require.js');
        injectJs(testscriptBaseUrl + 'js/base.js');
    };

module.exports = function () {
    return injectJsFunc + injectJsActionsFunc + 'injectJsActions();';
};