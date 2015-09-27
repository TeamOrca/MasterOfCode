angular.module('supeer.controllers')
    .controller('MerchantCtrl', function($scope) {
      $scope.requests = [
        {name: 'Bob Johnes', phone: '444-444-4444', wantedDate: '2015-10-10 at 9:00'},
        {name: 'Henrietta Elliot', phone: '123-123-1232', wantedDate: '2015-10-10 at 13:10'}
      ];

      $scope.viewRequest = function(request){
        console.log('');
      };

       $scope.saveAndRedirect = function(){
        console.log('SAVE AND REDIRECT');
       };
    });
