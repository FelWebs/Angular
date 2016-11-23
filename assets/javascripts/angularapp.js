/*globals angular*/

var app = angular.module('myApp', ['ui.router', 'ngSanitize']);

app.config(function ($stateProvider, $urlRouterProvider) {
    "use strict";

    $urlRouterProvider.otherwise('/forside');

    $stateProvider
        .state('forside', {
            url: '/forside',
            templateUrl: './assets/views/partial-forside.html',
            controller: 'forside'
        })

        .state('kontakt', {
            url: '/kontakt',
            templateUrl: './assets/views/partial-kontakt.html'
        });
});

app.controller("forside", function ($scope, $http) {
    "use strict";

    $http.get({
        method: 'POST',
        url: './assets/php/model.php',
        data: { title: 'Forside' }
    })
        .then(function (response) {
           $scope.page = response.data;
        });
});