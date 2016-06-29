hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup', 'EmployeeService',
    function($scope, $http, $location, $commonResourcesFactoryBackup, EmployeeService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.patternPhoneNumberNotRespectedMessage = "The phone number should have 10 digits";

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: $commonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
        $scope.phoneNumberPattern = /^\d{10}$/;

        EmployeeService.findAllDepartmentsUrl()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at departments/:" + err);
            });
        EmployeeService.findAllEmployeesUrl()
            .then(function (res) {
                $scope.managers = res.data;
            }, function (err) {
                console.log("Error at employees/: " + err);
            });
        EmployeeService.findAllJobsUrl()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs/: " + err);
            });
}]);