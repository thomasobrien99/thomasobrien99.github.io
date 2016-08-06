const app = angular.module('tpoPortfolio', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
		})
		.when('/about', {
			templateUrl: 'partials/about.html',
		})
		.otherwise({
			redirectTo:'/'
		})
		//$locationProvider.html5Mode({enabled:true})
})