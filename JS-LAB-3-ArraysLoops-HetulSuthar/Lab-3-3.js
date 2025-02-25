//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var Shipping_Cart = [];
var total_price = 0;
var Shipping_threshold = 35;
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while(total_price <= Shipping_threshold)
{


	//GET ITEM COST FROM USER
	var user_price = prompt("Enter a item price")
	
	//CONVERT USER INPUT TO A NUMBER
	var price = parseInt(user_price)
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	var total_price = total_price + price;
	
	//PUSH ITEM COST TO CART ARRAY
	Shipping_Cart.push(price);
	

}	
	

//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!" + " $ " + total_price);

//SEND OUTPUT TO CONSOLE
console.log("Price of item" + Shipping_Cart.join(" | "));
