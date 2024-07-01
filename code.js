/*
Pseudocode:
1. Create string message variable
2. Create 3 variables
    variable1- firstComboNum
        create math equation to equal 10
    variable2- secondComboNum
        create math equation to equal 40
    variable3- thirdComboNum
        create math equation to equal 39
3. Create a dialog box to display the user message and the results of the 3 variables in usual format of a lock combination 
*/
//created a string variable for the message to the user
let userMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";
//created 3 variables each to calculate one of the 3 numbers for the vault combination
const firstComboNum = 5+5;
const secondComboNum = 10*4;
const thirdComboNum = (80/2)-1;
//used the alert method to open a dialog with the msg and combination 
alert(userMessage + firstComboNum + "-" +secondComboNum + "-" + thirdComboNum);
//also logged to the console using a different concatenation format
console.log(`${userMessage} ${firstComboNum}-${secondComboNum}-${thirdComboNum}`);
