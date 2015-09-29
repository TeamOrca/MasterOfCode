angular.module('supeer.controllers')
    .controller('merchantDetailsCtrl', function($scope, $state, $stateParams, ServicesService, $ionicScrollDelegate) {
        $scope.service = ServicesService.get(4);

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

        $scope.viewPendingRequests = function() {
            $state.go("merchantViewRequests");
        }

    });