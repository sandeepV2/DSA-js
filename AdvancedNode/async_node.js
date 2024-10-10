function first(){
	console.log("first");
}

function second(){
	setTimeout(() => {
	console.log("second");
	}, 0)
}

function third(){
	console.log("third");
}

first();
second();
third();
