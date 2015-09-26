angular.module('supeer.controllers', [])
    .controller('MainCtrl', function($scope, Services) {
        $scope.services = Services.all();
        $scope.getDistace = function(servicePosition) {
            return 1
        }
    })

    .controller('SearchResultCtrl', function($scope, Services) {
        $scope.services = Services.all();
    })

    .controller('serviceDetailsCtrl', function($scope, $stateParams, Services) {

        console.log($stateParams);

        $scope.service = Services.get($stateParams.serviceId);
    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableSomeSettings: true
        };
    });
