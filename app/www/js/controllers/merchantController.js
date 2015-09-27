angular.module('supeer.controllers')
    .controller('MerchantCtrl', function($scope, $ionicPopup,  $ionicListDelegate, $location) {
      $scope.listCanSwipe = true;
      $scope.shouldShowDelete = true;
      $scope.requests = [
        {name: 'Bob Johnes', phone: '444-444-4444', wantedDate: '2015-10-10 at 9:00', status: 'pending'},
        {name: 'Henrietta Elliot', phone: '123-123-1232', wantedDate: '2015-10-10 at 13:10', status: 'pending'},
        {name: 'Henrietta Elliot', phone: '123-123-1232', wantedDate: '2015-10-10 at 16:05', status: 'pending'}
      ];

      $scope.defaultPrice = 20;
      $scope.refuse = function(request){
        var index = $scope.requests.indexOf(request);
        $scope.requests[index].status = 'refused';
        $ionicListDelegate.closeOptionButtons();
      };

      $scope.goToHostedTransactions = function(){
       window.location = 'http://localhost:8002/hosted_payments/' + document.getElementById('theprice').value + '00';
      };

      $scope.viewRequest = function(request){
        if (request.status === 'pending') {
          var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm meeting?',
            template: 'Do you want to confirm this meeting?'
          });
          confirmPopup.then(function(res) {
            if(res) {
              request.status = 'confirmed';
            }
          });
        } else if(request.status === 'confirmed'){
          $location.path('/merchant/confirm_amount');
        }

      };

       $scope.saveAndRedirect = function(){
        console.log('SAVE AND REDIRECT');
       };
    });
