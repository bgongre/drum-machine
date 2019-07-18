let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let btn = document.querySelector('BUTTON');

appendDeleteButton();

//append checkbox for already listed list items
function appendDeleteButton(){
	let listItems = document.querySelectorAll("li");
	listItems.forEach((item)=>{
		item.append(createDeleteButton());
	});
}

function createDeleteButton(){
	let btn = document.createElement("BUTTON");
	let btnName = document.createTextNode("Delete");
	btn.appendChild(btnName);
	li.appendChild(btn);
	// adding event listener for a button to listen for click event and trigger
	//deleteListItem when it's clicked
	btn.addEventListener('click', deleteListItem);
	return btn;
}

function deleteListItem(item){
// event.target is btn, parentNode for that btn is li
//  remove li for particular btn whenever it is clicked
	item.target.parentNode.remove();
}

function inputLength() {
	return input.value.length;
}

function toggleStrikeThrough(event) {
	event.target.classList.toggle('done');
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	//append checkbox for new list item
	li.append(createDeleteButton());
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleStrikeThrough);
