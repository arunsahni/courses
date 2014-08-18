angular.module('app').controller('myMainCtrl',function($scope){
    $scope.courses = [
        {name: 'NodeJs', featured: true, published: new Date('07/13/2013')},
        {name: 'ExpressJs', featured: true, published: new Date('07/14/2013')},
        {name: 'AngularJs', featured: true, published: new Date('07/16/2013')},
        {name: 'MongoDb', featured: true, published: new Date('07/17/2013')},
        {name: 'Jquery', featured: false, published: new Date('08/18/2013')},
        {name: 'Sql', featured: false, published: new Date('09/15/2013')},
        {name: 'css', featured: true, published: new Date('07/13/2013')}
    ]
});