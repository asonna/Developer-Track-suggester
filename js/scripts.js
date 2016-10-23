// business logic
var whichDev = function(whichOption) {
  if (whichOption === "A") {
    return "#frontEnd";

  } else if (whichOption === "B") {
    return "#backEnd";

  } else {
    return "#frontEnd, #backEnd";
  }
}

var whichLanguage = function(userInput1, userInput2, userInput3) {
  var cSh = 0;
  var jav = 0;
  var php = 0;
  var rub = 0;

  if (userInput1 === "cSharp") {
    cSh+=1;
  } else if (userInput1 ===  "java") {
    jav+=1;
  } else if (userInput1 ===  "php") {
    php+=1;
  } else {
    rub+=1;
  }

  if (userInput2 === "cSharp") {
    cSh +=1;
  } else if (userInput2 ===  "java") {
    jav +=1;
  } else if (userInput2 ===  "php") {
    php +=1;
  } else {
    rub +=1;
  }

  if (userInput3 ===  "cSharp") {
    cSh +=1;
  } else if (userInput3 ===  "java") {
    jav +=1;
  } else if (userInput3 ===  "php") {
    php +=1;
  } else {
    rub +=1;
  }

  if (cSh >= 2) {
    return "the C#/.NET track";
  } else if (jav >= 2) {
    return  "the Java/ Android track";
  } else if (php >= 2) {
    return  "the Php/ Drupal track";
  } else if (rub >= 2) {
    return "the Ruby/ Rail track";
  } else {
    return "Any track; with Java and C# been more complex than Php and Ruby.";
  }


}



// front end logic
$(document).ready(function() {
  $("#devOption").submit(function() {
    event.preventDefault();
    var devOptionSelection = $("#whichOption").val();
    var result = whichDev(devOptionSelection);

    // if (de)
    $("#frontEnd").hide();
    $("#backEnd").hide();
    $("#decision").hide();
    $("#devOption").hide();
    $(result).show().fadein();
  });

  $("#backEnd").submit(function() {
    debugger;
    event.preventDefault();
    var userInput1 = $("#question2").val();
    var userInput2 = $("#question3").val();
    var userInput3 = $("#question4").val();

    var results = whichLanguage(userInput1, userInput2, userInput3);

    $("#frontEnd").hide();
    $("#backEnd").hide();
    $("#decision").show();
    $(".language").text(results);

  });
});
