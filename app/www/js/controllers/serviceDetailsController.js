angular.module('supeer.controllers')
    .controller('ServiceDetailsCtrl', function($scope, $state, $stateParams, ServicesService, $ionicScrollDelegate) {
        $scope.service = ServicesService.get($stateParams.serviceId);

        $scope.isCommentsVisible = false;

        $scope.showComments = function() {
            $scope.isCommentsVisible = !$scope.isCommentsVisible;
            $ionicScrollDelegate.resize();

            if ($scope.isCommentsVisible) {
                $ionicScrollDelegate.scrollBottom(true);
            } else {
                $ionicScrollDelegate.scrollTop(true);
            }
        };

        $scope.hire = function() {
            $state.go("clientPendingRequests");
        }

        $scope.rate = 3;
        $scope.max = 5;
    });