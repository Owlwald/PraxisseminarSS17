angular.module('Felixapp', [
  'ngRoute',
  'mobile-angular-ui',
  'Felixapp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});