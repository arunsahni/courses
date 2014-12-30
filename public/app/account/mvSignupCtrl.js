angular.module('app').controller('mvSignupCtrl',function($scope, mvUser, mvnotifier, mvAuth, $location){

    $scope.signup = function () {

        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser(newUserData).then(function(){
            mvnotifier.notify('User account Created');
            $location.path('/');
        },function(reason){
            mvnotifier.error(reason);
        })
    }
})
