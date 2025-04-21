var app = angular.module("App", []);
app.controller("MainController", function ($scope) {
    $scope.listNumber = [];
    $scope.Number = "14";

    // Récupérer la liste des global
    /*$http({
        url: "GameController",
        method: "GET",
    }).then(function (response) {
        $scope.listNumber = response.data;
        console.log($scope.globalList);
    }, function (response) {
        console.log(response);
    });*/
});