(function () {
    'use strict';
    var app = angular.module("dcm");

    app.controller("ArtCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = $rootScope.singleItem.Titel;
        $scope.itemMedia = $rootScope.singleItem.Medien
    });

    app.controller("ArtListCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Kunstwerke in Name Katalog';
    });

    app.controller("CatCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Katalog: ' + $rootScope.einKatalog.Titel;
        $scope.artworks = $rootScope.einKatalog.Kunstwerke;
        $scope.essays = $rootScope.einKatalog.Essays;

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
    });

    app.controller("EssayCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = $rootScope.singleItem.Titel;
    });

    app.controller("OptionsCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = "Optionen"
    });

    app.controller("LoginCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = "Login"
    });

}());
