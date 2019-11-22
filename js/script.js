window.onload = function () {
	///////////////////validation of left-part
let login = document.getElementById("login");
login.onclick = function() {
	let userName = document.getElementById("login-name").value;
	if (userName == "") {
		 return alert("Enter User Name");
	} 
	let userPassword = document.getElementById("login-password").value;	
	if (userPassword == "" ) {
		return alert("Enter Password");
	} 
	location.reload();
}

/////////////////////////validation of right-part
	let registration = document.getElementById("reg");
	registration.onclick = function() {
		let mail = document.getElementById("mail").value;	
		if (mail.indexOf("@") < 0 || mail == "") {
			return alert("Enter valid email")
		}

		let nameUser = document.getElementById("nameUser").value;
		if (nameUser == "") {
		 return alert("Enter User Name");
		} 

		let passwordUser = document.getElementById("passwordUser").value;	
		if (passwordUser == "") {
		return alert("Enter Password");
		} 
		location.reload();
	}

}

