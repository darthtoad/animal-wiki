$(document).ready(function() {
  $("form#animal").submit(function(event){
    event.preventDefault();
    var checkedAnimal = $("input:radio[name=animal]:checked").val();
    if (checkedAnimal === "rhinoceros") {
      $(".rhinoceros-info").show();
      $(".octopus-info").hide();
      $(".hippopotamus-info").hide();
      $(".platypus-info").hide();
    } else if (checkedAnimal === "octopus") {
      $(".rhinoceros-info").hide();
      $(".octopus-info").show();
      $(".hippopotamus-info").hide();
      $(".platypus-info").hide();
    } else if (checkedAnimal === "hippopotamus") {
      $(".rhinoceros-info").hide();
      $(".octopus-info").hide();
      $(".hippopotamus-info").show();
      $(".platypus-info").hide();
    } else {
      $(".rhinoceros-info").hide();
      $(".octopus-info").hide();
      $(".hippopotamus-info").hide();
      $(".platypus-info").show();
    }
  })
})
