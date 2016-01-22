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
  var answer = "";
  for (var i = 1; i <= userInput; i++) {
    if (multipleOfThree) {
      answer = "ping" + ", "
    } else {
    answer = answer + i + ", ";
  }
  }
  answer = answer.slice(0, answer.length-1);
  return answer;
}



// var numberThree = "ping";
// var answer = "";
// for (var i = 1; i <= userInput; i++) {
//   for (var i = 1; i <= userInput; i += 3) {
//     answer = "ping" + ",";
//   }
//   answer = answer + i + ",";
// }
// answer = answer.slice(0, answer.length-1);
// return answer;
// }

//   var userInput = parseInt(userInput);
//   for (var i = 1; i < countUp(userInput).length; i++) {
//     if (i % 3 === 0) {
//
//       countUp(i).replace([i], 'ping');
//     }
//   }
//   return userInput;
// }
//

// var replacedNumber = userInput.replace(/[3]/gi, "ping");


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
