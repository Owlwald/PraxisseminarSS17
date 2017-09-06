(function () {
    'use strict';


    console.log("here i am")
        /*global angular */
    var app = angular.module('dcm', [
        //app
        //'dcm.main',
        //'dcm.fire',
        //'dcm.art',
        //external components
        'ngRoute',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        //'angularfire',
        //'firebase'
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

    app.controller('SimpleController', ["$scope", function ($scope) {
        $scope.customer = [
            {
                name: "Deepak",
                city: "Bhubaneswar"
            },
            {
                name: "Sivaji",
                city: "Banglore"
            }
    ];
        $scope.addCustomer = function ($scope) {
            $scope.customer.push({
                name: $scope.newCustomer.name,
                city: $scope.newCustomer.city
            });
        }
}]);

}());