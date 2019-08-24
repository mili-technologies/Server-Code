$(document).ready(function () {
  $('.sign_up_security_code').hide();
  $('.security_code').hide();
  $('.security_password').hide();
  $('#registerButton').click(function () {
    $("#contact_form").submit();
    $('#registerButton').attr('disabled', true);
    signUpWithEmailVerification();
  });
  $('#forgot_pass').click(function () {
    $("#security_code").val('');
    $("#security_password").val('');
    $("#forgot-password").text('Send Email');
  });
  $('#resend_security_code').click(function () {
    var jsonData = { email: $('#email').val() };
    ajaxRequestToResendSecurityCode(jsonData);
  });
  $('#resend_security_code_login').click(function () {
    var jsonData = { email: $('#login_email').val() };
    ajaxRequestToResendSecurityCodeLogin(jsonData);
  });
});

function signUpWithEmailVerification() {
  var returnvalue = handleSignUp();
  if (returnvalue == undefined || returnvalue == false) {
    $('#registerButton').attr('disabled', false);
    return false;
  } else {
    var jsonData = { email: $('#email').val() };
    if ($(".sign_up_security_code").is(":visible")) {
      if ($('#uid').val() == '') {
        showErrorToast('Please enter security code.');
      } else {
        returnvalue = ajaxRequestToValidateSignIn(jsonData);
      }
    } else {
      returnvalue = ajaxRequestToValidateSignIn(jsonData);
    }
    $('#registerButton').attr('disabled', false);
    return returnvalue;
  }
}

function signIn() {
  return toggleSignIn();
}

function toggleSignIn() {
  var email = document.getElementById('login_email').value;
  var password = document.getElementById('login_password').value;

  if (email.length == 0) {
    showErrorToast('Please enter an email address');
    return;

  } else {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (!re.test(email)) {
      showErrorToast('Invalid Email Id');
      return;
    } else {
      $('.model2').fadeOut();
      $('.model1').fadeOut();
    }

  }

  if (password.length == 0) {
    showErrorToast('Please enter a password.');
    return;
  } else {
    $('.model1').fadeOut();
    $('.model2').fadeOut();
  }
  $('#main-login').attr("disabled", true);
  addSubmitForm();
}

/**
 * Handles the sign up button press.
 */
function handleSignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('user_password').value;
  var cnfpassword = document.getElementById('password').value;
  var name = document.getElementById('first_name').value.trim();
  var lname = document.getElementById('last_name').value.trim();
  var phonenumber = document.getElementById('user_contact').value;
  var restaurantname = document.getElementById('restaurantname').value;
  var sts = document.getElementById('sts').value;
  var state = document.getElementById('state').value;

  if (name == '') {
    return false;
  }else{
    if (!name.match('^[a-zA-Z]{3,16}$') ) {
      return false;
    }
  }
  if (lname == '') {
    return false;
  }else{
    if (!lname.match('^[a-zA-Z]{3,16}$') ) {
      return false;
    }
  }

  if (email == '') {
    return false;
  }else{    
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (!re.test(email)) {
      return false;
    }
  }

  if (state == '') {
    return false;
  }

  if (phonenumber == '') {
    return false;
  }else{    
    var re = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
    if (!re.test(phonenumber)) {
      showErrorToast('Invalid contact number');
      return false;
    }
  }

  if (restaurantname == '') {
    return false;
  }
  
  if (password == '') {
    return false;
  }

  if (cnfpassword == '') {
    return false;
  }else{
    if(!(cnfpassword==password)){
      return false;
    }
  }

  return true;
}

function sendPasswordReset() {
  $('#forgot-password').attr('disabled', true);
  var email = $('#login_email').val();
  if (email == '') {
    $('#forgot-password').attr('disabled', false);
    showErrorToast('Please enter email id');
    return;
  } else {
    $('#forgot-password').attr('disabled', false);
    var jsonData = { email: email, secCode: $('#security_code').val(), secPassword: $('#security_password').val() };
    if ($("#security_code").is(":visible")) {
      if ($("#security_code").val() == '') {
        showErrorToast('Please enter security code');
        return;
      }
      if ($("#security_password").val() == '') {
        $('#forgot-password').attr('disabled', false);
        showErrorToast('Please enter password');
        return;
      }
      ajaxRequestToResetPassword(jsonData);
    } else {
      ajaxRequestToResetPassword(jsonData);
    }
  }
}

// 5/5/2019
function addSubmitForm() {
  var jsonData = { login_email: $('#login_email').val(), login_password: $('#login_password').val() };
  ajaxRequestToValidateLoin(jsonData);
}

function ajaxRequestToChangUserStatus(jsonData) {
  $.ajax({
    url: "/updateUserStatus?userEmailId=" + jsonData + "&status=" + 1,
    type: "GET",
    success: function (result, state, xhr) {
    },
    error: function (error) {
    }
  });
}

