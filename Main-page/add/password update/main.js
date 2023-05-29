$('#button').click(function (e) {
    e.preventDefault();
    var val = $('#input').val();
    var local = JSON.parse(localStorage.getItem('idofuser'));
  
    var updateUserUrl = "https://kketelauri-001-site1.gtempurl.com/api/user/updateuser";
  
    var updatedUser = {
      id: local.id,
      userName: local.userName,
      firstName: local.firstName,
      lastName: local.lastName,
      email: local.email,
      privateNumber: local.privateNumber,
      password: val,
      active: local.active
    };
  
    fetch(updateUserUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
      .then(response => {
        if (response.ok) {
          console.log("Password updated successfully");
          return response.json();
        } else if (response.status === 400) {
          throw new Error("Bad Request: Invalid data");
        } else {
          throw new Error("Error updating password");
        }
      })
      .then(data => {
        console.log(data);
        // Handle the response data as needed
      })
      .catch(error => {
        console.error(error);
        // Handle the error
      });
  });
  