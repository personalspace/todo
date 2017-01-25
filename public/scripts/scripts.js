function changeClass() {
		var elNode = document.getElementsByTagName('li');
		if(elNode.className != 'completed'){
		elNode.className = 'completed';
		}};

var listItem = document.getElementsByTagName('button');
		
listItem.onclick = changeClass;
