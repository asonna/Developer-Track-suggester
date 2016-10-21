// business logic
var whichDev = function(whichOption) {
  if (whichOption === "A") {
    return "#frontEnd";

  } else if (whichOption === "B") {
    return "#backEnd";

  } else {
    return "#frontEnd", "#backEnd";
  }
}

// var whichLanguage = function(userInput1, userInput2, userInput3) {
//   var cSh = 0;
//   var jav = 0;
//   var php = 0;
//   var rub = 0;
//
//   if (userInput1="cSharp") {
//     cSch += 1;
//   } else if (userInput1="java") {
//     jav = +=1;
//   } else if (userInput1="php") {
//     php = +=1;
//   } else {
//     rub = +1;
//   }
//
//   if (userInput2="cSharp") {
//     cSch += 1;
//   } else if (userInput2="java") {
//     jav = +=1;
//   } else if (userInput2="php") {
//     php = +=1;
//   } else {
//     rub = +1;
//   }
//
//   if (userInput3="cSharp") {
//     cSch += 1;
//   } else if (userInput3="java") {
//     jav = +=1;
//   } else if (userInput3="php") {
//     php = +=1;
//   } else {
//     rub = +1;
//   }
//
//   if (cSch >= 2) {
//     return "cSharp";
//   } else if (jav >= 2) {
//     return "java";
//   } else if (php >= 2) {
//     return "php";
//   } else if (rub >= 2) {
//     return "ruby"
//   } else {
//     return "NONE"
//   }
// }


// front end logic
$(document).ready(function() {
  $("#devOption").submit(function() {
    event.preventDefault();
    var devOptionSelection = $("#whichOption").val();
    var result = whichDev(devOptionSelection);
    $("#frontEnd").hide();
    $("#backEnd").hide();
    $("#both").hide();
    $("#devOption").hide();
    $(result).show();
  });

  // $("#backEnd").submit(function() {
  //   event.preventDefault();
  //   var userInput1 = $("#question2").val();
  //   var userInput1 = $("#question3").val();
  //   var userInput1 = $("#question4").val();
  //
  //   var result = whichLanguage(userInput1, userInput2, userInput3);
  //
  //   $(".language").text(result);
  // });
});
