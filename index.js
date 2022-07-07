
$(".star-1, .star-2, .star-3, .star-4, .star-5").click(function() {
  //gets the inner html of the button clicked
  const buttonClicked = this.innerHTML;
  //adds the class click-color to the clicked button
  $(this).addClass("click-color");
  //checks if any of the buttons from .stars has a class called click-color
  var hasClass = $(".stars button").hasClass("click-color");
  // logs true or false depending on the above
  console.log(hasClass);
  // if true, removes all previus elements that had class click color, adds the class to the selected element and sets the result value to the innerHTML of the selection
  if(hasClass){
    $(".stars button").removeClass("click-color");
    $(this).addClass("click-color");
    $("#result").html(buttonClicked);
    $(".submit-button").click(function(){
      $(".container").fadeOut();
      $(".thankYou").fadeIn();
    });

  };
});
