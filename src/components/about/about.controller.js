(function() {

  'use strict';

  angular
    .module('referralApp.components.about', [])
    .controller('aboutController', aboutController);

  aboutController.$inject = [];

  function aboutController() {
    /*jshint validthis: true */
    this.greeting = 'about';
  }

})();
