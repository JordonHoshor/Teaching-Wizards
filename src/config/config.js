(function() {

  'use strict';

  angular
    .module('referralApp.config', ['ui.router'])
    .config(routes);

  function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        templateUrl: 'components/main/main.view.html'
      })
      .state('about', {
        url: '/about',
        controller: 'aboutController',
        controllerAs: 'aboutCtrl',
        templateUrl: 'components/about/about.view.html'
      })
      .state('FAQ', {
        url: '/F.A.Q.',
        controller: 'faqController',
        controllerAs: 'faqCtrl',
        templateUrl: 'components/faq/faq.view.html'
      });

    $urlRouterProvider
      .otherwise('/');

    $locationProvider
      .html5Mode(true);
  }

})();
