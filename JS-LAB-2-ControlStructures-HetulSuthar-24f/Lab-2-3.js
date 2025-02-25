//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

var userEmail = "me@example.com";
var userAgree;
var userName;
//==== LOGIC =============

var userAgree = confirm("would like to join your mailing list");

console.log(userAgree);

if(userAgree === true){

    var userName = prompt("Enter your information" , "me@example.com");

  
    if(userName === "" || userName === null || userName === userEmail ){
        alert("Thank you, but your email was not valid");
        
       
     
    }else{
        alert("“Thank you, our next newsletter will be sent to" + "your mail");
    }
  
}else{
    alert("Thank you, we will not bother you again");
}
