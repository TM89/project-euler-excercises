function eulerOne(){
	//multiples of 3 or 5 in range [0..1000]
	var x = new Date();
	var result = 0;
	var numbers = [];
	var isMultiple = false;
	for (var i = 0; i < 1000; i++) {
		if (i % 3 == 0) {
			result += i;
			isMultiple = true;
		} else if (i % 5 == 0) {
			result += i;
			isMultiple = true;
		};
		if (isMultiple) {
			numbers.push(i);
			isMultiple = false;
		};
	}
	console.log("The result is: " + result);
	//return result;
	document.getElementById("answer1").value = result;
	document.getElementById("time1").value = new Date() - x;
}

function eulerTwo(){
	//sum of all even valued fibonacci number with a value that doesn't exceed four mill.
	var x = new Date();
	var result = 0;
	var number = 0;
	var nrOne = 1;
	var nrTwo = 1;
	while(number < 4*10e5){
		console.log('Currently processing: '+ number);
		number = nrOne + nrTwo;
		if(number % 2 == 0) {
			result += number;
		}
		nrOne = nrTwo;
		nrTwo = number;
	}
	console.log("The result is: " + number);
	document.getElementById("time2").value = new Date() - x;
	document.getElementById("answer2").value = result;
}