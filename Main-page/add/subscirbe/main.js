function resizewind() {
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
        $('#nextpic').hide()
       
      } else {
        $('#nextpic').show()
        $("#homenav").html("Home");
        $("#tutornav").html("How to Order");
        $("#menunav").html("Our Menu");
        $("#recipenav").html("Our Recipes");
        $("#contactnav").html("Contact Us");
        $("#subnav").html("Subscribe").addClass("navlasta");
        $("#rightpartcontent").show();
        
      }
    }
      resizewind();
    $(window).resize(function () {
      resizewind();
    });
    