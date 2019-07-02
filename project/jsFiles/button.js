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

function logout(){
	var c = confirm("Do you want to sign out?");

	if(c==true){
		var logLink = document.getElementById("loginLink");
		logLink.href="index.html";
	}
}

function goHelp(){
	var homeLink = document.getElementById("helpLink");

	if(isLoggedIn == true){
		if(ssStatus == true){
			homeLink.setAttribute('href','helpPage/help.html?status=ss');
		}
		else if(libStatus == true){
			homeLink.setAttribute('href','helpPage/help.html?status=lib');
		}
	}else{
		homeLink.setAttribute('href','helpPage/help.html');
	}
}

function check(){
	var x = document.getElementsByClassName('searchBar');

	var i;
	for(i = 0; i < counter; i++){
		if(x[i].value==''){
			alert("search bar cannot be empty!");
			return false;
		}
	}

	var num = document.getElementById('number');
	num.setAttribute('value',counter);

	if(isLoggedIn == true){
		if(sStat == true){
			var acc = document.getElementById('accStat');
			acc.setAttribute('value',"ss");
		}
		else if(libStat == true){
			var acc = document.getElementById('accStat');
			acc.setAttribute('value',"lib");
		}
	}else{
		var acc = document.getElementById('accStat');
		acc.setAttribute('value',"none");
	}

	return true;
}

function clearKey(){
	var x = document.getElementsByClassName('searchBar');
	x[0].value = '';
	if(counter > 1){
		var i;
		for(i = counter; i > 1; i--){
			var remove = document.getElementsByClassName('inputDiv');
			remove[counter-1].parentNode.removeChild(remove[counter-1]);	
			counter--;
		}
	}
}

function addMore(){
	var max = 3;
	if(counter < max){
		counter++;
		var newSearchBar = document.createElement('div');
		newSearchBar.setAttribute('class', 'form-group row inputDiv');
		document.getElementById('search').appendChild(newSearchBar);
			
		var newInnerBar = document.createElement('div');
		newInnerBar.setAttribute('class', 'form-group col-md-2');
		newSearchBar.appendChild(newInnerBar);

		var newSelect = document.createElement('select');
		newSelect.setAttribute('class', 'form-control typeSelect');
		newSelect.setAttribute('name', 'type');
		newInnerBar.appendChild(newSelect);

		var newTitleSel = document.createElement('option');
		newTitleSel.innerHTML = "Title";
		newSelect.appendChild(newTitleSel);

		var newAuthorSel = document.createElement('option');
		newAuthorSel.innerHTML = "Author";
		newSelect.appendChild(newAuthorSel);

		var newYearSel = document.createElement('option');
		newYearSel.innerHTML = "Year";
		newSelect.appendChild(newYearSel);

		var newISBNSel = document.createElement('option');
		newISBNSel.innerHTML = "ISBN";
		newSelect.appendChild(newISBNSel);

		var newKeyDiv = document.createElement('div');
		newKeyDiv.setAttribute('class', 'form-group col-md-10');
		newSearchBar.appendChild(newKeyDiv);

		var newKey = document.createElement('input');
		newKey.setAttribute('type', 'text');
		newKey.setAttribute('class', 'form-control searchBar');
		newKey.setAttribute('placeholder', 'Keywords');
		newKey.setAttribute('name', 'key');
		newKeyDiv.appendChild(newKey);
	}else{
		alert("Reaching maximum amount of keyword");
	}
}

function deleteBar(){
	if(counter == 1){
		alert("Reaching minium amount of keyword");
		return;
	}
	var remove = document.getElementsByClassName('inputDiv');
	remove[counter-1].parentNode.removeChild(remove[counter-1]);	
	counter--;
}
