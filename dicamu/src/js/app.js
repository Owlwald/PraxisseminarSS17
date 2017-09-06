(function () {
    'use strict';

    var app = angular.module('dcm', [
        'ngRoute',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        'firebase'
    ]);

    app.controller("MainCtrl", function ($scope, $firebaseArray) {

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDx888a0huvJQCpklJsDdf4Sq2mddAxbhk",
            authDomain: "dicamu-1ed50.firebaseapp.com",
            databaseURL: "https://dicamu-1ed50.firebaseio.com",
            projectId: "dicamu-1ed50",
            storageBucket: "dicamu-1ed50.appspot.com",
            messagingSenderId: "181342973516"
        };
        firebase.initializeApp(config);

        //get museum data
        firebase.database().ref('Museum').on('value', function (snapshot) {
            var data = snapshot.val();
            $scope.museums = data;
            console.log(data);
            $scope.$apply();
        });

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