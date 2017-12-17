var login_btn = document.querySelector("#login_btn");


function createUser(event){
	var email = document.querySelector("#email_txt");
	var password = document.querySelector("#password_txt");
	console.log("click " + email_txt.value)

	firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  if (errorCode == 'auth/weak-password') {
	    alert('The password is too weak.');
	  } else {
	    alert(errorMessage);
	  }
	  console.log(error);
	});

}

login_btn.addEventListener('click', createUser)