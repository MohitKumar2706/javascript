// If Statement-------------------------------------

let a=18;

if(a>=18)
{
    console.log("you can vote! ")
}

// ! Traffic light problem

let color="yellow";
if(color=="red")
{
    console.log("STOP!...")
}
if(color=="yellow")
{
    console.log("SLOW DOWN!....")
}
if(color=="green")
{
    colsole.log("GO!....")
}


// Else if----------------------------------------------------

let age=18;
if(age>=18)
{
    console.log("you can vote ! ");
}
else if(age<18)
{
    console.log("you cannot vote! ")
}


// else if else-----------------------------------------

let x=1, y=20, z=3;

if(x>y && x>z)
{
    console.log( x + " is greatest");
}
else if (y>z)
{
    console.log(y + " is greatest")
}
else{
    console.log(z + " is greatest")
}    



//switch statement -----------------------------------

let Traffic="green";
    switch(Traffic)
    {
        case"red":
        console.log("STOP");
        break;

        case"yellow":
        console.log("slow");
        break;

        case"green":
        console.log("GO")
        break;

        default:
        console.log(" traffic Light is broken");
        break;
    }


