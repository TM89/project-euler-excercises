function eulerOne(){
	//multiples of 3 or 5 in range [0..1000]
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
	return result;
}