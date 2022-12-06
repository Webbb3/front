for (int i =0; i<3; i++) {
	let child = document.createElement("li");
	let text = document.createTextNode("Item");
	child.appendChild(text);

	let parent = document.getElementById("test");
	parent.appendChild(child);
}