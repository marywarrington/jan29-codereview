// Begin Business Logic

var pingPong = function(number) {
  var results = [];
  for (var i=1;i<=number;i++) {
    if (i % 15 === 0) {
      results.push("pingpong");
    } else if (i % 5 === 0) {
      results.push("pong");
    } else if (i % 3 === 0) {
      results.push("ping");
    } else {
    results.push(i);
    }
  }
  return results;
}
// End Business Logic

// Begin User Interface Logic

$(document).ready(function() {
  $("#pingPong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#userInput").val());
    var results = pingPong(number);

    $("#pingPongResults").show();
    $("#pingPongList").empty();

    for (var i=0;i<results.length;i++) {
      $("#pingPongList").append("<li>" + results[i] + "</li>");
    }
  });
});

// End User Interface Logic
