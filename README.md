# UI functional testing with mocha and webdriverjs

This repository contains skeleton example on how to use mocha and webdriverjs to write UI functional tests. Tests are written with mocha, and webdriverjs is used to inject the mocha tests to the page.

## Installation

Prerequisites

* node.js
* grunt.js (run `npm install -g grunt` to install it)
* have firefox installed

Steps

1. Open your bash console. `If use windows cmd, make sure to change the path in grunt.js.`
2. Navigate to the root folder, and then run `npm install`.
3. Download [Selenium server](http://selenium.googlecode.com/files/selenium-server-standalone-2.28.0.jar) and put in `C:/Utilities/selenium/selenium-server-standalone-2.28.0.jar`.

## Running the tests in a browser

In the root folder, run the following grunt commands sequentially in separate console window. Run `grunt.cmd` for Window cmd.

1. `grunt startTestServer`
2. `grunt startSeleniumServer`
3. `grunt runTests`

After running step 3, webdriver will open jquery.com and inject the mocha test to the page, and you should be able to see the test result at the bottom of the page.

If the test doesn't show up the browser, clear the cache of the browser, and then re-step 3 should fix it.