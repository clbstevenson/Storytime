var test_value = 44;

function add_text_point(text) {
	console.log("Testing function with no parameters...");

	// Find the element for the list of events/text.
	var list = document.getElementById("event_list");
	console.log("list: " + list);
	
	// Create a new element for the text list item
	var list_item = document.createElement("li");
	var text_node = document.createTextNode(text);
	list_item.appendChild(text_node);
	
	list.appendChild(list_item);
	//list.innerHTML += "<li>" + text + "</li>";
	
	console.log("Finished function with no parameters.");
}

function add_text_by_index(text, index) {
	console.log("Adding list item with index " + index);
	
	add_text_point(text + index);
	
	console.log("Completed adding text by index.");
}

function add_blank_textfields() {
	
}