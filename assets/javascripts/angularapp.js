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

    $http.get("./assets/javascripts/model.json")
        .then(function (response) {
            var i,
                pages = response.data;
            for (i = 0; i < pages.length; i = i + 1) {
                if (pages[i].title === "Forside") {
                    $scope.page = pages[i];
                }
            }
        });
});