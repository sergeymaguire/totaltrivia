  var gameQuestions = [{
      question: 'How many licks to a center of a tootsie pop?',
      choices: ['1', '100', '400', '364'],
      id: 'questionone',
      correctAnswer: 3
  }, {
      question: 'What is the only mammal that can truly fly?',
      choices: ['bat', 'eagle', 'wombat', 'chicken'],
      id: 'questiontwo',
      correctAnswer: 0
  }, {
      question: 'Which continent is also a country?',
      choices: ['australia', 'south america', 'russia', 'united kingdom'],
      id: 'questionthree',
      correctAnswer: 0
  }, {
      question: 'The Bill of Rights contains how many of the first amendments to the United States Constitution?',
      choices: ['five', 'ten', 'twenty-seven', 'nine'],
      id: 'questiofour',
      correctAnswer: 1
  }, {
      question: 'What automobile manufacturer was first to implement the assembly line for the mass production of an entire automobile?',
      choices: ['ford', 'general motors', 'chevy', 'dodge'],
      id: 'questionfive',
      correctAnswer: 0
  }, {
      question: 'Which continent has the highest human population density?',
      choices: ['europe', 'asia', 'south america', 'north america'],
      id: 'questionsix',
      correctAnswer: 1

  }, {
      question: 'Which 1993 American science-fiction adventure film had a plot that involved creating a theme park from cloned dinosaurs?',
      choices: ['jurassic world', 'jurassic parks', 'jurassic parc', 'jurassic park'],
      id: 'questionseven',
      correctAnswer: 3
  }, {
      question: 'In what ocean did the Titanic sink?',
      choices: ['south pacific ocean', 'north pacific ocean', 'south atlantic ocean', 'north atlantic ocean'],
      id: 'questioneight',
      correctAnswer: 3
  }, {
      question: 'What was the first console video game that allowed the game to be saved?',
      choices: ['zelda', 'legend of zelda', 'zelda ocarina of time', 'zelda twilight princess'],
      id: 'questionnine',
      correctAnswer: 1
  }, {
      question: 'What is the heaviest naturally occurring element found on Earth?',
      choices: ['diamonds', 'steel', 'uranium', 'granite'],
      id: 'questionten',
      correctAnswer: 2
  }, {
      question: 'What is the most abundant element in the earth’s atmosphere?',
      possibles: ['nitrogen', 'oxygen', 'argon', 'hydrogen'],
      id: 'questioneleven',
      correctAnswer: 0
  }];

  $("document").ready(function () {


      $("#start").on("click", function () {
          var x = setTimeout(timeUp, 1000 * 2);

          function timeUp() {
              console.log(setTimeout);
              alert("Time is up! Try Again")
              location.reload();
          }

          $("#start").hide();
          for (i = 0; i < gameQuestions.length; i++) {
              $("#quizarea").append("<li id=" + i + "'>" + gameQuestions[i].question + "</li>");
          }

      });
      //   var myVar = setInterval(setColor, 300);

      //   function setColor() {
      //       var x = document.body;
      //       x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
      //   }

      //   function stopColor() {
      //       clearInterval(myVar);
      //   }
  });