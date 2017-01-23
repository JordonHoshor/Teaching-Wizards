(function() {

  'use strict';

  angular
    .module('referralApp.components.faq', [])
    .controller('faqController', faqController);

  faqController.$inject = ['faqService'];

  function faqController(faqService) {
    /*jshint validthis: true */
    this.faq = faqService.getQuestions();
  }

})();
