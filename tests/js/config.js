var baseUrl = 'http://localhost:8000/';

requirejs.config({
	//appDir: 'tests',
    //baseUrl: 'js/lib',
    paths: {
		lib: 'js/lib',

		/* the dependencies below belong to tests*/
		mocha: 'js/lib/mocha',
		chai: 'js/lib/chai',
		jquery: 'js/lib/jquery-1.8.3.min',
		specs: 'js/specs'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        mocha: {
            exports: 'mocha'
        },
        chai: {
            exports: 'chai'
        }
    },
	dir: '../../www-built',
    modules: [
        {
            //module names are relative to baseUrl/paths config
            name: 'specs/all',
			exclude: ['jquery']
        }
    ]
});