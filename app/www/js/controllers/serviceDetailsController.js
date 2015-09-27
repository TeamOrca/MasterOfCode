angular.module('supeer.controllers')
    .controller('ServiceDetailsCtrl', function($scope, $stateParams, ServicesService, $ionicScrollDelegate) {
        $scope.service = ServicesService.get($stateParams.serviceId);

        $scope.isCommentsVisible = false;

        $scope.showComments = function() {
            $scope.isCommentsVisible = !$scope.isCommentsVisible;

            if ($scope.isCommentsVisible) {
                $ionicScrollDelegate.resize()
            }
        };

        $scope.rate = 3;
        $scope.max = 5;
    });