// AND operator (Both shoud be true)---------------------------------

let test="pass";
let corse_finish=true;

if(test==="pass" && corse_finish===true)
{
    console.log("You have completed your course");
    console.log("You can get you certificate!");
}

//OR operator (Any one should be correct)-------------------------------------

let key=true;
let password="mohit";

if(key===true || password==="hello")
{
    console.log("you can enter inside");
}


//NOT operator (Filips or make the opposite)--------------------------

let isLoggedIn = false ;

// !The ! operator flips false to true
if (!isLoggedIn) {
  console.log("Please log in to continue.");

}


//! falsy and truthy

let m=false;
let n=0;
let l=""
let o=null;
let p;
let q=NaN;

let z=1;

console.log(!m);
console.log(!n);
console.log(!l);
console.log(!o);
console.log(p);console.log(!p);
console.log(q); console.log(!q);

console.log(!z)


//~ QUESTIONS1. check a string is good string or not, good string= string stars with a, length>3.

let str="apple";

if(str[0]==='a' && str.length>3)
{
    console.log("Good string");
}
else{
    console.log("bad string");
}


//~ QUESTION 2 find output.
let num=12;
if((num%3===0)&& ((num+1==15 || (num-1==11))))
{
    console.log("safe");
}
else{
    console.log("unsafe");
}
