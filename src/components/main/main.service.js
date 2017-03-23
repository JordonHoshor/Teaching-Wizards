(function() {

  'use strict';

  angular
    .module('referralApp.components.main')
    .service('mainService', mainService);

  mainService.$inject = [];

  function mainService() {
    /*jshint validthis: true */
    const comments = {};
    const allComments = [{
      image: 'http://placehold.it/100x100',
      comment: 'My name is Kayla Jones and I have just signed my second contract with VIPKID. Before I started to teach online, I was a teacher in Thailand for three years. I realized that I love watching the minds of young ones grow and evolve and I knew I wanted to continue my teaching career without necessarily making it a full time job. VIPKID was just the way to do it! I love waking up in the morning and starting my day with awesome kids who are super eager to learn. Every morning is a fun learning experience and believe it or not, I have actually formed really strong relationships with some of my regular students. The content provided for the lessons are made fun with games, activities, and characters. They are extremely easy to navigate and have great teacher notes that go along with each slide. If you find any joy in education you will seriously love being part of the VIPKID team.'
    },{
      image: 'http://placehold.it/100x100',
      comment: 'My fiancé and I are both teachers for VIPKID, which is actually something that I would recommend any couples living together to consider. Because the classes are early, it’s nice that we can both schedule our classes for the same time and its not just one of us who has to wake up. We have actually gotten into a great morning routine. We wake up together, drink our coffee and get ready for our classes. Once finished, we actually have the opportunity to have breakfast together afterwards which probably otherwise wouldn’t have happened. We will usually each teach four classes every weekday morning, which takes just two short hours. Another bonus, its twice the money! We use VIPKID money to pay our rent every month and still have money left over to put in our savings. If anyone is looking for a little (or a lot) of extra money in his or her wallets every month, teaching for VIPKID is an excellent way to make that happen. It actually makes for a great start to each weekday, because both my fiancé and I have really bonding and formed relationships with our students that we look forward to seeing.'
    },{
      image: 'http://placehold.it/100x100',
      comment: 'Teaching for VIPKID is so rewarding. It is amazing how much I have learned through this experience. I never thought I would become so passionate about it and also how close I would get to my students. I see a lot of different kids, but there are a hand full who will most likely try to book with you every time so there is more consistency with the lessons. This is great for the teacher and the student because with time comes more respect, and also a deeper way to connect with that student and discuss with them more than just what’s written on the slides. I get the opportunity to really get to know them and ask them questions about their lives. It is so amazing to watch students reaching for words in their English vocabulary when trying to answer questions or hold a conversation with you. There are also many students without that vocabulary. Teaching these level one students is just as great. In these cases you have the pure joy of watching light bulbs go off in their heads when finally understand how to read CVC words, or seeing  how proud you are that they recognized a certain letter. There is real progress happening right in front of you everyday and it’s truly humbling.'
    }];

    comments.getComments = () => {
      return allComments;
    };
    return comments;
  }

})();
