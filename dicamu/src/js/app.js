angular.module('Dicamu', [
  'ngRoute',
  'mobile-angular-ui',
  'Dicamu.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});