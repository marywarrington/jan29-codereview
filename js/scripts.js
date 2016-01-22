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

var multipleOfFive = function(userInput) {
  if (userInput % 5 === 0) {
    return true
  } else {
    return false
  }
}

var multipleOfFifteen = function(userInput) {
  if (userInput % 15 === 0) {
    return true
  } else {
    return false
  }
}

var numberReplacer = function(userInput) {
    var replacedNumber = userInput.replace(/[3]/gi, "ping");
  return replacedNumber;
}


//   for (var i = 1; i < userInput; i++) {
//     for(userInput.indexOf(function(multipleOfThree))) {
//       userInput = userInput.replace(multipleOfThree[i], 'ping');
//     });
//    return userInput;
// };

// var hasVowel = function(userInput) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   for (var index = 0; index < vowels.length; index++) {
//     while(userInput.indexOf(vowels[index]) >= 0) {
//       userInput = userInput.replace(vowels[index], '-');
//     }
//   } return userInput;
//
// };


//   var replacedNumber = userInput.replace(multipleOfThree, "ping");
//   return replacedNumber;
// }
//
