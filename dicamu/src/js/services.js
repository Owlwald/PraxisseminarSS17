/*(function () {
    'use strict';

    angular
        .module('dcm.fire', [])
        .factory('fireService', fireService);

    fireService.$inject = ['$firebase'];

    function fireService($firebase) {
        var ref = new Firebase("https://dicamu-1ed50.firebaseio.com"),
            refUsers = new Firebase("https://dicamu-1ed50.firebaseio.com/User"),
            refMuseums = new Firebase("https://dicamu-1ed50.firebaseio.com/Museum");
        return {
            ref: function () {
                return ref;
            },
            refUsers: function () {
                return refUsers;
            },
            refMuseums: function () {
                return refMuseums;
            }
        }
    }
})();*/