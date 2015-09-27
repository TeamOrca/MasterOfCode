angular.module('supeer.controllers')
    .controller('SearchResultCtrl', function($scope, ServicesService, $ionicLoading) {
        $scope.services = ServicesService.all();

        $scope.mapCreated = function(map) {
            $scope.map = map;
            $scope.centerOnMe();
            $scope.loadMarkers();
        };

        $scope.centerOnMe = function () {
            if (!$scope.map) {
                console.log("!$scope.map");
                return;
            }

            $scope.loading = $ionicLoading.show({
                template: '<ion-spinner icon="android"></ion-spinner>',
                showBackdrop: false
            });

            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                $ionicLoading.hide();
            }, function (error) {
                console.log('Unable to get location: ' + error.message);
            });
        };

        $scope.loadMarkers = function () {
            function addMarker(element) {
                var latLng = {
                    lat: element.position.latitude,
                    lng: element.position.longitude
                };

                var marker = new google.maps.Marker({
                    position: latLng,
                    map: $scope.map,
                    icon: 'img/marker.png'
                });

                var contentString = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">'+element.name+'</h1>'+
                    '<div id="bodyContent">'+
                    '<p><img height="40px" src="'+element.thumb+'"> <b>'+element.category+'</b> | '+element.rate+' $ / h</p>' +
                    '<p>' +
                    element.description +
                    '</p>'+
                    '</div>'+
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                marker.addListener('click', function() {
                    if (infowindow) {
                        infowindow.close();
                    }
                    infowindow.open($scope.map, marker);
                });

            }

            $scope.services.forEach(addMarker);
        }

    });
