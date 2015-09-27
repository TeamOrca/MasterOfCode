/**
 * Created by z85603 on 15-09-26.
 */
angular.module('supeer.controllers')
    .controller('welcomeCtrl', function($scope, CategoriesService, $state) {
        $scope.services = CategoriesService.all();
        $scope.selectedCat = $scope.services[0].name;

        $scope.goToNext = function(){
            console.log("hello world");
            $state.go('search-results');
        }

    });
