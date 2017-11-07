(function () {
    'use strict';

    var app = angular.module('dcm', [
        'ngRoute',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        'firebase',
    ]);

    app.controller("MainCtrl", function ($scope, $rootScope, $firebaseArray, $firebaseObject) {

        $scope.data = {};

        firebase.database().ref().on('value', function (snapshot) {
            var data = snapshot.val();
            var museums = snapshot.child("Museum").val()
            $scope.museums = museums;
            // das hier ist noch bissl problematisch
            var allcatalogues = snapshot.child("Museum/1/Kataloge").val()
            $scope.allcatalogues = allcatalogues
            // ------

            var mycatalogues = snapshot.child("Gekaufte Kataloge").val()
            $scope.mycatalogues = mycatalogues;
            var user = snapshot.child("User").val()
            $scope.user = user;
            //TODO delete when development finished:
            //console.log(data);
            //console.log(museums);
            //console.log(mycatalogues);
            //console.log(allcatalogues);
            $scope.$apply();
        });

        //set selected museum
        $scope.setMuseum = function (museum) {
            $rootScope.einMuseum = museum;
        }
        $scope.setMyCatalog = function (catalog) {
            $rootScope.chosenCatalog = catalog;
        }
        $rootScope.notgrid = true;
        $rootScope.loggedin = false;
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
            .when('/museum', {
                templateUrl: "museum.html",
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
            })
            .when('/essay', {
                templateUrl: "essay.html",
                reloadOnSearch: false
            })
            .when('/all-catalogues', {
                templateUrl: "all-catalogues.html",
                reloadOnSearch: false
            })
            .when('/options', {
                templateUrl: "options.html",
                reloadOnSearch: false
            })
            .when('/login', {
                templateUrl: "login.html",
                reloadOnSearch: false
            });
    });
}());
