//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.
var bank_customer = {
 
//2. Add the required properties to your object.
last_name : "Hetul",
branchNumber : 777,
accountBalance :500.25,
interestRate: 1.03, 


//3. Add your first method and test it. Remember, the methods will change the properties of the object.
makeDeposit: function(deposit_amount){
    bank_customer.accountBalance = bank_customer.accountBalance + deposit_amount;
    return " Thank you, your update balance is now $" + this.accountBalance;
},
makeWithdrawal: function(withdraw_amount){
  bank_customer.accountBalance = bank_customer.accountBalance - withdraw_amount;
    return " Thank you, your current balance is now $" + this.accountBalance;
}
}


//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.

console.log(" account starting balance $" + bank_customer.accountBalance);
console.log(" new balance $" + bank_customer.makeDeposit(200));
console.log(" new balance $" + bank_customer.makeWithdrawal(75));
//6. Once everything is working, tackle the Stretch Goal!

