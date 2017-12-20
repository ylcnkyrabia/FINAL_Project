var login_btn = document.getElementById("login_btn");
login_btn.addEventListener('click', logIn);

function logIn(event){
	var email = document.getElementById("email_txt").value;
	var password = document.getElementById("password_txt").value;
	
	firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "AddInterest.html"
  }
});


