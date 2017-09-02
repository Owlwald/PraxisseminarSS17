'use strict';



var app = angular.module('Dicamu', [
    "ngRoute",
    "mobile-angular-ui",
    'Dicamu.controllers.Main'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "home.html",
            reloadOnSearch: false
        })
        .when("/art", {
            templateUrl: "art.html",
            reloadOnSearch: false
        });

    $routeProvider.when('/catalog', {
        templateUrl: "catalog.html",
        reloadOnSearch: false
    });
    $routeProvider.when('/catalogues', {
        templateUrl: "catalogues.html",
        reloadOnSearch: false
    });
});