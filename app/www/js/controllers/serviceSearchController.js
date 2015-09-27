angular.module('supeer.controllers')
    .controller('ServiceSearchCtrl', function($scope, ServicesService, $ionicSideMenuDelegate) {
        $scope.services = ServicesService.all();

        $scope.location = getLocation();

        $scope.getDistace = function(servicePosition) {

            var from = new google.maps.LatLng(49.004, 8.456);
            var to   = new google.maps.LatLng(49.321, 8.789);
            var dist = google.maps.geometry.spherical.computeDistanceBetween(from, to);

            return dist;

        }
        $scope.toggleLeft = function() {
          $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.getLocation = function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                return position;
            }, function (error) {
                console.log(error);
                return null;
            });
        }


    });
