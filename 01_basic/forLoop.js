//for Loop

for(let i=0; i<5; i++)
{
    console.log(i);
}

//! Print odd number from 1 to 15
console.log("Odd numbers from 1 to 15");

for(let i=0; i<15; i++)
{
    if(i%2 != 0)
    {
        console.log(i);
    }
}

//! Table input from user
console.log("Table");

// let n=prompt("Enter your number");

// n=parseInt(n);

// for(let i=n; i<=n*10; i=i+n)
// {
//     console.log(i);
// }

//!Nested for loop
console.log("Nested for loop");

for( let i=0; i<=3; i++)
{
    for(let j=0; j<=3; j++)
    {
        console.log("value of i: ", i , " value of j: ", j);
    }
}



//While loop.
console.log("While Loop");

let i=1;
while(i<=5)
{
    console.log(i);
    i++;
}


//!Movie guesser game using while loop
/*
let movie="Avatar";
let Guess;
let flag=false;

while( Guess!= movie)
{
    Guess = prompt(" Guess My Faviourit Movie, If Dont want to play type 'NO' ");

    if(Guess == "NO")
    {
        break;
    }
    else if(Guess!= movie)
    {
        console.log("WRONG! Try again");
       
    }
    else{
        flag=true;
    }
}
if(flag)
{
    console.log("Good Job! ");
}
else{
    console.log("No Worries! ");
}
*/

//Loops on array
console.log("Loops on array");

let fruits= ["Mango", "Apple", "Banana", " Litchi", "Orange", "pineapple"];

for(let i=0; i<fruits.length; i++)
{
    console.log(i, fruits[i]);
}


console.log("Revese loop")
for(let i=fruits.length-1; i>=0; i--)
{
    console.log(i, fruits[i]);
}




//Loops on nested aaray

let heros=[["Ironman", "Spiderman", "thor"], ["superman", "wonderwomen","Flash"]];

for(let i=0; i<heros.length; i++)
{
    for(let j=0; j<heros[i].length; j++)
    {
        console.log(heros[i][j]);
    }
}

let students=[["Mohit", 93],["Aman", 94],["Suhani", 100],["Lakshay", 90]];

for(let i=0; i<students.length; i++)
{
    for(let j=0; j<students[i].length; j++)
    {
        console.log(students[i][j]);
    }
}

//for in loop

let num=["one", "two", "three", "four", "five"];

for(let i in num)
{
    console.log(i);
}


//for each

num.forEach((val, ind)=>console.log(val, ind));

//for of

for(let i of num)
{
    console.log(i);
}

for( let i of "Mohit Kumar")
{
    console.log(i);
}