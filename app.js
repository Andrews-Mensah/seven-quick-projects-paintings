var app = angular.module("PaintingsList",[]);

app.controller("PaintingsController", function ($scope) {
    $scope.paintingCount = 0;

    $scope.paintings = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png"

    ]

    $scope.previous = function () {
        $scope.paintingCount = $scope.paintingCount - 1;
    }

    $scope.next = function () {
        $scope.paintingCount = $scope.paintingCount + 1;
    }
})
