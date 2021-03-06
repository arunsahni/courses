angular.module('app').factory('mvAuth', function($http, mvIdentity, $q ,mvUser){
    return {
        authenticateUser: function(username, password){
            var promise = $q.defer();

            $http.post('/login',{username: username,password: password}).then(function(response){
                if(response.data.success){

                    var user = new mvUser();
                    angular.extend(user, response.data.user);

                    mvIdentity.currentUser = user;
                    promise.resolve(true);
                } else{
                    promise.resolve(false);
                }
            });
            return promise.promise;
        },

        createUser: function(newUserData){
            var newUser = new mvUser(newUserData);
            var dfd = $q.defer();
            newUser.$save().then(function(){
                mvIdentity.currentUser = newUser;
                dfd.resolve();
            }, function(response){
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        logoutUser: function(){
            var pp = $q.defer();
            $http.post('/logout',{logout: true}).then(function(){
                mvIdentity.currentUser = undefined;
                pp.resolve();

            });
            return pp.promise;
        },

        authorizeCurrentUserForRoute: function(role){
            if(mvIdentity.isAuthorized(role)){
                return true;
            } else {
                return $q.reject('not authorized');
            }
        }

    }
});

