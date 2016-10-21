// business logic
var whichDev = function(whichOption) {
  if (whichOption === "A") {
    return "#frontEnd";
  } else if (whichOption === "B") {
    return "#backEnd";
  } else {
    return "#backEnd"
  }
}


// front end logic
$(document).ready(function() {
  $("#devOption").submit(function() {
    event.preventDefault();
    var devOptionSelection = $("#whichOption").val();
    var result = whichDev(devOptionSelection);
    $("#frontEnd").hide();
    $("#backEnd").hide();
    $("#both").hide();
    $(result).show();
  });
});
