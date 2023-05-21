// Multiplication table using for loop
document.write("<h3>Multiplication Table using for loop</h3>");

const number = parseInt(prompt('Enter an integer: '));

function multiplicationTable(number) {
	//creating a multiplication table
	for(let i = 1; i <= 10; i++) {

		let result = i * number;

		document.write(`${number} * ${i} = ${result}`);
		document.write("<br>");
		 
	};
}

multiplicationTable(number);





	
	
	
	
	
	
		