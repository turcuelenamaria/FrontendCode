/**
 * Created by Elena on 24.06.2016.
 */
angular.module('hrApp').controller('DescriptionController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'template/childscope.html';
    $scope.descriptionShow = true;
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    $scope.toggleDescriptionShow = function() {
        $scope.descriptionShow = !$scope.descriptionShow;
    };

}]);