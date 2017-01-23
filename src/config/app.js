(function() {

  'use strict';

  angular
    .module('referralApp', [
      'ui.router',
      'referralApp.config',
      'referralApp.components.main',
      'referralApp.components.faq',
      'referralApp.components.about'
    ]);

})();
