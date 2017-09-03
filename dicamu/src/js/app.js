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
        .when('/home', {
            templateUrl: "home.html",
            reloadOnSearch: false
        })
        .when('/my-catalogues', {
            templateUrl: "my-catalogues.html",
            reloadOnSearch: false
        })
        .when('/catalog', {
            templateUrl: "catalog.html",
            reloadOnSearch: false
        })
        .when("/art", {
            templateUrl: "art.html",
            reloadOnSearch: false
        });
});