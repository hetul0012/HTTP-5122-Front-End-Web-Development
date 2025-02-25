//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK 


//================== CREATE YOUR checkTemp FUNCTION

//This function's job is to..
//the fuction does to check temperature from user is Hot/Cold
//It needs to receive...


//Variable name : checkTemp
//Parameter : currentTemp
//Data Type : Boolean

//It will return...
//Return Data type : True/ False
//Result : If user return above 30 its print it's Too Hot or User return above -10 it's return Too Cold


function checkTemp(currentTemp){
  
    return currentTemp <= 30 && currentTemp >= -10;
    }

//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var User_temp = parseInt(prompt("Enter Temperature"));
if (checkTemp(User_temp) === true){
    alert(" You’re good, have a nice walk!");
   
}else{
    alert("Yikes! Too hot/Too cold for dog walking!");
}