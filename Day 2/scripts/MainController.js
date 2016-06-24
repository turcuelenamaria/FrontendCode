/**
 * Created by Elena on 24.06.2016.
 */
angular.module('hrApp').controller('MainController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.name = "name";
    console.log($scope.name);
}]);