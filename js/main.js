// comment app function
function createCom(){

	//get username and comment inputs
	let usernameInput = document.getElementById("usernameInput").value;
	let commentInput = document.getElementById("commentInput").value;

	//create elements
	let usernameH1 = document.createElement("h1");
	let commentH6 = document.createElement("h6");
	let commentDiv = document.createElement("div");
	let deleteBtn = document.createElement("button");

	//Change the user inputs into text nodes
	let usernameText = document.createTextNode(usernameInput);
	let commentText = document.createTextNode(commentInput);
	let deleteCom = document.createTextNode("Delete");
	
	
	//put the text nodes into their parents
	usernameH1.appendChild(usernameText);
	commentH6.appendChild(commentText);
	deleteBtn.appendChild(deleteCom);

	//put the usernameH1 and the commentH3 into the commentDiv
	commentDiv.appendChild(usernameH1);
	commentDiv.appendChild(commentH6);
	commentDiv.appendChild(deleteBtn);

	//adding a class to the comment div that was first in our css
	commentDiv.className = "singlecomment animated pulse"
	// adding class and an attribute to btn that we created
	deleteBtn.className = "delete"
	deleteBtn.setAttribute("onclick", "removeCom()");

	//send elements to the page
	document.getElementById("commentBox").appendChild(commentDiv);
		//function to remove commment in commentDiv
		
}
//button to remove comment from commentDiv
function removeCom(){
			var parent = document.getElementById("commentBox");
			parent.removeChild(parent.childNodes[0]);
	}




// delete buttton for comment box
// $(document).ready(function(){
// 	$(".delete").click(function(){
// 		$(".singlecomment").remove();
// 	});
// });

