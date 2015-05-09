/**
 * Created by smaeung on 5/3/15.
 */
angular.module('demoViews',['ngRoute', 'ngResource', 'increment'])
    .constant('DEMO_VIEWS_PATH','/AngularJSDemo/demo-views')
    .config( function ($routeProvider, $locationProvider, DEMO_VIEWS_PATH){
        $locationProvider.html5Mode(true);

        $routeProvider.when('/list',{
            templateUrl: DEMO_VIEWS_PATH+'/views/tableView.html'
        });

        $routeProvider.when('/edit',{
            templateUrl: DEMO_VIEWS_PATH+'/views/editorView.html'
        });

        $routeProvider.when('/create',{
            templateUrl: DEMO_VIEWS_PATH+'/views/editorViews.html'
        });

        $routeProvider.otherwise({
            templateUrl: DEMO_VIEWS_PATH+'/views/tableView.html'
        });

    });