//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
	var username = "dart";	// Correct user name
	var password = "vader"; // Correct password
	var username_input; // var username = prompt();	// user name input
	var password_input;// var password = prompt(); // password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
username_input = prompt("Insert you username");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Your username is" + " " +username_input);
//5. CREATE POPUP BOX FOR PASSWORD
password_input = prompt("Insert you password");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Your password is" + " " + password_input);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(username === username_input && password === password_input){

	//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
alert("Welcome back");
console.log("Login successful");
}

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else{
	alert("Invalid");
console.log("Login Fail");
}