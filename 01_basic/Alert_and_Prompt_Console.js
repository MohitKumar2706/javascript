
//Alert
alert("Hello how are you");
console.log("this is simple message");


//Propmt = it is use to take input from user.
let fname=prompt("Enter your firstName");
let Lname=prompt("Enter your last name");
console.log(`Welcome ${fname+Lname}`);


let display_name=fname+Lname;
alert("welcome" + display_name);

//Print error and warning
console.error("this is a error message");
console.warn("this is a warning message");


//Print multiple values

let name="mohit";
let sirname="Kumar";
let greet="Hello";

console.table([name, sirname, greet])