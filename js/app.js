angular.module('holly',['ui.router']).config(function($stateProvider, $urlRouterProvider){

            $stateProvider
            .state('home', {
              url: '/',
              templateUrl: '../views/home.html',
              controller: 'mainCtrl'
            })
            .state('cart', {
              url: '/cart',
              templateUrl: '../index.html',
              controller: 'shoppingCtrl'
            })
            .state('checkout', {
              url: '/checkout',
              templateUrl: '../views/checkout.html',
              controller: 'CheckoutCtrl'
            })
            $urlRouterProvider.otherwise('/')
      });
