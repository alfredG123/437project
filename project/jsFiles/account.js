function accountRedir(){
	var parameters = location.search.substring(1).split("&");
	var account = parameters[0].split("=");
	var loginStatus = unescape(account[1]);

	if(loginStatus == "lib"){
		location.replace("librarianAccount.html");
	}else if(loginStatus == "ss"){
		location.replace("staffStudentAccount.html");
	}else if(loginStatus == "mt"){
		location.replace("maintainerAccount.html");
	}
}