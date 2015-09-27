angular.module('supeer.controllers')
    .controller('LoginCtrl', function($scope, $location) {
        console.log("login");

        $scope.loginMerchant = function(){
          $location.path('/merchant/requests');
        };

        $scope.signupMerchant = function(){
          $location.path('/merchant/new');
        };
    });
