(function () {
    'use strict';
    var app = angular.module("dcm");

    app.controller("HomeCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Museen';
        $rootScope.notart = true;
        $rootScope.notgrid = true;
    });


    /********************* Menü-Controller ********************/
    app.controller("TopCtrl", function ($scope, $rootScope) {

        $scope.setStatus = function () {
            if ($rootScope.notgrid) {
                $rootScope.notgrid = false;
            } else {
                $rootScope.notgrid = true;
            }
        }
    });


    /********************* Exponat-/Essay-Controller ********************/

    app.controller("ArtListCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Kunstwerke in Name Katalog';
    });

    app.controller("ArtCtrl", function ($scope, $rootScope) {
        $scope.itemMedia = $rootScope.singleItem.Medien;
        $rootScope.notart = false;
    });

    app.controller("EssayCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = $rootScope.singleItem.Titel;
        $rootScope.notart = false;
    });


    /********************* Museum-Controller ********************/
    app.controller("MuseumCtrl", function ($scope, $rootScope, $firebaseArray, $firebaseObject) {
        $rootScope.topTitle = $rootScope.einMuseum.Name;
        $scope.catalogues = $rootScope.einMuseum.Kataloge;
        $rootScope.catalogOwned = false;
    });


    /********************* Katalog-Controller ********************/

    app.controller("CatCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Katalog: ' + $rootScope.einKatalog.Titel;
        $rootScope.notart = true;
        $scope.artworks = $rootScope.einKatalog.Kunstwerke;
        $scope.essays = $rootScope.einKatalog.Essays;

        $scope.setItem = function (item) {
            $rootScope.singleItem = item;
        }

        $scope.buy = function () {
            console.log("buy this!");
            $rootScope.buyCatDB();
            $rootScope.catalogOwned = true;
        }
    });

    app.controller("MyCatCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Meine Kataloge';
        $rootScope.catalogOwned = true;
        $scope.boughtCats = $rootScope.boughtCatalogs;

        $scope.setChosenCatalog = function (catalog) {
            $rootScope.einKatalog = catalog;
        }
    });

    app.controller("AllCatCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = 'Alle Kataloge';
    });


    /********************* Login-Controller ********************/

    app.controller("LoginCtrl", function ($scope, $rootScope, $location) {
        $rootScope.topTitle = "Login";
        $scope.email = {};
        $scope.password = {};
        // checks email and pw
        $scope.loginCheck = function () {
            // searches for username + pw match in database
            for (var i = 1; i < $scope.user.length; i++) {
                if ($scope.user[i].Name.toLowerCase === $scope.email.txt.toLowerCase) {
                    if ($scope.user[i].Passwort === $scope.password.txt) {
                        console.log("login successful");
                        $rootScope.loggedin = true;
                        $scope.loggedInUser = $scope.user[i];
                        $rootScope.loggedInUser = $scope.loggedInUser;
                        console.log($scope.loggedInUser);
                        //call: get contents of owned catalogs
                        $scope.connectCatalogs();
                        //change from login-screen to my-catalogs-screen if login successfull
                        $location.path('/my-catalogues');
                        //interrupt this for-loop if correct credentials are found
                        break;
                    }
                } else {
                    // TODO wrong pw reaction needs to be implemented
                    console.log("false login")
                }
            }
        };

        $scope.connectCatalogs = function () {
            var boughtData = [];
            for (var i = 0; i < $scope.loggedInUser["Gekaufte Kataloge"].length; i++) {
                boughtData.push($scope.museums[$scope.loggedInUser["Gekaufte Kataloge"][i]["Museum-ID"]].Kataloge[$scope.loggedInUser["Gekaufte Kataloge"][i]["Katalog-ID"]]);
                // the following are useful dev logs - activate if needed
                /*console.log("Museum:" + $scope.loggedInUser["Gekaufte Kataloge"][i]["Museum-ID"]);
                console.log("Katalog:" + $scope.loggedInUser["Gekaufte Kataloge"][i]["Katalog-ID"]);
                console.log("hier sollte das museum stehen: " + $scope.museums[$scope.loggedInUser["Gekaufte Kataloge"][i]["Museum-ID"]].Name);
                console.log("hier sollte der Katalog stehen: " + $scope.museums[$scope.loggedInUser["Gekaufte Kataloge"][i]["Museum-ID"]].Kataloge[$scope.loggedInUser["Gekaufte Kataloge"][i]["Katalog-ID"]].Titel);*/
                // push information about bought catalogs into empty boughtData-Array
            }
            $rootScope.boughtCatalogs = boughtData;
        };

    });

}());
