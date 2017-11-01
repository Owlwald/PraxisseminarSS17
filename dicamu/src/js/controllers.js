(function () {
    'use strict';
    var app = angular.module("dcm");

    app.controller("ArtCtrl", function ($scope, $rootScope) {
        $scope.itemMedia = $rootScope.singleItem.Medien;
        $rootScope.notart = false;
    });

    app.controller("ArtListCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Kunstwerke in Name Katalog';
    });

    app.controller("TopCtrl", function ($scope, $rootScope) {

        $scope.setStatus = function () {
            if ($rootScope.notgrid) {
                $rootScope.notgrid = false;
            } else {
                $rootScope.notgrid = true;
            }
        }
    });

    app.controller("CatCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Katalog: ' + $rootScope.einKatalog.Titel;
        $scope.artworks = $rootScope.einKatalog.Kunstwerke;
        $scope.essays = $rootScope.einKatalog.Essays;
        $rootScope.notart = true;
        $scope.setItem = function (item) {
            $rootScope.singleItem = item;
        }
    });

    app.controller("MuseumCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = $rootScope.einMuseum.Name;
        $scope.catalogues = $rootScope.einMuseum.Kataloge;

        $scope.setCatalog = function (catalog) {
            $rootScope.einKatalog = catalog;
        }
    });

    app.controller("MyCatCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Meine Kataloge';

        $scope.setChosenCatalog = function (catalog) {
            $rootScope.einKatalog = catalog;
        }
    });


    app.controller("AllCatCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Alle Kataloge';

        $scope.setChosenCatalog = function (catalog) {
            $rootScope.einKatalog = catalog;
        }
    });

    app.controller("HomeCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Museen';
        $rootScope.notart = true;
        $rootScope.notgrid = true;
    });

    app.controller("EssayCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = $rootScope.singleItem.Titel;
        $rootScope.notart = false;
    });

    app.controller("OptionsCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = "Optionen"
    });

    app.controller("LoginCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = "Login";
        $scope.email = {};
        $scope.password = {};
        $scope.loginCheck = function () {

            console.log($scope.user);
            console.log("you used this email:" + $scope.email.txt);
            console.log("you used this password:" + $scope.password.txt);

            for (var i = 1; i < $scope.user.length; i++) {
                if ($scope.user[i].Name === $scope.email.txt) {
                    if ($scope.user[i].Passwort === $scope.password.txt) {
                        console.log("login successful");
                        $rootScope.loggedin = true;
                        $rootScope.chosenOne = $scope.user[i];
                        break;
                    }
                } else {
                    console.log("false login")
                }
            }

        }
    });

}());
