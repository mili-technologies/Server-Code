// 



$(document).ready(function () {
  var config = {
    apiKey: "AIzaSyDqdpDVJ5cnTMcn0N_Jq4XXWYLpqVXEQJY",
    authDomain: "test-6d54b.firebaseapp.com",
    databaseURL: "https://test-6d54b.firebaseio.com",
    projectId: "test-6d54b",
    storageBucket: "test-6d54b.appspot.com",
    messagingSenderId: "27004136578"
  };
  firebase.initializeApp(config);
});

function signUpWithEmailVerification() {
  handleSignUp();
  return;
}

function signIn() {
  toggleSignIn();
  return;
}

function toggleSignIn() {
  // if (firebase.auth().currentUser) {
  //   // [START signout]
  //   firebase.auth().signOut();
  //   // [END signout]
  // } else {
  var email = document.getElementById('login_email').value;
  var password = document.getElementById('login_password').value;
  if (email.length < 4) {
    // alert('Please enter an email address.');
    $('.model1').fadeIn();
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
    loginToApp();
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    // //console.log(error);
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
  });
  //}
  //window.location.href="/miliadmin";
}

/**
 * Handles the sign up button press.
 */
function handleSignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  // //console.log(email, password);
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
    initApp();
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (!!errorCode)
      response = errorCode;
    //console.log(error);
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
  });
}

function sendPasswordReset() {
  var email = document.getElementById('email').value;
  firebase.auth().sendPasswordResetEmail(email).then(function () {
    // Password Reset Email Sent!
    alert('Password Reset Email Sent!');
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    //console.log(error);
  });
}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // var displayName = user.displayName;
      // var email = user.email;
      var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      //console.log("Email Status", emailVerified);
      if (!emailVerified) {
        currentUser = user;
        firebase.auth().currentUser.sendEmailVerification().then(function () {
          // Email Verification sent!            
          //console.log(currentUser);
          firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
            //$('body').append('<input name="user" id="user" value='+idToken+' type="hidden"/>');              
            verifyToken(idToken);
            //console.log(idToken);
          }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            //console.log(errorCode, errorMessage);
          });

          function verifyToken(token) {
            $.ajax({
              url: 'validateToken',
              type: 'POST',
              data: { 'idToken': token, 'restaurantName': $('#restaurantname').val(), 'tableCount': $('#noftables').val(), 'firstname': $('#firstname').val(), 'lastname': $('#lastname').val() },
              success: function (data) {
                //console.log(data);
                if (data == "success")
                  window.location.href = "/login";
                else
                  alert("Issue while validating Token");
              },
              error: function (error) {
                alert(error);
              }
            });
          }
          ////console.log("/login?idToken="+userIdToken);
          // window.location.href = "/login?idToken="+userIdToken;
        }).catch(function (error) {
          var user = firebase.auth().currentUser;
          user.delete().then(function () {
            //console.log("deleted");
          }).catch(function (error) {
            //console.log("user not found");
          });
        });
      } else {
        alert("Your email is already verified!Please login with the email");
      }
    } else {
      alert("Email is not exist!Please use Valid Email");
    }
  });
}

// window.onload = function() {
//   initApp();
// };

function loginToApp() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // var displayName = user.displayName;
      // var email = user.email;
      var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      //console.log("Email Status", emailVerified);
      if (emailVerified) {
        currentUser = user;
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
          $('div.main-login').append('<input name="idToken" id="idToken" value=' + idToken + ' type="hidden"/>');
          console.log('ssssssssssss ' + idToken);
          //addSubmitForm();
        }).catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          //console.log(errorCode, errorMessage);
        });
      } else {
        alert("Email is not verified!Please verify your email");
      }
    } else {
      alert("Email is not Exist!Please use Valid Email");
    }
  });
}

function addSubmitForm() {
  // $('body').append('<form id="loginForm">');
  // $('#loginForm'). 
  $('div.main-login').wrap('<form id="loginForm" name="loginForm">');
  var loginForm = $('#loginForm').get(0);
  loginForm.action = '/dashboard';
  loginForm.method = 'POST';
  //loginForm.submit();
}
