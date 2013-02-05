requirejs.config({
	//appDir: 'tests',
    //baseUrl: 'js/lib',
    paths: {
		lib: 'js/lib',

		/* the dependencies below belong to tests*/
		chai: '../node_modules/chai/chai',
		jquery: 'js/lib/jquery-1.8.3.min',
		specs: 'js/specs'
    },
    shim: {
        jquery: {
            exports: '$'
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