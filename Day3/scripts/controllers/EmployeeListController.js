hrApp.controller('EmployeeListController', ['$scope', '$http', '$location', '$routeParams', 'commonResourcesFactoryBackup',
    function ($scope, $http, $location, $routeParams, commonResourcesFactoryBackup) {
// TODO #HR2 - inject commonResourcesFactory

        $scope.employees = []; // Employee list
        $http.get(commonResourcesFactoryBackup.findAllEmployeesUrl)
            .success(function(data, status, headers, config) {
                $scope.employees = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

        //TODO #HR3 Load employee list from server using commonResourcesFactory     ok


        $scope.viewEmployee = function (id) {
            $location.url('/employeeview/' + id);
        };


    }]);