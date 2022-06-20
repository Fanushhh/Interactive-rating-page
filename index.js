$(".star-1, .star-2, .star-3, .star-4, .star-5").click(function(){

  $(this).toggleClass("click-color");
});


$(".star-1, .star-2, .star-3, .star-4, .star-5").on("click", function(){
  const inputValue = $(this).attr("value");

});
