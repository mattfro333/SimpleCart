angular.module('holly',['ui.router']).config(function($stateProvider, $urlRouterProvider){

            $stateProvider
            .state('cart', {
              url: '/cart',
              templateUrl: '../index.html',
              controller: 'shoppingCtrl'
            })
            $urlRouterProvider.otherwise('/')
      });
