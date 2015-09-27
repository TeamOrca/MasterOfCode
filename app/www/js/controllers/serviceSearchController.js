angular.module('supeer.controllers')
    .controller('ServiceSearchCtrl', function($scope, ServicesService) {
        $scope.services = ServicesService.all();
        $scope.getDistace = function(servicePosition) {
            return 1
        }
    });