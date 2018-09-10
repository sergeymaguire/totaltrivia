  var gameQuestions = [{
      question: 'How many licks to a center of a tootsie pop?',
      choices: ['1', '100', '400', '364'],
      correctAnswer: 3
  }, {
      question: 'What is the only mammal that can truly fly?',
      choices: ['Bat', 'Eagle', 'Wombat', 'Chicken'],
      correctAnswer: 0
  }, {
      question: 'Which continent is also a country?',
      choices: ['Australia', 'South America', 'Russia', 'United Kingdom'],
      correctAnswer: 0
  }, {
      question: 'The Bill of Rights contains how many of the first amendments to the United States Constitution?',
      choices: ['Five', 'Ten', 'Twenty-Seven', 'Nine'],
      correctAnswer: 1
  }, {
      question: 'Who was first to implement a assembly line for the mass production of cars?',
      choices: ['Ford', 'General Motors', 'Chevy', 'Dodge'],
      correctAnswer: 0
  }, {
      question: 'Which continent has the highest human population density?',
      choices: ['Europe', 'Asia', 'South America', 'North America'],
      correctAnswer: 1

  }, {
      question: '1993 theme park from cloned dinosaurs?',
      choices: ['Jurassic World', 'Jurassic Parks', 'Jurassic Parc', 'Jurassic Park'],
      correctAnswer: 3
  }, {
      question: 'In what ocean did the Titanic sink?',
      choices: ['South Pacific Ocean', 'North Pacific Ocean', 'South Atlantic Ocean', 'North Atlantic Ocean'],
      correctAnswer: 3
  }, {
      question: 'What was the first console game that allowed the game to be saved?',
      choices: ['Zelda', 'Legend of Zelda', 'Zelda Ocarina of Time', 'Zelda Twilight Princess'],
      correctAnswer: 1
  }, {
      question: 'What is the heaviest naturally occurring element found on Earth?',
      choices: ['Diamonds', 'Steel', 'Uranium', 'Granite'],
      correctAnswer: 2
  }, {
      question: 'What is the most abundant element in the earth’s atmosphere?',
      choices: ['Nitrogen', 'Oxygen', 'Argon', 'Hydrogen'],
      correctAnswer: 0
  }];

  $("document").ready(function () {


      $("#start").on("click", function () {
          var number = 1201;
          var intervalId;

          function run() {
              clearInterval(intervalId);
              intervalId = setInterval(countdown, 1000);
          }
          function countdown() {
              number--;
              $("#time").html("<h2>" + "Time Left:" + number + "</h2>");
              if (number === 0) {
                  location.reload();
                  alert("Time Up! You lose!");
              }
          }
          run();


          $("#start").hide();
          var liid = 0;
          var spanid = liid;
          for (i = 0; i < gameQuestions.length; i++) {
              liid = liid + 10;
              spanid = liid + 1;
              var html = "<li id=" + liid + ">" + gameQuestions[i].question 
              + "<span id=" + spanid++ + ">" + gameQuestions[i].choices[0]+ "</span>,  "
              +"<span id=" + spanid++ + ">" + gameQuestions[i].choices[1] + "</span>,  "
              +"<span id=" + spanid++ + ">" + gameQuestions[i].choices[2] + "</span>, "
              +"<span id=" + spanid + ">" + gameQuestions[i].choices[3] + "</span></li> ";
              $("#quizarea").append(html);
            //   $("#quizarea").append("<li id=" + liid + ">" + gameQuestions[i].question );
            //   $("#quizarea").append("<span id=" + spanid++ + ">" + gameQuestions[i].choices[0]+ "</span>, ");
            //    $("#quizarea").append("<span id=" + spanid++ + ">" + gameQuestions[i].choices[1] + "</span>, ");
            //    $("#quizarea").append("<span id=" + spanid++ + ">" + gameQuestions[i].choices[2] + "</span>, ");
            //    $("#quizarea").append("<span id=" + spanid + ">" + gameQuestions[i].choices[3] + "</span></li>");
          }
          $( "span" ).on( "click", function() {
            var liid = (parseInt(this.parentElement.id) /10) - 1; 
            var spanid = (parseInt(this.id) - 10); 
            console.log("liid = " + liid);
          
            console.log( $( this ).text() );
            var i = (parseInt(this.id) - 10);
            console.log("i = " + i);
            
          });

      });



        // var myVar = setInterval(setColor, 300);

        // function setColor() {
        //     var x = document.body;
        //     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
        // }

        // function stopColor() {
        //     clearInterval(myVar);
        // }
  });