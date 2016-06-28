/**
 * Created by Elena on 28.06.2016.
 */

myApp.controller('ColorsController', ['$scope', function ($scope, myColor2) {
    $scope.colors = [
        {
            "text" : "muted",
            "class": "text-muted",
	        "type": "strong"
        },
        {
            "text": "primary",
            "class": "text-primary",
            "type": "strong"
        },
        {
            "text": "success",
            "class": "text-success",
            "type": "strong"
        },
        {
            "text" : "info",
            "class": "text-info",
            "type": "boring"
        },
        {
            "text" : "warning",
            "class": "text-warning",
            "type": "boring"
        },
        {
            "text" : "danger",
            "class": "text-danger",
            "type": "boring"
        }
    ];
    $scope.selectedColor = '';
    $scope.changeColor = function (myColor2) {
        $scope.selectedColor = $scope.myColor2.class;
    };
}]);