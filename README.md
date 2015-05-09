# AngularJS Demo — Product List app

This project is an application skeleton for [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.



## Getting Started

To get you started you can simply clone the AngularJSDemo repository and install the dependencies:

### Prerequisites

We also use a number of node.js tools to initialize. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone AngularJSDemo

Clone the AngularJSDemo repository using [git][git]:

```
git clone https://github.com/smaeung/AngularJSDemo.git
cd AngularJSDemo
```

If you just want to start a new project without the angular-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/smaeung/AngularJSDemo.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install bower
bower install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
AngularJSDemo changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
for WebStrom IDE, right click AngularJSDemo/demo-views/demoViews.html, and select "Run"
```

Now browse to the app at `http://localhost:xxxxx/AngularJSDemo/demo-views/demoViews.html`.


## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
