(function() {

  'use strict';

  angular
    .module('referralApp.components.faq')
    .service('faqService', faqService);

  faqService.$inject = [];

  function faqService() {
    /*jshint validthis: true */
    const questions = {};
    const allQuestions = [{
      question: 'Am I eligible to teach for VIPKID?',
      answer: 'You are eligible to teach for VIPKID if you: Have a college degree from an accredited 4 year institution, Have an American accent, Enjoy working with children.'
    },{
      question: 'Can I teach for VIPKID without a college degree?',
      answer: 'Unfortunately, VIPKID requires a minimum of a bachelor’s degree in order to work for them.'
    },{
      question: 'How many classes do I need to teach per week?',
      answer: 'While there used to be a minimum of 15 classes (7.5 hours/week), there is now NO MINIMUM REQUIREMENT.'
    },{
      question: 'Do I need to have teaching experience to teach for VIPKID?',
      answer: 'VIPKID prefers their employees to have some experience in education. This does not mean that you have to be a professional teacher. Experience with coaching, mentoring, summer camp counselling, or even raising children can be enough.'
    },{
      question: 'How does VIPKID compare with other online English teaching services?',
      answer: 'VIPKID is a fast-growing, high profile Chinese company that offers the American Common Core education experience for Chinese children. They use the flipped classroom approach. VIPKID is extremely reputable, always pays on time, and pays more than the other online English teaching services.'
    },{
      question: 'What are the hardware requirements for teaching VIPKID?',
      answer: 'You are required to have a computer (laptop or desktop) with a webcam and microphone. You will need to run the Chrome Browser, and should have stable, high-speed internet.'
    },{
      question: 'When do I get paid?',
      answer: 'VIPKID pays their teachers through direct deposit between the 10th and 15th of every month. You are paid for the previous month. For example, Teacher Chase will be paid for the classes that he taught in January on February 10th-15th.'
    },{
      question: 'Do I need to speak Chinese to work for VIPKID?',
      answer: 'Absolutely not! In fact, teachers who do speak Chinese are advised to only speak to the students in English.'
    },{
      question: 'What is the pay?',
      answer: 'As an independent contractor, your payment or “service fee” is calculated on a per-class basis (scheduled in 30-minute slots) and is composed of a minimum pay between $7-9 + incentives. Your minimum pay will be determined by your demo class performance, while incentives by your monthly class participation and completion as a VIPKID teacher.'
    }];

    questions.getQuestions = () => {
      return allQuestions;
    };
    return questions;
  }

})();
