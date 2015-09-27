angular.module('supeer.controllers')
    .controller('ServiceDetailsCtrl', function($scope, $stateParams, ServicesService) {
        $scope.service = ServicesService.get($stateParams.serviceId);
    });