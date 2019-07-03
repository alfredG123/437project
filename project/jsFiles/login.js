function checkLogin(){
	var parameters = location.search.substring(1).split("&");
	var account = parameters[0].split("=");
	var loginStatus = unescape(account[1]);

	if(loginStatus == "ss"){
		ssStatus = true;
		login();
	}
	else if(loginStatus == "lib"){
		libStatus = true;
		login();
	}
	else if(loginStatus == "mt"){
		mtStatus = true;
		login();
	}
}

function login(){
	isLoggedIn = true;

	var accLink = document.createElement('li');
	accLink.setAttribute('class','nav-item');
	document.getElementById('menuList').appendChild(accLink);

	var acc = document.createElement('a');
	acc.setAttribute('id','accTab');
	acc.setAttribute('class','nav-link');
	acc.innerHTML=acc.innerHTML+"Account";		
	accLink.appendChild(acc);

	if(ssStatus == true)
		acc.setAttribute('href','accountPage/account.html?status=ss');
	else if(libStatus == true)
		acc.setAttribute('href','accountPage/account.html?status=lib');
	else if(mtStatus == true)
		acc.setAttribute('href','accountPage/account.html?status=mt');

	document.getElementById("loginLink").innerHTML="Sign Out";
	document.getElementById("loginLink").href="index.html";
	document.getElementById("loginLink").setAttribute("onclick","return logout()");
}

function helpLogin(){
	var acc = document.getElementById("accTab");
	acc.setAttribute('href','../accountPage/account.html?status=ss');

	var logLink = document.getElementById("loginLink");
	logLink.href="../index.html";
}

function searchLogin(){

	var acc = document.getElementById("accTab");
	var logLink = document.getElementById("loginLink");

	if(ssStatus == true){
		logLink.href="../index.html";
		acc.setAttribute('href','../accountPage/account.html?status=ss');
	}
	else if(libStatus == true){
		logLink.href="../index.html";
		acc.setAttribute('href','../accountPage/account.html?status=lib');
	}
	else{
		logLink.href="../loginPage/login.html";
	}
}

function checkCredential(){
	var empty = true;
	var inputEmail=document.getElementById("email").value;
	var inputPwd=document.getElementById("password").value;

	try{
		if(inputEmail === ""){
			throw "empty";
		}
		else if(inputPwd === ""){
			throw "empty";
		}
		else{
			empty = false;
		}	
	}catch(err){
		alert("Error: Please fill in all information!");
		return false;
	}

	if(empty == false){
		if(inputEmail == "ss@abc.edu" && inputPwd == "123"){
			document.getElementById('subButton').value = "ss";
			return true;
		}
		else if(inputEmail == "lib@abc.edu" && inputPwd == "456"){
			document.getElementById('subButton').value = "lib";
			return true;
		}
		else if(inputEmail == "mt@abc.edu" && inputPwd == "789"){
			document.getElementById('logForm').setAttribute('action',"../accountPage/account.html");
			document.getElementById('subButton').value = "mt";
			return true;
		}
		else{
			empty = true;
			alert("Error: The email is not mathcing to the password!");
			return false;
		}
	}
	else{
		return false;
	}	
}

function checkEmail(){
	var empty = true;
	var inputEmail=document.getElementById("email").value;
	try{
		if(inputEmail === ""){
			throw "empty";
		}
		else{
			empty = false;
		}
	}catch(err){
		alert("Error: Please fill in your email!");
		return false;
	}

	if(empty == false){
		var c = confirm("Confirm?");
		if(c == true){
			alert("An mail is sent to your email");
			return true;
		}
		else{
			return false;
		}
	}	
}

function checkInfo(){
	var ready = false;
	var dupli = true;
	var match = false;
	var inputEmail=document.getElementById("email").value;
	var inputPassword=document.getElementById("password").value;
	var inputConPassword=document.getElementById("confirmPassword").value;

	try{
		if(inputEmail === ""){
			throw "empty";
		}

		if(inputPassword === ""){
			throw "empty";
		}

		if(inputConPassword === ""){
			throw "empty";
		}

		ready = true;

	}catch(err){
                alert("Please fill in all information!");
	}

	if(ready == true){
		try{
			if(inputEmail == "ss@abc.edu" || inputEmail == "lib@abc.edu" || inputEmail == "mt@abc.edu"){
				throw "existed";
			}

			dupli = false;
		}catch(err){
                	alert("Error: The email is already registered!");
		}
	}

	if(dupli == false){
		try{
			if(inputPassword != inputConPassword){
				throw "mismatch";
			}
				match = true;
		}catch(err){
                	alert("Error: Two passwords do not matched!");
		}
	}

	if(match == true){

		var answer = confirm("Complete?");
		if(answer == true){
			alert("A verification email is sent to you!");
			window.location.replace("../index.html");
		}
		else{
			ready=false;
		}
	}
}

function checkUrl(){
	var parameters = location.search.substring(1).split("&");
	var numString = parameters[0].split("=");
	var num = unescape(numString[1]);
	var inputNum = num * 2;
	
	var accString = parameters[1].split("=");
	var acc = unescape(accString[1]);

	if(acc == "ss"){
		ssStatus = true;
		login();
	}
	else if(acc == "lib"){
		libStatus = true;
		login();
	}

	var i;
	for(i = 2; i <= inputNum; i = i + 2){
		var temp1 = parameters[i].split("=");
		var type = unescape(temp1[1]);
				
		var temp2 = parameters[i+1].split("=");
		var key = unescape(temp2[1]);

		if(type == "Title"){
			if(key == book1.title){
				findBook1 = true;
			}
			else if(key == book2.title){
				findBook2 = true;
			}
			else if(key == book3.title){
				findBook3 = true;
			}
		}

		if(type == "Author"){
			if(key == book1.author){
				findBook1 = true;
			}
			else if(key == book2.author){
				findBook2 = true;
			}
			else if(key == book3.author){
				findBook3 = true;
			}
		}

		if(type == "Year"){
			if(key == book1.year){
				findBook1 = true;
			}
			else if(key == book2.year){
				findBook2 = true;
			}
			else if(key == book3.year){
				findBook3 = true;
			}
		}

		if(type == "ISBN"){
			if(key == book1.ISBN){
				findBook1 = true;
			}
			else if(key == book2.ISBN){
				findBook2 = true;
			}
			else if(key == book3.ISBN){
				findBook3 = true;
			}
		}
	}	
}