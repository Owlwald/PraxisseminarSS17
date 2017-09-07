(function () {
    'use strict';
    var app = angular.module("dcm");

    app.controller("ArtCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Museen';
    });

    app.controller("ArtListCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Museen';
    });

    app.controller("CatCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Museen';
    });

    app.controller("MyCatCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Museen';
    });

    app.controller("HomeCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Museen';
    });
}());