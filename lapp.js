/***********************************************
*
*
*
*
*
***********************************************/

//Variáveis contabilizadores Done, Removed, Added
var added = 0;
var index = 0;
var removed = 0;
var did = 0;

/*************************************************************
*
*                     ADICIONAR NOVO ITEM
*
*************************************************************/



/*************************************************************
*
*                     Input Enter Comando
*
*************************************************************/
var myInput = document.getElementById("input");

myInput.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        var questName = this;
				var questNameValue = questName.value;
				novoItem(questNameValue);
				questName.value = "";
    }
};

var beginQuestBtn = document.getElementById("beginQuestBtn");
beginQuestBtn.addEventListener("click", buttonClicked);

function buttonClicked(questNameValue){
	var questName = document.getElementById("input");
	var questNameValue = questName.value;
	novoItem(questNameValue);
	questName.value="";
	
}

/*************************************************************
*
*    				Criação de Novo Item na Lista InProgress
*
*************************************************************/

function novoItem(questNameValue){

	console.log(questNameValue);
	incrementacao();
	newItem(questNameValue);
}

function incrementacao(){
	added++;
	var elemento2 = document.getElementById("add-result");
	elemento2.innerHTML = "Accepted<br>"+added;
}

function newItem(questNameValue){
	index++;
	//ao adicionar um novo item temos de lher inserir um index unico

	var ul = document.getElementById("list-items");
  var li = document.createElement("li");
	li.setAttribute("class", "litem")

  var p = document.createElement("p");
  p.innerHTML = questNameValue;

  var doneBtn = document.createElement("button");
  doneBtn.innerHTML = "✔";
	doneBtn.setAttribute("id", "done"+index);
	doneBtn.setAttribute("class", "botaoCompletar btn");

  var removeBtn = document.createElement("button");
  removeBtn.innerHTML = "✖";
  removeBtn.setAttribute("id", "remove"+index);
	removeBtn.setAttribute("class", "botaoRemover btn");

  li.appendChild(p);
  li.appendChild(doneBtn);
  li.appendChild(removeBtn);
  ul.appendChild(li);
	setRemoveHandlers();
	setDoneHandlers();
	setCountActive();
}


/*************************************************************
*
*                     Active Quest Tracker
*
*************************************************************/

const setCountActive = () =>{
	var activeItems = document.getElementsByClassName("litem");
	var activeCount = activeItems.length;
	console.log(activeCount);
	var progressScore = document.getElementById("progressScore");
	progressScore.innerHTML = activeCount;

}
/*************************************************************
*
*                     REMOVER ITEM
*
*************************************************************/


const setRemoveHandlers = () => {
	var botoes = document.getElementsByClassName("botaoRemover");
	for(var i = 0; i < botoes.length; i++){
		console.log(botoes[i]);
		botoes[i].onclick = function(){
				console.log(this);
				this.closest("li").remove();
				console.log(botoes + " LOLOL");
				removed++;
				var removeuse = document.getElementById("remove-result");
				removeuse.innerHTML = "Deleted<br>"+removed;
				setCountActive();
		}
	}
}

/*************************************************************
*
*                     TERMINAR ITEM (AKA DONE)
*
*************************************************************/

const setDoneHandlers = () => {
	var botoesDone = document.getElementsByClassName("botaoCompletar");
	for(var i = 0; i < botoesDone.length; i++){
		console.log(botoesDone[i]);
		botoesDone[i].onclick = function(){
				console.log(this);
				this.closest("li").remove();
				console.log(botoesDone + " LOLOL");
				did++;
				var feitos = document.getElementById("done-result");
				feitos.innerHTML = "Completed<br>"+did;
				setCountActive();
		}
	}
}
