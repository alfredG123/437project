function helpRedir(){
	var parameters = location.search.substring(1).split("&");
	var account = parameters[0].split("=");
	var loginStatus = unescape(account[1]);

	if(loginStatus == "lib"){
		location.replace("libHelp.html");
	}else if(loginStatus == "ss"){
		location.replace("getHelp.html?status=ss");
	}else{
		location.replace("getHelp.html");
	}
}