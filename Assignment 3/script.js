"use strict";

// Challenge 1 Type Conversion

let numStr = "25";
console.log(numStr);
console.log(typeof numStr);

let num = Number(numStr);
console.log(num);
console.log(typeof num);

console.log(num + 10);

/* what I understood
the Number() method can convert a number stored in a string to a actual number
you can use type of to check the variable before and after changes to make sure its the
type you want 
*/

// Challenge 2 Type Coercion 

let numStr2 = "100";
let num2 = 500;

let addResult = numStr2 + num2;
let minResult = numStr2 - num2;
let multResult = numStr2 * num2;

console.log(addResult, typeof addResult);
console.log(minResult, typeof minResult);
console.log(multResult, typeof multResult);

/* what I understood
That strings and numbers will not act as expected when you combine them
if you add them it combines them into a string but if you multiply or subtract it 
converts the string number to a number

*/

//Challenge 3 True and False Values

let nonEmptyStr = "Hi";
let emptyStr = "";
let zero = 0;
let posNum = 5;
let nullVal = null;
let undefinedVal = undefined;

console.log(Boolean(nonEmptyStr));
console.log(Boolean(emptyStr));
console.log(Boolean(zero));
console.log(Boolean(posNum));
console.log(Boolean(nullVal));
console.log(Boolean(undefinedVal));

/* what I understood
that some values by default are true or false.
an empty string, 0, null, and undefined become false and a non empty string and 
a positive number become true;
*/

//Challenge 4  if/else

let age = 45;
let age2 = 14;

if (age >= 18) {
    console.log("You are eligible.");
}
else {
        console.log("You are not eligible yet.");
}
// second test
if (age2 >= 18) {
    console.log("You are eligible.");
}
else {
        console.log("You are not eligible yet.");
}

/* what I understood
the if else statement lets you run different code depending on whether the statement
is true or false. so in this case when age is 45 the block under the if statement runs
and when age is 14 the block under the else statement runs
*/

//Challenge 5 else if

let score = 99; // changed var to test other scores so theres less waste code

if (score >= 90) {
    console.log(score, "Grade: A")
}
else if (score >= 80) {
    console.log(score, "Grade: B")
}
else if (score >= 70) {
    console.log(score, "Grade: C")
}
else if (score >= 60) {
    console.log(score, "Grade: D")
}
else {
    console.log(score, "Grade: F")
}

/* what I understood
the series of if else statements can be used to check all conditions for a problem 
while keeping the code clean
in this case it covers all conditions for a score and outputs the corresponding grade 
*/

//Challenge 6 switch
 
let service = "library";

switch (service) {

    case "library": 
        console.log("The library has books for students to check out.");
        break;
    case "tutoring": 
        console.log("The tutoring center is for students who need help studying.");
        break;   
    case "parking": 
        console.log("The parking lot is where students can park.");
        break;
    case "technology": 
        console.log("The technology center can help students with tech problems.");
        break;
    default:
        console.log("service not found please choose a different option.");
        break;
}

/* what I understood
a switch statement can be used instead of an if statement to check the condition of a variable
and to run different code base on the value of the variable
*/

//Challenge 7 Ternary Operator

let isLoggedIn = true;

console.log(isLoggedIn ? "Welcome Back!" : "Please log in.")

isLoggedIn = false;

console.log(isLoggedIn ? "Welcome Back!" : "Please log in.")

/* what I understood
you can use a ternary operator to make a short in line if statement that checks
whether the statement is true or false and runs the first or second option
*/

//Challenge 8 Student Status Program

let studentName = "John Smith";
let studentAge = 25;
let studentScore = 90;
let major = "Computer Science";
let isEnrolled = true;

let adult;
if (studentAge >= 18) {
    adult = "Yes";
}
else {
    adult = "No";
}

let grade;
if (studentScore >= 90) {
    grade = "A";
}
else if (studentScore >= 80) {
    grade = "B";
}
else if (studentScore >= 70) {
    grade = "C";
}
else if (studentScore >= 60) {
    grade = "D";
}
else {
    grade = "F";
}

let enrollment = isEnrolled ? "Enrolled" : "Not Enrolled";

console.log(`
Student: ${studentName}
Age: ${studentAge}
Major: ${major}
Adult: ${adult}
Score: ${studentScore}
Grade: ${grade}
Status: ${enrollment}
`);

/* what I understood
I understood that you can use a template literal to summarize information from other code and 
display it to the log in a clean format.
*/