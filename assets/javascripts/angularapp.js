/*globals angular*/

var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) {
    "use strict";
    $http.get("./assets/javascripts/model.json")
        .then(function(response) {
            $scope.names = response.data;
        });
});