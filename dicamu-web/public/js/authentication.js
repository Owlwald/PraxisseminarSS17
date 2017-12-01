/**
 * Handles the sign in button press.
 */
function toggleSignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    var email = document.getElementById('login_email').value;
    var password = document.getElementById('login_password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);

    });
  }
}


function sendPasswordReset() {
  var email = document.getElementById('login_email').value;
  if (email==""){
      alert('Please give us your Email!')
  }else{
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    alert('Password Reset Email Sent!');
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
  });}
}

  /**
   * initAuth handles setting up UI event listeners and registering Firebase auth listeners:
   *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
   *    out, and that is where we update the UI.
   */
  function initAuth() {
    // Listening for auth state changes.
    firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
        // User is signed in.
        hideLoginForm()
        showContent()
      } else {
        // User is signed out.

      }

    });
    document.getElementById('login_button').addEventListener('click', toggleSignIn, false);
    document.getElementById('login_lost_password').addEventListener('click', sendPasswordReset, false);
  }
