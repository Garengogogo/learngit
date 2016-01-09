/**
 * Created by Administrator on 2016/1/5.
 */
var myApp = angular.module('myApp', []);
myApp.controller("MyController", function($scope, $timeout){
    var updateClock = function() {
        $scope.name = 'zhengbiao';
        $scope.clock = new  Date();
        $timeout(function() {
            updateClock();
        }, 1000);
    };
    updateClock();
});
myApp.run(function($rootScope) {
    $rootScope.name = 'world';
});
myApp.controller('firstController', function($scope) {
    $scope.counter = 0;
    $scope.add = function(amount) {
        $scope.counter += amount;
    }
    $scope.subtract = function(amount) {
        $scope.counter -= amount;
    }
});
myApp.controller('parentController', function($scope) {
   $scope.person = {
       greeted : false
   };
});
myApp.controller('ChildController', function($scope) {
    $scope.sayHello = function() {
        $scope.person.name = 'zhengbiao nihao';
    };
});
myApp.controller('LoginController', function($scope) {
    $scope.showLoginFrom = true;
    $scope.sendLogin = function() {};
    $scope.sendRegister = function() {};
});