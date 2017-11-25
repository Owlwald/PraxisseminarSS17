(function () {
    'use strict';

    var app = angular.module('dcm', [
        'ngRoute',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        'firebase',
    ]);

    app.controller("MainCtrl", function ($scope, $rootScope, $firebaseArray, $firebaseObject, $location) {

        $scope.data = {};

        firebase.database().ref().on('value', function (snapshot) {
            var data = snapshot.val();
            var museums = snapshot.child("Museum").val()
            $scope.museums = museums;
            // TODO das hier ist noch bissl problematisch
            var allcatalogues = snapshot.child("Museum/1/Kataloge").val()
            $scope.allcatalogues = allcatalogues

            var mycatalogues = snapshot.child("Gekaufte Kataloge").val()
            $scope.mycatalogues = mycatalogues;
            var user = snapshot.child("User").val()
            $scope.user = user;
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
        $rootScope.falselogin = false;

        $scope.logOut = function () {
            $rootScope.loggedin = false;
        };

        $scope.setCatalog = function (catalog) {
            $rootScope.einKatalog = catalog;
            $scope.checkIfBought(catalog);
        };

        //is called when catalog is tried to be opened
        $scope.checkIfBought = function (catalog) {
            var currentUser = $rootScope.loggedInUser;
            var boughtCats = currentUser["Gekaufte Kataloge"];
            // check if the currently opened catalog is bought by logged in user
            for (var i = 0; i < currentUser["Gekaufte Kataloge"].length; i++) {
                if (boughtCats[i]["Katalog-ID"] == catalog.ID &&
                    boughtCats[i]["Museum-ID"] == $rootScope.einMuseum.ID) {
                    $rootScope.catalogOwned = true;
                }
                $rootScope.index = i + 1;
            }
        }

        //is in this controller because db is defined here
        //can be outsourced to a database service in a bigger refactoring
        //writes bought catalog persistent to database
        $rootScope.buyCatDB = function () {
            firebase.database().ref('User/' + $rootScope.loggedInUser.ID + '/Gekaufte Kataloge/' + $rootScope.index).set({
                'Katalog-ID': $rootScope.einKatalog.ID,
                'Museum-ID': $rootScope.einMuseum.ID
            });
        }

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
            .when('/catalog', {
                templateUrl: "catalog.html",
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
            .when('/login', {
                templateUrl: "login.html",
                reloadOnSearch: false
            })
            .when('/my-catalogues', {
                templateUrl: "my-catalogues.html",
                reloadOnSearch: false
            });
    });
}());
