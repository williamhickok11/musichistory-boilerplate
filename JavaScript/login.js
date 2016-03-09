"use strict";

var ref = new Firebase("https://blinding-inferno-201.firebaseio.com/");
$("#sign_up_BTN").click(()=>{
  //Define user name and psWord
  let userName = $("#sign_up_name").val();
  let userPassword = $("#sign_up_password").val();

  ref.createUser({
    email    : userName,
    password : userPassword
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });
})


$("#login_up_BTN").click(()=>{
  let userName = $("#sign_up_name").val();
  let userPassword = $("#sign_up_password").val();

  ref.authWithPassword({
    email    : userName,
    password : userPassword
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      // Write code to allow user to access the website
      $("#bottomContainer").removeClass("hidden");
      $("#largeContainer").removeClass("hidden");
      $("#topNav").removeClass("hidden");
      $("#sign_up").addClass("hidden");
      console.log("Authenticated successfully with payload:", authData);
    }
  });
});