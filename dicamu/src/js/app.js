(function () {
    'use strict';

    var app = angular.module('dcm', [
        'ngRoute',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        'firebase'
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
            .when('/artlist', {
                templateUrl: "artlist.html",
                reloadOnSearch: false
            })
            .when('/art', {
                templateUrl: "art.html",
                reloadOnSearch: false
            });
    });

    app.factory('fireBaseData', function ($firebase) {
        var ref = new Firebase("https://dicamu-1ed50.firebaseio.com"),
            refUsers = new Firebase("https://dicamu-1ed50.firebaseio.com/User"),
            refMuseums = new Firebase("https://dicamu-1ed50.firebaseio.com/Museum");
        return {
            ref: function () {
                return ref;
            },
            refUsers: function () {
                return refUsers;
            },
            refMuseums: function () {
                return refMuseums;
            }
        }
    });

}());