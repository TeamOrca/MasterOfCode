angular.module('supeer.controllers')
    .controller('SearchResultCtrl', function($scope, ServicesService) {
        $scope.services = ServicesService.all();
    });
