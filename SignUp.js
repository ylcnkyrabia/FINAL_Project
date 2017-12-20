var submit2_btn = document.getElementById("submit2_btn");
submit2_btn.addEventListener("click" , handleSubmission);
	

function handleSubmission(event){

	var email = document.getElementById("email").value; 
	var username = document.getElementById("username");
	var password = document.getElementById("password").value;
	var confirm = document.getElementById("confirm");
		

	console.log("handleSubmission Worked");

	firebase.auth().createUserWithEmailAndPassword(email, password)
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
	
	//window.location.href ="AddInterest.html";






