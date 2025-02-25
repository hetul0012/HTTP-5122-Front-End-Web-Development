//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var Team_Member = ["Hetul", "Jeel", "Saumil", "Milin", "Sunny"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(Team_Member);

//REMOVE LAST MEMBER
Team_Member.pop();
console.log(Team_Member);

//ADD SEAN TO FRONT OF ARRAY
Team_Member.unshift("Sean");
console.log(Team_Member);

//REARRANGE THE ARRAY ALPHABETICALLY
Team_Member.sort();
console.log(Team_Member);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have " + Team_Member.length + " " +"NUMBER people in our group." )

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (var i = 0; i < Team_Member.length; i++){
    console.log( Team_Member[i] + " " +"#" + (i + 1) );
}
