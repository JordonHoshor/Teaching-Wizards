(function() {

  'use strict';

  angular
    .module('referralApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['mainService'];

  function mainController(mainService) {
    /*jshint validthis: true */
    this.comments = mainService.getComments();
  }

})();
