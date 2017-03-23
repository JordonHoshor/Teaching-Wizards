(function() {

  'use strict';

  angular
    .module('referralApp.components.about', [])
    .controller('aboutController', aboutController);

  aboutController.$inject = [];

  function aboutController() {
    /*jshint validthis: true */
    this.content = 'The application process to become a VIPKID teacher is super simple. First click on this link [_____________] this will bring you to the VIPKID homepage. There, you can submit an application to start the process.';

    this.degree = 'A bachelor’s degree from an accredited university is required to teach VIPKID. However, this degree DOES NOT have to be in education. VIPKID does like you to have some sort of teaching experience before starting. Any kind of teaching is great, if you are not sure if your experience is suitable to apply, do it anyway!';

    this.app = 'After they have reviewed your application and learned a little about you, the VIPKID team will ask you to do an interview and demo lesson with an employee to show your teaching style, and just overall to make sure you will be suitable for their teacher expectations.'
  }

})();
