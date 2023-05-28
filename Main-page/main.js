var pic_change = 1
var pic_change2= 0
function resizewind() {
  if(1073 <=$(window).width()){
    $("#emoji1").show()
    $("#emoji2").show()
    $("#emoji3").show()
    
  }else{
    $("#emoji1").hide()
    $("#emoji2").hide()
    $("#emoji3").hide()

  }
  if(652 <= $(window).width()){
    $('#imgdiv').remove()
    $('#rightside4').prepend('<div id="imgdiv"> <img src="/image/backgroundpic/lastpartpics/rightcorner/firstimage.png" alt=""><img src="/image/backgroundpic/lastpartpics/rightcorner/secondimg.png" alt=""><img src="/image/backgroundpic/lastpartpics/rightcorner/thirdimg.png" alt=""><img src="/image/backgroundpic/lastpartpics/rightcorner/fourthimg.png" alt=""></div>')
  }else{
    $('#imgdiv').remove()
  }
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
  if($(window).width()<= 1300){
    $('#cake1').remove()
    $('#cake3').remove()
  }else{
    $('#cake1').remove()
    $('#cake3').remove()
    $('#cake2').after('<img src="/image/Gallerypic/cake3.jpg" alt=""  id="cake3"/>')
    $('#cake2').before('<img src="/image/Gallerypic/cake1.png" alt="" id="cake1"/>')
    if (pic_change== 0) {
      $('#cake2').prop('src','/image/Gallerypic/cake2.jpg')
      $('#secondpicdot').addClass('orange')
      $('#firstpicdot, #thirdpicdot').removeClass('orange')
    }
  }
}
resizewind();
$(window).resize(function () {
  resizewind();
});

$('#firstpicdot').click(
  function () {
    pic_change=0
      $('#cake1').addClass('gacvla')
      $('#cake2').addClass('gacvla')
      $('#cake3').addClass('gacvla')
      setTimeout(function () {
        $('#cake1').prop('src','/image/Gallerypic/cake2.jpg')
        $('#cake2').prop('src', '/image/Gallerypic/cake1.png')
        $('#cake3').prop('src','/image/Gallerypic/cake3.jpg')
      },500)
      setTimeout(function (){
        $('#cake1').removeClass('gacvla')
        $('#cake2').removeClass('gacvla')
        $('#cake3').removeClass('gacvla')
      },1000)
    $('#firstpicdot').addClass('orange')
    $('#secondpicdot, #thirdpicdot').removeClass('orange')
    
  }
  )
  $('#secondpicdot').click(
    function () {
      pic_change=1
        $('#cake1').addClass('gacvla')
        $('#cake2').addClass('gacvla')
        $('#cake3').addClass('gacvla')
        setTimeout(function () {
          $('#cake1').prop('src','/image/Gallerypic/cake1.png')
          $('#cake2').prop('src', '/image/Gallerypic/cake2.jpg')
          $('#cake3').prop('src','/image/Gallerypic/cake3.jpg')
        },500)
        setTimeout(function (){
          $('#cake1').removeClass('gacvla')
          $('#cake2').removeClass('gacvla')
          $('#cake3').removeClass('gacvla')
        },1000)
      $('#secondpicdot').addClass('orange')
      $('#firstpicdot, #thirdpicdot').removeClass('orange')
      
    }
    )
    $('#thirdpicdot').click(
      
      function () {
        pic_change=0
        $('#cake1').addClass('gacvla')
        $('#cake2').addClass('gacvla')
        $('#cake3').addClass('gacvla')
        setTimeout(function () {
          $('#cake1').prop('src','/image/Gallerypic/cake1.png')
          $('#cake2').prop('src', '/image/Gallerypic/cake3.jpg')
          $('#cake3').prop('src','/image/Gallerypic/cake2.jpg')
        },500)
        setTimeout(function (){
          $('#cake1').removeClass('gacvla')
          $('#cake2').removeClass('gacvla')
          $('#cake3').removeClass('gacvla')
        },1000)
        $('#thirdpicdot').addClass('orange')
        $('#firstpicdot, #secondpicdot').removeClass('orange')
        
      }
      )

      $('#right2').click(
        function () {
          if (pic_change2==0) {
            $('#girl').addClass('gacvla')
            setTimeout(function () {
              $('#girl').prop('src','/image/backgroundpic/lastpartpics/leftcorner/secondimg.jpg')  
            },500)
            setTimeout(function () {
              $('#girl').removeClass('gacvla')
            },1000)   
            pic_change2=1
          }else if(pic_change2==1){
            $('#girl').addClass('gacvla')
            setTimeout(function () {
              $('#girl').prop('src','/image/backgroundpic/lastpartpics/leftcorner/thirdimg.jpg')  
            },500)
            setTimeout(function () {
              $('#girl').removeClass('gacvla')
            },1000)
            pic_change2=2
          }else{
            $('#girl').addClass('gacvla')
            setTimeout(function () {
              $('#girl').prop('src','/image/backgroundpic/lastpartpics/leftcorner/firstimage.png')  
            },500)
            setTimeout(function () {
              $('#girl').removeClass('gacvla')
            },1000)
            pic_change2=0
          }
      })
      $('#left1').click(
        function () {
          if (pic_change2==0) {
            $('#girl').addClass('gacvla')
            setTimeout(function () {
              $('#girl').prop('src','/image/backgroundpic/lastpartpics/leftcorner/thirdimg.jpg')  
            },500)
            setTimeout(function () {
              $('#girl').removeClass('gacvla')
            },1000)
            pic_change2=2
          }else if(pic_change2==2){
            $('#girl').addClass('gacvla')
            setTimeout(function () {
              $('#girl').prop('src','/image/backgroundpic/lastpartpics/leftcorner/secondimg.jpg')  
            },500)
            setTimeout(function () {
              $('#girl').removeClass('gacvla')
            },1000)
            pic_change2=1
          }else if(pic_change2==1){
            $('#girl').addClass('gacvla')
            setTimeout(function () {
              $('#girl').prop('src','/image/backgroundpic/lastpartpics/leftcorner/firstimage.png')  
            },500)
            setTimeout(function () {
              $('#girl').removeClass('gacvla')
            },1000)   
            pic_change2=0
          }
        }
      )

      $('#plane').click(
        function () {
          localStorage.setItem('comment',$('#inputcom').val())
          localStorage.setItem('logeduser',localStorage.getItem('user'))
          $('#inputcom').val('')

        }
        )



      $('#profile').click(
        function () {
          window.location.href='???????????????'
        }
      )
      $('#comnumb').click(
        function () {
          window.location.href='/Main_page/add/comment.html'
        }
      )
      $('#loldad').click(
        function () {
          window.location.href='/Main_page/add/comments/main.html'
        }
      )