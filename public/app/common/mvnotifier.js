angular.module('app').value('mvToastr',toastr);

angular.module('app').factory('mvnotifier', function(mvToastr){
    return {
        notify: function(msg){
            mvToastr.success(msg);
            console.log(msg);
        }
    }
});

