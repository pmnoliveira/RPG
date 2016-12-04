/*************************************************************
*
*                     APP.JS
*
*************************************************************/

/*************************************************************
*
*                     COUNTING VARIABLES
*
*************************************************************/

var addedQuests = 0;
var questCounter = 0;
var removedQuests = 0;
var completedQuests = 0;

/*************************************************************
*
*   				 INPUT ENTER COMMAND / BUTTON ACCEPT PRESSED
*
*************************************************************/

var questInput = document.getElementById("new-quest-input");

questInput.onkeydown = function (event) { //Function responsible for checking if the enter key is pressed while questInput is focus
	event = event || window.event;
	if (event.keyCode === 13) {
		var questInputValue = this.value;
		addQuest(questInputValue);
		questInputValue.value= "";		
	}
}


var acceptBtn = document.getElementById("new-quest-btn");
acceptBtn.addEventListener("click", addQuest);

/*************************************************************
*
*                     VAR CONTROL CENTER
*
*************************************************************/



function varController(){ //Function responsible for updating variables for UI and internal usage.
	
	//Contabilizar as quests adicionadas
	addedQuests++;
	var addedQuestsElement = document.getElementById("bottom-value");
	addedQuestsElement.innerHTML = addedQuests;
	console.log("addedQuests = " + addedQuests);
	
	//Contabilizar as quests removidas
	
	//Contabilizar as quests completadas
	
	//Contabilizar as quests activas
	
	/*
	if active quest > 0 então
	var nullWarning = document.getElementById("empty-list-p");
	nullWarning.style.display = "none";
	*/
}

/*************************************************************
*
*                    ADD A NEW QUEST
*
*************************************************************/


function addQuest(){ //Function responsible for calling other functions, necessary to create questItems or create/update questList
	varController();
	questListChecker();
}

function questListChecker(){//Checks if the list already exists, if don't create the list and set attributes, otherwise just call the itemCreator function to update it.
	
	var ulExist = document.getElementById("quest-list");
	console.log("ulExiste = "+ulExist);
	
	if(ulExist === null){
		var ul = document.createElement("ul");
		ul.setAttribute("id", "quest-list");
		
		document.getElementById("quest-list-container").appendChild(ul);
		
		document.getElementById("empty-list-p").style.display = "none";
		
		questItemCreator();
	}
	else{
		console.log("List is already created");
		questItemCreator();
	}
}

function questItemCreator(){ //Creates the li child with p and button
	var li = document.createElement("li");
	li.setAttribute("class", "quest-item");
	
	var liDiv = document.createElement("div");
	liDiv.setAttribute("class", "quest-item-div");
	
	var p = document.createElement("p");
	p.setAttribute("class", "quest-name");
	p.innerHTML = "test";
	
	var questBtn = document.createElement("div");
	questBtn.setAttribute("class", "btn-round quest-btn btn");
	
		var completeBtn = document.createElement("div");
		completeBtn.setAttribute("class", "btn-round complete-btn btn sub-button");
	
		var removeBtn = document.createElement("div");
		removeBtn.setAttribute("class", "btn-round remove-btn btn sub-button");
	
		var editBtn = document.createElement("div");
		editBtn.setAttribute("class", "btn-round edit-btn btn sub-button");
	
	questBtn.appendChild(completeBtn);
	questBtn.appendChild(removeBtn);
	questBtn.appendChild(editBtn);
	
	liDiv.appendChild(p);
	liDiv.appendChild(questBtn);
	
	li.appendChild(liDiv);
	document.getElementById("quest-list").appendChild(li);
}