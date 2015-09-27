angular.module('supeer.controllers')
    .controller('ServiceSearchCtrl', function($scope, ServicesService, $ionicSideMenuDelegate) {
        $scope.services = ServicesService.all();
        $scope.getDistace = function(servicePosition) {
            return 1
        }
        $scope.toggleLeft = function() {
          $ionicSideMenuDelegate.toggleLeft();
        };


    });
