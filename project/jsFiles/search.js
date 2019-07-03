function showBook(){
	if(findBook1 == true){
		var book1title = document.createElement('td');

		var book1Link = document.createElement('a');
		if(ssStatus == true){
			book1Link.setAttribute('href','bookOne.html?status=ss');
		}else if(libStatus == true){
			book1Link.setAttribute('href','bookOne.html?status=lib');
		}else{
			book1Link.setAttribute('href','bookOne.html');
		}

		book1Link.innerHTML = book1.title;

		book1title.appendChild(book1Link);
		document.getElementById('book1').appendChild(book1title);
				
		var book1author = document.createElement('td');
		book1author.innerHTML = book1author.innerHTML + book1.author;
		document.getElementById('book1').appendChild(book1author);
				
		var book1year = document.createElement('td');
		book1year.innerHTML = book1year.innerHTML + book1.year;
		document.getElementById('book1').appendChild(book1year);
				
		var book1ISBN = document.createElement('td');
		book1ISBN.innerHTML = book1ISBN.innerHTML + book1.ISBN;
		document.getElementById('book1').appendChild(book1ISBN);

		if(ssStatus == true){
			var book1Button = document.createElement("button");
			book1Button.setAttribute('class',"btn btn-dark");
			book1Button.setAttribute('onclick',"JavaScript:alert('Adding to bookshelf is successful!')");
			book1Button.innerHTML = "add to favourite";
			var book1Buttontd = document.createElement("td");
			book1Buttontd.appendChild(book1Button);
			document.getElementById('book1').appendChild(book1Buttontd);
		}
		else if(libStatus == true){
			var book1Button = document.createElement("button");
			book1Button.setAttribute('class',"btn btn-dark");
			book1Button.setAttribute('onclick',"JavaScript:alert('Adding to control center is successful!')");
			book1Button.innerHTML = "add to control center";
			var book1Buttontd = document.createElement("td");
			book1Buttontd.appendChild(book1Button);
			document.getElementById('book1').appendChild(book1Buttontd);
		}
	}

	if(findBook2 == true){
		var book2title = document.createElement('td');

		var book2Link = document.createElement('a');
		if(ssStatus == true){
			book2Link.setAttribute('href','bookTwo.html?status=ss');
		}else if(libStatus == true){
			book2Link.setAttribute('href','bookTwo.html?status=lib');
		}else{
			book2Link.setAttribute('href','bookTwo.html');
		}

		book2Link.innerHTML = book2.title;

		book2title.appendChild(book2Link);
		document.getElementById('book2').appendChild(book2title);
				
		var book2author = document.createElement('td');
		book2author.innerHTML = book2author.innerHTML + book2.author;
		document.getElementById('book2').appendChild(book2author);
				
		var book2year = document.createElement('td');
		book2year.innerHTML = book2year.innerHTML + book2.year;
		document.getElementById('book2').appendChild(book2year);
				
		var book2ISBN = document.createElement('td');
		book2ISBN.innerHTML = book2ISBN.innerHTML + book2.ISBN;
		document.getElementById('book2').appendChild(book2ISBN);
		
		if(ssStatus == true){		
			var book2Button = document.createElement("button");
			book2Button.setAttribute('class',"btn btn-dark");
			book2Button.setAttribute('onclick',"JavaScript:alert('Adding to bookshelf is successful!')");
			book2Button.innerHTML = "add to favourite";
			var book2Buttontd = document.createElement("td");
			book2Buttontd.appendChild(book2Button);
			document.getElementById('book2').appendChild(book2Buttontd);	
		}
		else if(libStatus == true){		
			var book2Button = document.createElement("button");
			book2Button.setAttribute('class',"btn btn-dark");
			book2Button.setAttribute('onclick',"JavaScript:alert('Adding to control center is successful!')");
			book2Button.innerHTML = "add to control center";
			var book2Buttontd = document.createElement("td");
			book2Buttontd.appendChild(book2Button);
			document.getElementById('book2').appendChild(book2Buttontd);	
		}	
	}

	if(findBook3 == true){
		var book3title = document.createElement('td');

		var book3Link = document.createElement('a');
		if(ssStatus == true){
			book3Link.setAttribute('href','bookThree.html?status=ss');
		}else if(libStatus == true){
			book3Link.setAttribute('href','bookThree.html?status=lib');
		}else{
			book3Link.setAttribute('href','bookThree.html');
		}

		book3Link.innerHTML = book3.title;

		book3title.appendChild(book3Link);
		document.getElementById('book3').appendChild(book3title);
				
		var book3author = document.createElement('td');
		book3author.innerHTML = book3author.innerHTML + book3.author;
		document.getElementById('book3').appendChild(book3author);
				
		var book3year = document.createElement('td');
		book3year.innerHTML = book3year.innerHTML + book3.year;
		document.getElementById('book3').appendChild(book3year);
				
		var book3ISBN = document.createElement('td');
		book3ISBN.innerHTML = book3ISBN.innerHTML + book3.ISBN;
		document.getElementById('book3').appendChild(book3ISBN);
		
		if(ssStatus == true){	
			var book3Button = document.createElement("button");
			book3Button.setAttribute('class',"btn btn-dark");
			book3Button.setAttribute('onclick',"JavaScript:alert('Adding to bookshelf is successful!')");
			book3Button.innerHTML = "add to favourite";
			var book3Buttontd = document.createElement("td");
			book3Buttontd.appendChild(book3Button);
			document.getElementById('book3').appendChild(book3Buttontd);
		}
		else if(libStatus == true){	
			var book3Button = document.createElement("button");
			book3Button.setAttribute('class',"btn btn-dark");
			book3Button.setAttribute('onclick',"JavaScript:alert('Adding to control is successful!')");
			book3Button.innerHTML = "add to control";
			var book3Buttontd = document.createElement("td");
			book3Buttontd.appendChild(book3Button);
			document.getElementById('book3').appendChild(book3Buttontd);
		}
	}

	if(findBook1 == false && findBook2 == false && findBook3 == false){
		var remove = document.getElementById('bar');
		remove.parentNode.removeChild(remove);
		var noFound = document.createElement('h1');
		noFound.innerHTML = "sorry, there is no match book.";
		document.getElementById('result').appendChild(noFound);
	}
}