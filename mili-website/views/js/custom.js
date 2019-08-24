// $( window ).load(function() {
//   // Run code
//   $( "ul" ).empty( ".push-tiny--top" );
// });

$(document).ready(function () {
  $(".push-tiny--top").empty(".push-tiny--top");
});

$('#registerButton').click(function () {
  $(".push-tiny--top").empty(".push-tiny--top");
  //Get parent..

  var name = $('#firstname').val();

  if (name.length == 0) {
    $('.main').css("background-color:#fff")
    $('.push-tiny--top').append("<li class=\"flush--bottom\">First name is required.</li>");
  }
  name = $('#lastname').val();

  if (name.length == 0) {
    $('.main').css("background-color:#fff")
    $('.push-tiny--top').append("<li class=\"flush--bottom\">Last name is required.</li>");
  }

  name = $('#restaurantname').val();

  if (name.length == 0) {
    $('.main').css("background-color:#fff")
    $('.push-tiny--top').append("<li class=\"flush--bottom\">Restaurant name is required.</li>");
  }
  name = $('#phonenumber').val();

  if (name.length == 0) {
    $('.main').css("background-color:#fff")
    $('.push-tiny--top').append("<li class=\"flush--bottom\">Phone Number is required.</li>");
  }

  name = $('#email').val();

  if (name.length == 0) {
    $('.main').css("background-color:#fff")
    $('.push-tiny--top').append("<li class=\"flush--bottom\">Email is required.</li>");
  }
  else {
    if (!isEmail(name)) {
      $('.push-tiny--top').append("<li class=\"flush--bottom\">Your Email format is not correct</li>");
    }
  }

  if (("#email").length == 0) {
    console.log('yes');
  }

});

name = $('#password').val();

if (name.length == 0) {
  $('.main').css("background-color:#fff")
  $('.push-tiny--top').append("<li class=\"flush--bottom\">Pasword is required.</li>");
}
// $( document ).ready(function() {
//   $("#email").focus();
//     $("#email").blur(function(){
//       var name=$('#email').val();
//         if(name.length == 0){
//           $('#email').addClass('your-class');
//         }
//         else {
//           if(!isEmail(email)){
//             //$('#email').addClass('your-class');
//           }
//         }
//   });
// });

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
//   //Find the values added in form using the id of each fields. The ".val()" function finds the value added in the form fields.
//   var fullname = $('#fullname').val();
//   var address = $('#address').val();
//   var mobileno = $('#mobileno').val();
//   var email = $('#email').val();
//   var indexat = email.indexOf("@"); //Index of "@" in the email field
//   var indexdot = email.indexOf("."); //Index of "." in the email field
//   var password = $('#password').val();
//   var repassword = $('#repassword').val();

//   //Function will execute when the button "Click to Submit" is clicked.
//   $('#btnvalidate').click(function() {

//     //Blank field validation of fullname, mobile no and address. The function will generate an alert message if "fullname" or "mobile no" or "address" field is blank  
//     if(fullname == '')
//     {
// 	  alert('Please enter your Full Name');
// 	  $('#fullname').focus(); //The focus function will move the cursor to "fullname" field
//     }
//     else if(address == '')
//     {
// 	  alert('Please enter your Address');
// 	  $('#address').focus();
//     }
//     else if(mobileno == '')
//     {
// 	  alert('Please enter your Mobile Number');
// 	  $('#address').focus();
//     }

//     //Validation of valid email address. The function will generate an alert message if "email" field is blank or incorrect
//     else if(indexat < 1 || (indexdot-indexat) < 2)
//     {
// 	  alert('Please enter a valid Email Id');
// 	  $('#email').focus();
//     }

//     //Validation of password. The function will generate an alert message if "password" field is not same as "retype password".
//     else if(password == '' && password != repassword)
//     {
// 	  alert('Password and Retype password donot match');
// 	  $('#repassword').focus();
//     }
//   });