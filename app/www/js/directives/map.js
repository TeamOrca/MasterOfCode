angular.module('supeer.directives')
    .directive('map', function() {
        return {
            restrict: 'A',
            scope: {
                onCreate: '&'
            },
            link:function($scope, element, attrs){

                var zValue = $scope.$eval(attrs.zoom);
                var lat = $scope.$eval(attrs.lat);
                var lng = $scope.$eval(attrs.lng);

                var myLatlng = new google.maps.LatLng(lat,lng);
                var mapOptions = {
                    zoom: zValue,
                    center: myLatlng,
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: true,
                    streetViewControl: false,
                    rotateControl: true
                };
                var map = new google.maps.Map(element[0],mapOptions);
                $scope.onCreate({map: map});
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    draggable:false,
                    icon: 'img/marker.png',
                    animation: google.maps.Animation.DROP,
                });
            }
        };
    });