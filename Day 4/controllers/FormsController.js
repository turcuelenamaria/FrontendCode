/**
 * Created by Elena on 28.06.2016.
 */
myApp.controller('FormsController', ['$scope', function($scope) {
    $scope.validSubmitted = function() {
        if ($scope.myForm.$valid)
            alert("is valid");
    }
}]);