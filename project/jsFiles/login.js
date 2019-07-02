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

	var accForm = document.createElement('form');
	accForm.setAttribute('id','accForm');
	accForm.setAttribute('action','accountPage/account.html');
	accForm.setAttribute('method','GET');	
	accLink.appendChild(accForm);
			

	var accValue = document.createElement('input');
	accValue.setAttribute('name','status');
	accValue.style.display="none";

	if(ssStatus == true)
		accValue.setAttribute('value','std');
	else if(libStatus == true)
		accValue.setAttribute('value','lib');
	else if(mtStatus == true)
		accValue.setAttribute('value','main');

	accForm.appendChild(accValue);

	var acc = document.createElement('a');
	acc.setAttribute('class','nav-link');
	acc.setAttribute('href','');
	acc.setAttribute('onclick','accDir()');
	acc.innerHTML=acc.innerHTML+"Account";		
	accForm.appendChild(acc);


	document.getElementById("loginLink").innerHTML="Sign Out";
	document.getElementById("loginLink").href="";
	document.getElementById("loginLink").setAttribute("onclick","logout()");
}

function goHome(){
	if(isLoggedIn == true){
		if(ssStatus = true){
			document.getElementById("isLogin").value = "ss";
		}
		else if(libStatus = true){
			document.getElementById("isLogin").value = "lib";
		}
		else if(mtStatus = true){
			document.getElementById("isLogin").value = "mt";
		}
		document.getElementById("loginForm").submit();
	}else{
		location.replace(index.html)
	}
}

function accDir(){
	document.getElementById("accForm").submit();
}

function logout(){
	var c = confirm("Do you want to sign out?");
	if(c==true){
		isLoggedIn = false;
		ssStatus = false;
		libStatus = false;
		mtStatus = false;
		window.location.replace("index.html");
	}
}