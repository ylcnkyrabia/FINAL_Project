

var newNote_btn = document.querySelector("#newNote_btn");
//unorganized list element
var myNotes = document.querySelector("#myNotes");
//text field
var name_txt = document.querySelector("#name_txt");


//create a listener for when i click on the button
newNote_btn.addEventListener("click", handleAddNewNote);

function handleAddNewNote(event){
  //create a new list item
  var listNote = document.createElement("li"); 
  //get the value from the text input field
  var nameValue = name_txt.value;
  console.log("ADD NEW NOTE " + nameValue);
  //create a text node that we will add to the list item
  var textElement = document.createTextNode(nameValue);
  //add the text into the list item
  listNote.append(textElement);  
  //add this list item to the <ul> list as an <li>
  myNotes.append(listNote);
  //Once the new item is done empty the text field
  name_txt.value = "";
  //Make that text field be in focus so I could start typing automatically
  name_txt.focus();
}
