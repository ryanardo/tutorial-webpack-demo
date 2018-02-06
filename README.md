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
	* CSS
		* The test property identifies which file or files should be transformed.
		* The use property indicates which loader should be used to do the transforming. 
