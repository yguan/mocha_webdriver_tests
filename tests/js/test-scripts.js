
window.testConfig = {
    testScriptUrl: 'http://localhost:8000/' // change it to the site that hosts the scripts
};

(function () {

    // copied from http://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript/
    function loadScript(url, callback){
        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState){  //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = function(){
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    var testScriptUrl = window.testConfig.testScriptUrl;

    loadScript(testScriptUrl + 'js/lib/require.js', function () {
        loadScript(testScriptUrl + 'js/base.js');
    });
})();