var age = prompt("Enter your age");
checkAge(age);

function checkAge(age) {
	if (age > 18) {return true;}
	else {return confirm( 'Hey ?' )};
}
