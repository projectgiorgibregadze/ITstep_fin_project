// ფუნქცია პაროლის აღდგენისა და მისი შეცვლისათვის
let index_forgot = 0;
let index_code = 0
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
    $('#button').html('Sign in')
    index_forgot = 0;
  }
});

$("#button").click(function (event) {
  event.preventDefault();
  if (index_forgot==1) {
    $("#Emailplace").prop("placeholder", "Write code here");
    $.getJSON('data.json', function(data) {
      const existingemail = data.users.map(user => user.mail);
      var codemail = $('#Emailplace').val();
      if (existingemail.includes(codemail)) {
        index_code=1
        alert('Check Your Mail')
        setTimeout(function () {
          $('#Emailplace').val('')
        },10)
      }
      $('#Emailplace').prop('placeholder','Input Your Code Here')
      $('#button').html('Submit')
    })
    index_forgot=2 
  }else if (index_forgot==2) {
    $('#Emailplace').val
    $.ajax({
      url: 'https://api.sendgrid.com/v3/mail/send',
      method: 'POST',
      headers: {
        'Authorization': 'ngeVfQFYQlKU0ufo8x5d1A',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: 'hdark2638@gmail.com'
              }
            ]
          }
        ],
        from: {
          email: 'giorgibregadze96@gmail.com'
        },
        subject: 'Test email',
        content: [
          {
            type: 'text/plain',
            value: 'Hello, world!'
          }
        ]
      }),
      success: function(response) {
        console.log('Email sent');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error: ' + textStatus + ' ' + errorThrown);
      }
    });
    
  }
  
});

// ჯერ ჯერობით არ დამიმთავრებია
