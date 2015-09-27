// Ionic supeer App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'supeer' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'supeer.services' is found in services.js
// 'supeer.controllers' is found in controllers.js
angular.module('supeer', ['ionic', 'supeer.controllers', 'supeer.services', 'ionic.rating', 'supeer.directives'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            .state('welcome', {
              url: '/welcome',
              templateUrl: 'templates/welcome.html',
              controller: 'welcomeCtrl'
            })

            // Each tab has its own nav history stack:

            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/service-search.html',
                        controller: 'ServiceSearchCtrl'
                    }
                }
            })
            .state('tab.search-results', {
                url: '/search-results',
                views: {
                    'tab-services': {
                        templateUrl: 'templates/search-results.html',
                        controller: 'SearchResultCtrl'
                    }
                }
            })
            .state('tab.categories', {
                url: '/categories/:categoryId',
                views: {
                    'tab-services': {
                        templateUrl: 'templates/service-categories.html',
                        controller: 'SearchResultCtrl'
                    }
                }
            })

            .state('tab.service-details', {
                url: '/service-details/:serviceId',
                views: {
                    'tab-services': {
                        templateUrl: 'templates/service-details.html',
                        controller: 'ServiceDetailsCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('merchantSubscribe', {
                url: '/merchant/new',
                templateUrl: 'templates/merchant-subscribe.html',
                controller: 'MerchantCtrl'

            })
            .state('merchantViewRequests', {
                url: '/merchant/requests',
                templateUrl: 'templates/merchant-request-list.html',
                controller: 'MerchantCtrl'

            })
            .state('merchantConfirmAmount', {
                url: '/merchant/confirm_amount',
                templateUrl: 'templates/merchant-confirm-amount.html',
                controller: 'MerchantCtrl'

            })


            .state('merchantHostedPayment', {
                url: '/merchant/hosted_payment',
                templateUrl: 'templates/merchant-hosted-payment.html',
                controller: 'hostPaymentCtrl'

            })

            //
            ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/welcome');

    });
