// ფუნქცია პაროლის აღდგენისა და მისი შეცვლისათვის
let index_forgot = 0;
$("#forgot").click(function () {
  if (index_forgot == 0) {
    $("#passplace,#br2,#br3").remove();
    $("#Emailplace").prop("placeholder", "Email where we can send code");
    $("#button").html("Get Code");
    $("#forgot").html("Go back?");
    index_forgot = 1;
  } else {
    $("#forgot").html("Forgot passowrd?");
    $("#Emailplace").prop("placeholder", "Email");
    $("#br1").after(
      '<br id="br2"/>\n<input id="passplace"type="password"minlength="5"placeholder="Password"required/>\n<br id="br3"/>'
    );
    index_forgot = 0;
  }
});
$("#button").click(function () {
  $("#Emailplace").prop("placeholder", "Write code here");
  $("#button").html("Submit");
});
// ჯერ ჯერობით არ დამიმთავრებია
