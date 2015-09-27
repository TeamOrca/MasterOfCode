angular.module('supeer.controllers')
    .controller('ServiceDetailsCtrl', function($scope, $stateParams, ServicesService) {
        $scope.service = ServicesService.get($stateParams.serviceId);

        $scope.isCommentsVisible = false;

        $scope.showComments = function() {
            $scope.isCommentsVisible = !$scope.isCommentsVisible;
        };

        $scope.rate = 3;
        $scope.max = 5;
    });