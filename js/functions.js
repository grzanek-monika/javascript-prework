function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResult(result){
	let div = document.createElement('div');
	div.innerHTML = result;
	document.getElementById('result').appendChild(div);
}

function clearResult(){
	document.getElementById('result').innerHTML = '';
}
