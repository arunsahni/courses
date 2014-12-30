

angular.module('app').controller('testCtrl',function($scope){

    $scope.saveform = function () {

        var newUserData = {
            name: $scope.name,
            address: $scope.address
        };



    }
});

