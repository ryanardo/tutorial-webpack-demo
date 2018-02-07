## For Wed, 2/7/18
## *_NOTE_*
* ESC6/ES2015: Note that webpack will not alter any code other than import and export statements. If you are using other ES2015 features, make sure to use a transpiler such as Babel or Bublé via webpack's loader system.

# PART 1. NPM Commands to Run
* npm init -y
	* initializes NPM Packages in the project.
* npm install --save-dev webpack
	* installs the webpack module into the project directory.

# PART 2. Import dependencies using NPM
* use 'npm install' statements to install npm package dependencies into your project directory.

# PART 3. HTML 'script' tags consolidation
* Create a JS file to hold all your webpack dependencies.
	* Remove 'script' tags from your HTML files.
	* Create ECMA6 import statements in your new JS file to replace the removed HTML script tags.

# PART 4. Run script to create 'bundle.js' file.
* $ npx webpack entryPoint output
	* replace entryPoint with the main .js file containing all imports
	* replace output with the new file to create with the result
	* example: npx webpack src/index.js dist/bundle.js
* Package.json
	* Add build script to allow NPM to run the webpack build command.
		* NPM Build Script:
		```
		"scripts": {
			"build": "webpack"
		},
		```

# PART 5. Asset Management
* Loaders
	* 'test:' The test property identifies which file or files should be transformed.
	* 'use:' The use property indicates which loader should be used to do the transforming.

	* CSS (download test image prior to running these steps)
		* RUN: npm install --save-dev file-loader
		* Update webpack config file to include/use the file-load module.
		* Update the index.js to import the image into the JavaScript, and then insert the newly added image into the index.html file.

# PART 6. Output Management
* Add multiple entry points, and outputs corresponding exits (EXPLAIN WITH GREATER DETAIL IN FINAL DRAFT).

# PART 7. Development
* Add line 'devtool: 'inline-source-map',' to the webpack config file to have JavaScript monitor your source files and bugs after they have been bundled into a single file.

# PART 8. Production
* Split webpack config files into x3 config files (common, development, production)
	* Common:
		* Contains all plugins, devtools, packages, etc. that are necessary in every environment of your project.
	* Development:
		* Contains all plugins, devtools, packages, etc. that are necessary in the Development environment of your project.
		* in this case: settings for the development server
	* Production:
		* Contains all plugins, devtools, packages, etc. that are necessary in the Production environment of your project.
		* in this case: plugin for minifying code, deleting unused code

# PART 9. Testing with Mocha
* npm install mocha mocha-webpack --save-dev
	* install mocha itself and its webpack wrapper to node_modules, save both to the dev side
* npm install webpack-node-externals --save-dev
	* performance increase to mocha; allows mocha to only load the plugins required for the test
* create a config file for mocha.
	* most examples say webpack.config-test.js, this repo calls it webpack.mocha.js
	* this will contain configuration specifically for mocha (in this case, calling node externals)
* create script in package.json to run tests
	* ``` "test": "mocha-webpack --webpack-config webpack.mocha.js \"test/**/*test.js\"" ```
	* breakdown:
	* ```"script name": "[call mocha] --webpack-config(point to a config file for mocha) [mocha config file you made] \"file or file pattern to test\"```
* create tests
	* import the files to test from. Use es6 terminology for export functions, as used here.
	* assert is built into node
	* outer describe statement should point to the filename
	* inner describe points to individual functions
