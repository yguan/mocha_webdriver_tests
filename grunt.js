module.exports = function(grunt) {

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					baseUrl: 'tests',
					mainConfigFile: 'tests/js/config.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('default', 'requirejs');
};
