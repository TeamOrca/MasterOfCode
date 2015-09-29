angular.module('supeer.controllers')
    .controller('ClientCtrl', function($scope, $ionicPopup,  $ionicListDelegate, $location, $state) {
        $scope.listCanSwipe = true;
        $scope.shouldShowDelete = true;
        $scope.requests = [
            {name: 'Plumber inc.', phone: '444-444-4444', wantedDate: '2015-10-10 at 9:00', status: 'pending'},
            {name: 'Plumber inc.', phone: '444-444-4444', wantedDate: '2015-10-23 at 9:00', status: 'pending'},
            {name: 'Housekeeper inc.', phone: '123-123-1232', wantedDate: '2015-10-10 at 13:10', status: 'confirmed'},
            {name: 'Galaxy Plumbing', phone: '342-535-1232', wantedDate: '2015-08-12 at 13:10', status: 'ready', value : 25},
            {name: 'Galaxy Plumbing', phone: '342-535-1232', wantedDate: '2015-10-10 at 13:10', status: 'payed', value : 30}
        ];

        $scope.defaultPrice = 20;
        $scope.refuse = function(request){
            var index = $scope.requests.indexOf(request);
            $scope.requests[index].status = 'refused';
            $ionicListDelegate.closeOptionButtons();
        };

        $scope.goToHostedTransactions = function(request){
            window.location = 'http://localhost:8002/hosted_payments/' + request.value + '00';
        };

        $scope.viewRequest = function(request){
            if (request.status === 'ready') {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Pay merchant',
                    template: 'Do you want to complete this transaction?'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        request.status = 'confirmed';
                        $scope.goToHostedTransactions(request);
                    }
                });
            }
        };

        $scope.saveAndRedirect = function(){
            console.log('SAVE AND REDIRECT');
        };
    });
