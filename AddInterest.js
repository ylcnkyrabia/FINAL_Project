

var newItem_btn = document.querySelector("#newItem_btn");
//unorganized list element
var myInterestList = document.querySelector("#myInterestList");
//text field
var name_txt = document.querySelector("#name_txt");


//create a listener for when i click on the button
newItem_btn.addEventListener("click", handleAddNewItem);

function handleAddNewItem(event){
  //create a new list item
  var listItem = document.createElement("li"); 
  //get the value from the text input field
  var nameValue = name_txt.value;
  console.log("ADD NEW ITEM " + nameValue);
  //create a text node that we will add to the list item
  var textElement = document.createTextNode(nameValue);
  //add the text into the list item
  listItem.append(textElement);  
  //add this list item to the <ul> list as an <li>
  myInterestList.append(listItem);
  //Once the new item is done empty the text field
  name_txt.value = "";
  //Make that text field be in focus so I could start typing automatically
  name_txt.focus();
}