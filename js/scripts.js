var countUp = function(userInput) {
  var answer = ""
  for (var i = 1; i <= userInput; i++) {
    answer = answer + i + ","
  }
  answer = answer.slice(0, answer.length-1);
  return answer;
}

var multipleOfThree = function(userInput) {
  if (userInput % 3 === 0) {
    return true
  } else {
    return false
  }
}
