var todoapp = angular.module('todoapp', ['ngResource','ngRoute']);

todoapp.config(['$routeProvider','$locationProvider','$httpProvider',function($routeProvider, $locationProvider,$httpProvider) {
    $routeProvider
    // Home Route
    .when('/' , {
      templateUrl : '/templates/home/index.html',
      controller  : 'home_controller'
    })
    .when('/login' , {
      templateUrl : '/templates/login/index.html',
      controller  : 'login_controller'
    })
    .otherwise({
        redirectTo: '/'
      });

}])