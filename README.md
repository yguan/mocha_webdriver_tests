# UI functional testing with mocha and webdriverjs

This repository contains skeleton example on how to use mocha and webdriverjs to write UI functional tests. Tests are written with mocha, and webdriverjs is used to inject the mocha tests to the page.

## Installation and Build

Steps

1. Installation
   * Open your command line console.
   * Navigate to the root folder, and then run `npm install`.
2. Build
   * In the root folder, run `grunt` if use bash; otherwise run `grunt.cmd` for Window cmd.
   * The build output should be in `www-built` folder as specified in `config.js`.

## Running the tests in a browser

To run without packaging, open the test.html file under `[root]/tests` folder.

To run with packaging, open the test.html file under `[root]/www-built` folder.