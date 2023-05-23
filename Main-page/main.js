function resizewind() {
  if (1300 <= $(window).width()) {
    $("#card").removeClass('cardmobile')
    $("#card2").removeClass('card2mobile')
    $("#card3").removeClass('card2mobile')
    $('#card').addClass('cardlaptop')
    $('#card2').addClass('card2laptop')
    $("#card3").addClass('card2laptop')
  }else if($(window).width()<= 1300){
    $("#card").addClass('cardmobile')
    $("#card2").addClass('card2mobile')
    $("#card3").addClass('card2mobile')
    $('#card').removeClass('cardlaptop')
    $('#card2').removeClass('card2laptop')
    $('#card3').removeClass('card2laptop')
  }
  if ($(window).width() <= 780) {
    $("#homenav,#tutornav,#menunav,#recipenav,#contactnav,#subnav").html("");
    $("#Title").addClass(".textalign");
    $("#homenav").append('<i class="fa-solid fa-house"></i>');
    $("#tutornav").append('<i class="fa-solid fa-circle-question"></i>');
    $("#menunav").append('<i class="fa-sharp fa-solid fa-list"></i>');
    $("#recipenav").append('<i class="fa-solid fa-registered"></i>');
    $("#contactnav").append('<i class="fa-solid fa-address-book"></i>');
    $("#subnav")
      .append('<i class="fa-solid fa-sack-dollar"></i>')
      .removeClass("navlasta");
    $("#rightpartcontent").hide();
    $("#emoji1").hide()
    $("#emoji2").hide()
    $("#emoji3").hide()
  } else {
    $("#homenav").html("Home");
    $("#tutornav").html("How to Order");
    $("#menunav").html("Our Menu");
    $("#recipenav").html("Our Recipes");
    $("#contactnav").html("Contact Us");
    $("#subnav").html("Subscribe").addClass("navlasta");
    $("#rightpartcontent").show();
    $("#emoji1").show()
    $("#emoji2").show()
    $("#emoji3").show()
  }
  if($(window).width()<= 1300){
    $('#cake1').remove()
    $('#cake3').remove()
  }else{
    $('#cake1').remove()
    $('#cake3').remove()
    $('#cake2').after('<img src="/image/Gallerypic/cake3.jpg" alt="" id="cake3" />')
    $('#cake2').before('<img src="/image/Gallerypic/cake1.png" alt="" id="cake1" />')
  }
}
resizewind();
$(window).resize(function () {
  resizewind();
});
