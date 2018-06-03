


var number = 30;
var questions = ["Which actress has won the most Oscars?", "Name the director of the Lord of the Rings trilogy.", "Who played Neo in The Matrix?"];
var answers = ["Katharine Hepburn", "Peter Jackson", "Keanu Reeves"];




var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 300);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $(".timer").html("<h2>"   + number + "</h2>"); 


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}

//  Execute the run function.
run();