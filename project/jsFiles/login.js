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
	document.getElementById("loginLink").href="";
	document.getElementById("loginLink").setAttribute("onclick","logout()");
}

function goHome(){
	var homeLink = document.getElementById("isLogin");

	if(isLoggedIn == true){
		if(ssStatus == true){
			homeLink.setAttribute('href','index.html?status=ss');
		}
		else if(libStatus == true){
			homeLink.setAttribute('href','index.html?status=lib');
		}
		else if(mtStatus == true){
			homeLink.setAttribute('href','index.html?status=mt');
		}
	}else{
		homeLink.setAttribute('href','index.html');
	}
}

function accDir(){
	document.getElementById("accForm").submit();
}

function logout(){
	var c = confirm("Do you want to sign out?");

	if(c==true){
		var logLink = document.getElementById("loginLink");
		logLink.href="index.html";
	}
}