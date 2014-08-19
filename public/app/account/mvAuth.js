angular.module('app').factory('mvAuth', function($http, mvIdentity, $q){
    return {
        authenticateUser: function(username, password){
            var promise = $q.defer();

            $http.post('/login',{username: username,password: password}).then(function(response){
                if(response.data.success){
                    mvIdentity.currentUser = response.data.user;
                    promise.resolve(true);
                } else{
                    promise.resolve(false);
                }
            });
            return promise.promise;
        },

        logoutUser: function(){
            var pp = $q.defer();
            $http.post('/logout',{logout: true}).then(function(){
                mvIdentity.currentUser = undefined;
                pp.resolve();

            });
            return pp.promise;
        }

    }
});

