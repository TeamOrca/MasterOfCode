angular.module('supeer.directives')
    .directive('map', function() {
        return {
            restrict: 'A',
            link:function(scope, element, attrs){

                var zValue = scope.$eval(attrs.zoom);
                var lat = scope.$eval(attrs.lat);
                var lng = scope.$eval(attrs.lng);

                var myLatlng = new google.maps.LatLng(lat,lng),
                    mapOptions = {
                        zoom: zValue,
                        center: myLatlng,
                        zoomControl: false,
                        mapTypeControl: false,
                        scaleControl: true,
                        streetViewControl: false,
                        rotateControl: true
                    },
                    map = new google.maps.Map(element[0],mapOptions),
                    marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        draggable:false
                    });

                google.maps.event.addListener(map, 'drag', function(evt){

                    console.log("dragend");

                    scope.$parent.user.latitude = evt.latLng.lat();
                    scope.$parent.user.longitude = evt.latLng.lng();
                    scope.$apply();

                });

            }
        };
    });