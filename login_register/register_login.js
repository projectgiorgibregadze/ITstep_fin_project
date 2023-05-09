// fixes needed
var emailFound = false;
let index_reg = 0;
let index_code = 0;
let forgot_mail = "";
let index_login = 0;
$("#forgot").click(function () {
  if (index_reg == 1) {
    $("#passplace2").remove();
    $("#forgot").html("Forgot password?");
    $("#Emailplace").val("");
    $("#passplace").val("");
    index_reg = 0;
    index_login = 0;
  } else if (index_code == 0) {
    $("#passplace,#br2,#br3").remove();
    $("#Emailplace").prop("placeholder", "Email where we can send code");
    $("#button").html("Get Code");
    $("#forgot").html("Go back?");
    index_code = 1;
    index_login = 1;
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
  }
});

$("#button").click(function (event) {
  event.preventDefault();
  if (index_login == 0) {
    $.getJSON("data.json", function (data) {
      $.each(data.users, function (index, user) {
        if (
          user.mail === $("#Emailplace").val() &&
          user.password === $("#passplace").val()
        ) {
          console.log("Login successful!");
          window.location.href = "path here";
          return false;
        }
      });
    });
  } else if (index_reg == 1) {
    $.getJSON("data.json", function (data) {
      var value = $("#Emailplace").val();
      var length = value.length;
      if (length != 0) {
        $.each(data.users, function (index, user) {
          if (user.mail == $("#Emailplace").val()) {
            $("#errortext").html("This Email Has Been Already Used By Someone");
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
            console.log(123);
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
    });
  } else if (index_code == 1) {
    $.getJSON("data.json", function (data) {
      const existingemail = data.users.map((user) => user.mail);
      var codemail = $("#Emailplace").val();
      if (existingemail.includes(codemail)) {
        $("#errortext").html("Check Your Mail");
        $("#Errordiv").removeClass("display");
        setTimeout(function () {
          $("#Errordiv").addClass("slide-out");
          $("#Errordiv").removeClass("slide-in");
          setTimeout(function () {
            $("#Errordiv").removeClass("slide-out");
            $("#Errordiv").addClass("display");
          }, 500);
        }, 2000);
        setTimeout(function () {
          $("#Emailplace").val("");
          $("#Emailplace").prop("placeholder", "Input Your Code Here");
          $("#button").html("Submit");
          index_code = 2;
          forgot_mail = codemail;
        }, 10);
      } else if ($("#Emailplace").val() == "") {
        $("#errortext").html("Input Your Email");
        $("#Errordiv").removeClass("display");
        setTimeout(function () {
          $("#Errordiv").addClass("slide-out");
          $("#Errordiv").removeClass("slide-in");
          setTimeout(function () {
            $("#Errordiv").removeClass("slide-out");
            $("#Errordiv").addClass("display");
          }, 500);
        }, 2000);
      } else {
        $("#errortext").html("Wrong Email");
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
  } else if (index_code == 2) {
    $("#Emailplace").prop("type", "text");
    $("#button").click(function (event) {
      event.preventDefault();
      $.getJSON("code.json", function (data) {
        const testcode = data.code.map((code) => code.examplecode);
        if (testcode.includes($("#Emailplace").val())) {
          $("#Emailplace").prop("placeholder", "Input Your New Password");
          $("#Emailplace").after('<p id="requirements"></p>');
          $("#Emailplace").val("");
          index_code = 3;
        } else if (index_code == 2) {
          $("#errortext").html("Invalid Code");
          $("#Errordiv").removeClass("display");
          setTimeout(function () {
            $("#Errordiv").addClass("slide-out");
            $("#Errordiv").removeClass("slide-in");
            setTimeout(function () {
              $("#Errordiv").removeClass("slide-out");
              $("#Errordiv").addClass("display");
            }, 500);
          }, 2000);
        } else if (index_code == 3) {
          event.preventDefault();
          var val = $("#Emailplace").val();
          var length = val.length;
          if (length == 0) {
            $("#requirements").html("Write down something");
          } else if (length <= 8) {
            $("#requirements").html("Password Must Be 8 Letters Long");
          } else {
            $.getJSON("data.json", function (data) {
              $.each(data.users, function (index, user) {
                if (user.mail === forgot_mail) {
                  user.password = val;
                  $.ajax({
                    url: "data.json",
                    type: "PUT",
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function () {
                      console.log("Password changed successfully");
                      index_code = 0;
                      forgot_mail = "";
                      index_login = 0;
                    },
                  });
                }
              });
            });
          }
        }
      });
    });
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
    $("#button").html("Sign up");
    index_code = 0;
    index_reg = 1;
    index_login = 1;
  } else if (index_reg == 0 && index_code == 2) {
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
    $("#button").html("Sign up");
    index_code = 0;
    index_reg = 1;
    index_login = 1;
  } else if (index_reg == 0 && index_code == 3) {
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
    $("#button").html("Sign up");
    index_code = 0;
    index_reg = 1;
    index_login = 1;
  }
});
