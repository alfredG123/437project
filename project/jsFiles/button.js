function goHome(){
	var homeLink = document.getElementById('homeButton');

	if(isLoggedIn == true){
		if(ssStatus == true){
			homeLink.setAttribute('href','../index.html?status=ss');
		}
		else if(libStatus == true){
			homeLink.setAttribute('href','../index.html?status=lib');
		}
		else if(mtStatus == true){
			homeLink.setAttribute('href','../index.html?status=mt');
		}
	}else{
		homeLink.setAttribute('href','../index.html');
	}
}

function logout(){
	var c = confirm("Do you want to sign out?");

	if(c==false){
		return false;
	}
}

function goHelp(){
	var helpLink = document.getElementById("helpLink");

	if(isLoggedIn == true){
		if(ssStatus == true){
			helpLink.setAttribute('href','helpPage/help.html?status=ss');
		}
		else if(libStatus == true){
			helpLink.setAttribute('href','helpPage/help.html?status=lib');
		}
	}else{
		helpLink.setAttribute('href','helpPage/help.html');
	}
}


function helpToHelp(){
	var helpLink = document.getElementById("helpLink");

	if(isLoggedIn == true){
		if(ssStatus == true){
			helpLink.setAttribute('href','help.html?status=ss');
		}
		else if(libStatus == true){
			helpLink.setAttribute('href','help.html?status=lib');
		}
	}else{
		helpLink.setAttribute('href','help.html');
	}
}

function otherToHelp(){
	var helpLink = document.getElementById("helpLink");

	if(isLoggedIn == true){
		if(ssStatus == true){
			helpLink.setAttribute('href','../helpPage/help.html?status=ss');
		}
		else if(libStatus == true){
			helpLink.setAttribute('href','../helpPage/help.html?status=lib');
		}
	}else{
		helpLink.setAttribute('href','../helpPage/help.html');
	}
}

function search(){
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

	var acc = document.getElementById('accStat');

	if(isLoggedIn == true){
		if(ssStatus == true){
			acc.setAttribute('value',"ss");
		}
		else if(libStatus == true){
			acc.setAttribute('value',"lib");
		}
	}else{
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

function goBack(){
	window.history.back();
}

function subTicket(){

	if(isLoggedIn == false){
		alert("Error: Please sign in!");
		return false;
	}else{
		document.getElementById("sub").value = "std";
		return true;
	}
}

function checkTicket(){
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var comment = document.getElementById("comment").value;

	var fill = false;

	if(email != '' && subject != '' & comment != '')
		fill = true;

	if(fill == false)
		alert("Error: Please fill in all required information.");
			
	if(fill == true){
		var c = confirm("Are you confirm to submit the ticket?");

		if(c == true){
			alert("Your ticket is submitted.");
				window.history.back();
		}
		else{
			fill = false;
		}
	}
}

function checkReply(){
	var replyBox = document.getElementById("reply").value;

	if(replyBox == ''){
		alert("Error: Please fill in your reply!");
	}else{
		alert("Your reply is sent!");
		goBack();
	}
}

function bookAddButton(){
	if(ssStatus == true){
		var book1Button = document.createElement("button");
		book1Button.setAttribute('class',"btn btn-dark btn-block");
		book1Button.setAttribute('onclick',"JavaScript:alert('Adding to bookshelf is successful!')");
		book1Button.innerHTML = "add to favourite";
		document.getElementById('bookDetail').appendChild(book1Button);

		var borrow1Button = document.createElement("button");
		borrow1Button.setAttribute('class',"btn btn-dark btn-block");
		borrow1Button.setAttribute('onclick',"JavaScript:alert('Error: This book is not available.')");
		borrow1Button.innerHTML = "Borrow this book";
		document.getElementById('bookDetail').appendChild(borrow1Button);
	}
	else if(libStatus == true){
		var book1Button = document.createElement("button");
		book1Button.setAttribute('class',"btn btn-dark btn-block");
		book1Button.setAttribute('onclick',"JavaScript:alert('Adding to control center is successful!')");
		book1Button.innerHTML = "add to control center";
		document.getElementById('bookDetail').appendChild(book1Button);
	}

	var backButton = document.createElement("button");
	backButton.setAttribute('class',"btn btn-dark btn-block");
	backButton.setAttribute('onclick',"goBack()");
	backButton.innerHTML = "Back";
	document.getElementById('bookDetail').appendChild(backButton);
}

function confirmChoice(){
	c = confirm("Confirm to shutdown the system?")
	if(c == true){
		alert("System is down!");
	}
}

function clearHistory(){
	var removeHistory = document.getElementById('history');
	removeHistory.parentNode.removeChild(removeHistory);
	
}


function clearFavor(){
	var removeFavor = document.getElementById('favourite');
	removeFavor.parentNode.removeChild(removeFavor);
}

function removeBook1(){
	var removeBook1 = document.getElementById('book1');
	removeBook1.parentNode.removeChild(removeBook1);
}

function removeBook2(){
	var removeBook2 = document.getElementById('book2');
	removeBook2.parentNode.removeChild(removeBook2);
}

function removeBook3(){
	var removeBook3 = document.getElementById('book3');
	removeBook3.parentNode.removeChild(removeBook3);
}

function clearLibSearch(){
	document.getElementById('libSearch').value = "";
}