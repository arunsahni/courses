
angular.module('app').controller('mvNavbarLoginCtrl',function($scope, $http, mvIdentity, mvnotifier,mvAuth){
    $scope.identity = mvIdentity;
    $scope.signin = function(username,password){
    mvAuth.authenticateUser(username,password).then(function(success){
        if(success){
            mvnotifier.notify('Login successfully');
        } else{
            mvnotifier.notify('Incorrect username');
        }
    })
    };
});
