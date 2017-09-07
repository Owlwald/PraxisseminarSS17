(function () {
    'use strict';

    var app = angular.module('dcm', [
        'ngRoute',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        'firebase',
    ]);

    app.controller("MainCtrl", function ($scope, museumService, $firebaseArray) {

        $scope.data = {};
        $scope.data.museums = museumService.getMuseums();

        //get museum data
        /* firebase.database().ref('Museum').on('value', function (snapshot) {
             var data = snapshot.val();
             $scope.museums = data;
             console.log(data);
             $scope.$apply();
         });*/

    });

    app.factory('museumService',
        function ($firebaseArray) {
            var museums = firebase.database().ref('Museum').$asArray();

            var getMuseums = function () {
                console.log('getMuseums');
                return museums;
            };
        });

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
}());