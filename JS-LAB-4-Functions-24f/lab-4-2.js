//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function Number_value(number1, number2, number3, number4, number5){
    var Average_Number = (number1 + number2 + number3 + number4 + number5) / 5;
return Average_Number.toFixed(1); 
}

console.log("The Average Number is:" + " " + Number_value(5, 10, 15, 20, 25));
//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS




var course_1 = 90;
var course_2 = 85;
var course_3 = 50;
var course_4 = 75;
var course_5 = 60;


var Grade_Average = Number_value(course_1, course_2, course_3, course_4, course_5);


if(Grade_Average <= 70){
    alert("success");
}else{
    alert("Review required");
}