// Begin Business Logic

var countUp = function(userInput) {
  var answer = "";
  for (var i = 1; i <= userInput; i++) {
    answer = answer + i + ",";
  }
  answer = answer.slice(0, answer.length-1);
  return answer;
}

var countUpThree = function(userInput) {
  var answer = "";
  for (var i = 0; i <= userInput; i += 3) {
    answer = answer + i + ",";
  }
  answer = answer.slice(2, answer.length-1);
  return answer;
}

var countUpFive = function(userInput) {
  var answer = "";
  for (var i = 0; i <= userInput; i += 5) {
    answer = answer + i + ",";
  }
  answer = answer.slice(2, answer.length-1);
  return answer;
}

var countUpFifteen = function(userInput) {
  var answer = ""
  for (var i = 0; i <= userInput; i += 15) {
    answer = answer + i + ",";
  }
  answer = answer.slice(2, answer.length-1);
  return answer;
}

var multipleOfThree = function(userInput) {
  if (userInput % 3 === 0) {
    return "ping";
  } else {
    return userInput;
  }
}

var multipleOfFive = function(userInput) {
  if (userInput % 5 === 0) {
    return "pong";
  } else {
    return userInput;
  }
}

var multipleOfFifteen = function(userInput) {
  if (userInput % 15 === 0) {
    return "pingpong";
  } else {
    return userInput;
  }
}

var numberReplacer = function(userInput) {
  if (userInput % 15 === 0) {
    return "pingpong";
  } else if (userInput % 5 === 0) {
    return "pong";
  } else if (userInput %3 === 0) {
    return "ping";
  } else {
    return userInput
  }
}
// End Business Logic

// Begin User Interface Logic

$(document).ready(function() {
  $("#pingPong").submit(function(event) {
    event.preventDefault();

    $("#pingPongResults").show();
    // $("#pingPongList").empty();
    for (var i=1;i<=parseInt($("#userInput").val());i++) {
      $("#pingPongList").append("<li>" + numberReplacer(i) + "</li>");
    }
  })
});
