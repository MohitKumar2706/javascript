//~   Qs1.Write a JavaScript program to get the first n elements of an array. 
//~   [n can be any positive number].For example: for array [7,9,0,-2] and n = 3 Print,[7,9,0];

let arr=[7,9,0,-2];

let n=3;

console.log(arr.slice(0, n));
console.log(arr);

//~ Qs2.Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
// ~ For example:for array [7,9,0,-2]and n=3 Print,[9,0,-2;

let arr2=[7,9,0,-2];

let n2=3;

// console.log(arr2.slice(-n2))
//             or
console.log(arr2.slice(arr2.length-n2));


//~ Q3 Write s javascript program to heck wether a string is blank or not.

let str="";

if(str.length==0)
{
    console.log("string is blank");
}
else{
    console.log("string is not balnk")
}

//~ Q4 Qs4.Write a JavaScript program to test whether the character at the given (character)index is lower case.

let str2="IamMoHitKuMaR";
let index=3;
if(str2[index]==str2[index].toLowerCase())
{
    console.log("lowercase");
}
else{
    console.log("UPPERCASE");
}

//~ Q5 Write a javascript program to stripe leading and trailing spaces from a string.

let str3="   mohit  ";
console.log(`Original strig ${str3}`);
console.log(`string after the trim ${str3.trim()}`)


//~ Q6 Write a js program to check if an element eixts in an array or not.

let arr3=["mohit", 5.2, 35,"kumar"];

let tocheck= 35;

// console.log(arr3.includes(tocheck));
//            or

if(arr3.indexOf(tocheck) != -1)
{
    console.log("Element is present at index  ", arr3.indexOf(tocheck) );
}
else{
    console.log("element is not present");
}
