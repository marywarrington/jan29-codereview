var countUp = function(userInput) {
  var answer = ""
  for (var i = 1; i <= userInput; i++) {
    answer = answer + i + ","
  }
  answer = answer.slice(0, answer.length-1);
  return answer;
}
