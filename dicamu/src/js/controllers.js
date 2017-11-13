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

        $scope.setCatalog = function (catalog) {
            $rootScope.einKatalog = catalog;
            $scope.checkIfBought(catalog);
        }

        $scope.checkIfBought = function (catalog) {
            console.log("Entering the void 1");
            var currentUser = $rootScope.loggedInUser;

            var boughtCats = currentUser["Gekaufte Kataloge"]
            console.log(currentUser["Gekaufte Kataloge"].length);

            for (var i = 0; i < currentUser["Gekaufte Kataloge"].length; i++) {
                console.log("Entering the void 2");

                if (boughtCats[i]["Katalog-ID"] == catalog.ID &&
                    boughtCats[i]["Museum-ID"] == $rootScope.einMuseum.ID) {
                    $rootScope.catalogOwned = true;
                    console.log("wir haben ein matsch.")
                } else {
                    console.log('user does not own this catalog');
                }
                $rootScope.index = i + 1;
            }
        }

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

        $scope.setBoughtCatalog = function (catalog) {
            $rootScope.einKatalog = catalog;
        };

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


    /********************* Login-Controller ********************/

    app.controller("LoginCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = "Login";
        $scope.email = {};
        $scope.password = {};
        // checks email and pw
        $scope.loginCheck = function () {
            // dev log stuff
            console.log($scope.user);
            console.log("you used this email:" + $scope.email.txt);
            console.log("you used this password:" + $scope.password.txt);

            // compares email and pw to all user data in database
            for (var i = 1; i < $scope.user.length; i++) {
                if ($scope.user[i].Name === $scope.email.txt) {
                    if ($scope.user[i].Passwort === $scope.password.txt) {
                        console.log("login successful");
                        $rootScope.loggedin = true;
                        $scope.loggedInUser = $scope.user[i];
                        $rootScope.loggedInUser = $scope.loggedInUser;
                        console.log($scope.loggedInUser);
                        $scope.connectCatalogs();
                        break;
                    }
                } else {
                    // wrong pw reaction needs to be implemented
                    console.log("false login")
                }
            }
        };

    });

    /********************* Option-Controller ********************/

    app.controller("OptionsCtrl", function ($scope, $rootScope) {
        $rootScope.topTitle = "Optionen"
    });

}());