$(document).ready(function() {
  const over18 = confirm("Are you over the age of 18? Click ok for yes or cancel for no.");

  if (over18) {
    $("#voting").show();
  } else {
    $("no-vote").show();
  }

});