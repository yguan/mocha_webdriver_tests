module.exports = function(grunt) {

	grunt.initConfig({
        connect: {
            tests: {
                port: 8000, // if this is changed, make sure to change the port number in test-scripts.js and runner-config.js
                base: 'tests'
            }
        },
        bgShell: {
            _defaults: {
                bg: false
            },
            runTests: {
                cmd: 'node webdriver/test-runner.js' // path is for bash
            },
            startSeleniumServer: {
                cmd: 'java -jar "C:/Utilities/selenium/selenium-server-standalone-2.28.0.jar"' // path is for bash
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-bg-shell');
//	grunt.registerTask('default', 'connect:tests bgShell:runNode');
	grunt.registerTask('startTestServer', 'connect:tests');
	grunt.registerTask('startSeleniumServer', 'bgShell:startSeleniumServer');
	grunt.registerTask('runTests', 'bgShell:runTests');
};
