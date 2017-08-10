
$(document).ready(function(){
  var age = parseInt(prompt("How old are you"));

  if (age>=18) {
    $('#adults').show();
  } else {
    alert("You're too young to vote, but check out these links so you're prepared for it!")
    $('#minors').show();
  }
});