function ajaxRequestToValidateLoin(jsonData) {
  $.ajax({
    url: "/validateLogin",
    type: "POST",
    data: jsonData,
    success: function (result, state, xhr) {
      if (result.code != 204) {
        if (result.success == 1) {
          $('#main-login').attr("disabled", false);
          $('div.main-login').wrap('<form id="loginForm" name="loginForm">');
          var loginForm = $('#loginForm').get(0);
          loginForm.action = '/dashboard';
          loginForm.method = 'POST';
          loginForm.submit();
        } else {
          if (result.success == 0) {
            $('#main-login').attr("disabled", false);
            // $('div.main-login').wrap('<form id="loginForm" name="loginForm">');
            // var loginForm = $('#loginForm').get(0);
            // loginForm.action = '/restaurant_form';
            // loginForm.method = 'POST';
            // loginForm.submit();
            showSuccessToast('Our YWait team is processing Your application.')
          } else {
            $('#main-login').attr("disabled", false);
            showErrorToast(result.data);
          }
        }
      } else {
        $('#main-login').attr("disabled", false);
        showErrorToast(result.data);
      }
    },
    error: function (error) {
      $('#main-login').attr("disabled", false);
      showErrorToast(error);
    }
  });
}

function ajaxRequestToValidateSignIn(jsonData) {
  $.ajax({
    url: "/validateSignIn",
    type: "POST",
    data: jsonData,
    success: function (result, state, xhr) {
      if (result.success == 2) {
        if ($('#uid').val() != '') {
          addNewUser();
          return true;
        } else {
          $('#registerButton').prop('value', 'Get started Now');
          showSuccessToast('Verification link sent to email address successfully.');
          $('.sign_up_security_code').show();
          return false;
        }
      } else {
        if (result.success == 0) {
          showErrorToast(result.data);
          return false;
        } else {
          if (result.success == 1) {
            $('#registerButton').prop('value', 'Get started Now');
            showSuccessToast(result.data);
            $('.sign_up_security_code').show();
            return false;
          }
        }
      }
    },
    error: function (error) {
      showErrorToast(error);
    }
  });
}

function addNewUser() {
  var token = "xyz";
  $.ajax({
    url: '/addNewUser',
    type: 'POST',
    data: { 'idToken': token, 'restaurant_name': $('#restaurantname').val(), 'first_name': $('#first_name').val(), 'last_name': $('#last_name').val(), 'user_email': $('#email').val(), 'user_contact': $('#user_contact').val(), 'restaurant_state': $('#sts').val(), 'restaurant_city': $('#state').val(), 'restaurant_password': $('#user_password').val(), 'uid': $('#uid').val() },
    success: function (result) {
      if (result.success == 0) {
        showErrorToast(result.data);
      } else {
        if (result == "success") {
          window.location.href = "/success";
        }
        else {
          showErrorToast('User already Exist');
        }
      }
    },
    error: function (data) {
      showErrorToast(data);
    }
  });
}

function ajaxRequestToResetPassword(jsonData) {
  $.ajax({
    url: "/resetPassword",
    type: "POST",
    data: jsonData,
    success: function (result, state, xhr) {
      if (result.success == 1) {
        $('#forgot-password').attr('disabled', false);
        showSuccessToast(result.data);
        $('#forgot-password').text('Reset Password');
        $('.security_code').show();
        $('.security_password').show();
        return false;
      } else {
        if (result.success == 0) {
          $('#forgot-password').attr('disabled', false);
          showErrorToast(result.data);
          return false;
        } else {
          if (result.success == 2) {
            $('#forgot-password').attr('disabled', false);
            showSuccessToast(result.data);
            window.location.href = "/login";
            return true;
          }
        }
      }

    },
    error: function (error) {
      $('#forgot-password').attr('disabled', false);
      showErrorToast(error);
    }
  });
}

function ajaxRequestToResendSecurityCode(jsonData) {
  $.ajax({
    url: "/resendSecurityCode",
    type: "POST",
    data: jsonData,
    success: function (result, state, xhr) {
      if (result.success == 1) {
        showSuccessToast(result.data);
        return false;
      } else {
        showErrorToast(result.data);
        return false;
      }
    },
    error: function (error) {
      showErrorToast(error);
    }
  });
}
function ajaxRequestToResendSecurityCodeLogin(jsonData) {
  $.ajax({
    url: "/resendSecurityCodelng",
    type: "POST",
    data: jsonData,
    success: function (result, state, xhr) {
      if (result.success == 1) {
        showSuccessToast(result.data);
        return false;
      } else {
        showErrorToast(result.data);
        return false;
      }
    },
    error: function (error) {
      showErrorToast(result.data);
    }
  });
}

function showSuccessToast(msg) {
  var x = document.getElementById("toast");
  $('#toast').css("background-color", '#40c05f');
  x.className = "show";
  $('#desc').text(msg);
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}

function showErrorToast(msg) {
  var x = document.getElementById("toast");
  $('#toast').css("background-color", '#c04040');
  x.className = "show";
  $('#desc').text(msg);
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}

