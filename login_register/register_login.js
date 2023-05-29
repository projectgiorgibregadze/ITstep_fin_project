// ცვლადები
var emailFound = false;
let index_reg = 0;


var userId
let forgot_mail = "";
let index_login = 0;
// ღილაკის ცვლილება და დიზანის 
$("#forgot").click(function () {
  if (index_reg == 1) {
    $("#passplace2").remove();
    $("#forgot").html("Forgot password?");
    $("#Emailplace").val("");
    $("#passplace").val("");
    $("#second_div").show();
    index_reg = 0;
    index_login = 0;
  } else if (index_code == 0) {
    $("#passplace,#br2,#br3").remove();
    $("#Emailplace").prop("placeholder", "Email where we can send code");
    $("#button").html("Get Code");
    $("#forgot").html("Go back?");
    index_code = 1;
    index_login = 1;
    $("#second_div").show();
  } else {
    $("#forgot").html("Forgot password?");
    $("#Emailplace").prop("placeholder", "Email");
    $("#requirements").remove();
    $("#br1").after(
      '<br id="br2"/>\n<input id="passplace"type="password"minlength="5"placeholder="Password"required/>\n<br id="br3"/>'
    );
    $("#button").html("Sign in");
    index_code = 0;
    index_login = 0;
    $("#second_div").show();
  }
});
// რეგისტრაციისა და ლოგინის ასევე პაროლის განახლების ფუნქცია
$("#button").click(function (event) {
  event.preventDefault();

  if (index_login == 0) {
    // ლოგინის ფუნქცია
    var email = $('#Emailplace').val()
    var pass =$('#passplace').val()
    console.log('1312')
    fetch("https://kketelauri-001-site1.gtempurl.com/api/user/Login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass
      }),
    })
      .then((response) => response.json())
      .then((response) =>{
        localStorage.setItem("apiData", JSON.stringify(response));
        console.log(response)
        window.location.href = "/index.html"
      });
  } else if (index_reg == 1) {
    // რეგისტრაციის ფუნქცია
    $.getJSON(
      "https://kketelauri-001-site1.gtempurl.com/api/user/getuser",
      function (data) {
        var value = $("#Emailplace").val();
        var length = value.length;
        if (length != 0) {
          $.each(data.users, function (index, user) {
            if (user.mail == $("#Emailplace").val()) {
              $("#errortext").html(
                "This Email Has Been Already Used By Someone"
              );
              $("#Errordiv").removeClass("display");
              setTimeout(function () {
                $("#Errordiv").addClass("slide-out");
                $("#Errordiv").removeClass("slide-in");
                setTimeout(function () {
                  $("#Errordiv").removeClass("slide-out");
                  $("#Errordiv").addClass("display");
                }, 500);
              }, 2000);
            }
          });
          if (!emailFound) {
            if ($("#passplace").val() == $("#passplace2").val()) {
              var email = $("#Emailplace").val();
              var password = $("#passplace").val();

              fetch(
                "http://kketelauri-001-site1.gtempurl.com/api/user/adduser",
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    userName: "giorgi",
                    firstName: "bregadze",
                    lastName: "project",
                    email: email,
                    privateNumber: "",
                    password: password,
                    active: true,
                  }),
                }
              )
                .then((response) => response.json())
                .then((response) => console.log(2));
            } else {
              $("#errortext").html("Passwords Are Not Same");
              $("#Errordiv").removeClass("display");
              setTimeout(function () {
                $("#Errordiv").addClass("slide-out");
                $("#Errordiv").removeClass("slide-in");
                setTimeout(function () {
                  $("#Errordiv").removeClass("slide-out");
                  $("#Errordiv").addClass("display");
                }, 500);
              }, 2000);
            }
          }
        } else {
          $("#errortext").html("Please Write Your Email Down");
          $("#Errordiv").removeClass("display");
          setTimeout(function () {
            $("#Errordiv").addClass("slide-out");
            $("#Errordiv").removeClass("slide-in");
            setTimeout(function () {
              $("#Errordiv").removeClass("slide-out");
              $("#Errordiv").addClass("display");
            }, 500);
          }, 2000);
        }
      }
    );
  } 
      });

$("#second_div").click(function () {
  if (index_reg == 0 && index_code == 0 && index_login == 0) {
    index_reg = 1;
    index_login = 1;
    $("#passplace").after(
      '<input id="passplace2" type="password" minlength="5" placeholder="Enter Your Password Again" required/>'
    );
    $("#forgot").html("Go back?");
    $("#button").html("Sign Up");
    $("#second_div").hide();
  } else if (index_reg == 0 && index_code == 1) {
    $("#forgot").html("Go back?");
    $("#Emailplace").prop("placeholder", "Email");
    $("#requirements").remove();
    $("#br1").after(
      '<br id="br2"/>\n<input id="passplace"type="password"minlength="5"placeholder="Password"required/>\n<br id="br3"/>'
    );
    $("#passplace").after(
      '<input id="passplace2" type="password" minlength="5" placeholder="Enter Your Password Again" required/>'
    );
    $("#forgot").html("Go back?");
    $("#second_div").hide();
    $("#button").html("Sign up");
    index_code = 0;
    index_reg = 1;
    index_login = 1;
  } else if (index_reg == 0 && index_code == 2) {
    $("#forgot").html("Go back?");
    $("#Emailplace").prop("placeholder", "Email");
    $("#second_div").hide();
    $("#requirements").remove();
    $("#br1").after(
      '<br id="br2"/>\n<input id="passplace"type="password"minlength="5"placeholder="Password"required/>\n<br id="br3"/>'
    );
    $("#passplace").after(
      '<input id="passplace2" type="password" minlength="5" placeholder="Enter Your Password Again" required/>'
    );
    $("#forgot").html("Go back?");
    $("#button").html("Sign up");
    index_code = 0;
    index_reg = 1;
    index_login = 1;
  } else if (index_reg == 0 && index_code == 3) {
    $("#forgot").html("Go back?");
    $("#Emailplace").prop("placeholder", "Email");
    $("#requirements").remove();
    $("#second_div").hide();
    $("#br1").after(
      '<br id="br2"/>\n<input id="passplace"type="password"minlength="5"placeholder="Password"required/>\n<br id="br3"/>'
    );
    $("#passplace").after(
      '<input id="passplace2" type="password" minlength="5" placeholder="Enter Your Password Again" required/>'
    );
    $("#forgot").html("Go back?");
    $("#button").html("Sign up");
    index_code = 0;
    index_reg = 1;
    index_login = 1;
  }
});