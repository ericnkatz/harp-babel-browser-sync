#harp-babel-browser-sync

Harp boilerplate with babeljs, webpack and browser-sync for ES6+ friendly development.

*important*
Webpack is used for bundling/managing .js files, Harp defaults handle all templating/styling. Update Gulpfile accordingly to adjust watchers/browser-sync settings.
Based on the works of [harp-babel](https://github.com/glued/harp-babel/) and some Harp [Gulpfile](https://gist.github.com/superhighfives/b5dec8d56f1fde029f4a) [gists](https://gist.github.com/geelen/a5fcb013de67f680cb8d).

##setup

	harp init -b ericnkatz/harp-babel-browser-sync
	npm install

###Run
Run for development
`npm run dev`
This should default to http://localhost:3000


Run for production
`npm run prod` 

In production, the javascript is minified and sourcemaps are removed.
This will also lint your code using ESLint and JSCSrc and deploy production static site into `dist` folder.


These commands are defined in package.json

##Libs

####Harp
Static Site Server/Generator with built-in preprocessing ( Jade, less, etc )

[http://harpjs.com/](http://harpjs.com/)
[https://github.com/sintaxi/harp](https://github.com/sintaxi/harp)

####Babel
Babel is a compiler for writing next generation JavaScript

[https://babeljs.io/](https://babeljs.io/)
[https://github.com/babel/babel](https://github.com/babel/babel)

####Webpack
[https://github.com/webpack/webpack](https://github.com/webpack/webpack)

####Eslint
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
[https://github.com/eslint/eslint](https://github.com/eslint/eslint)
[https://github.com/babel/babel-eslint](https://github.com/babel/babel-eslint)

###JSCSrc
JSCS is a code style linter for programmatically enforcing your style guide.
[https://github.com/jscs-dev/node-jscs](https://github.com/jscs-dev/node-jscs)
[https://github.com/jscs-dev/babel-jscs](https://github.com/jscs-dev/babel-jscs)
