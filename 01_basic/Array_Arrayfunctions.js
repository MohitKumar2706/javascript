//Array creations

let names=["aman", "Mohit", "Suhani", "shiv"];  //char array
let age=[25, 24, 16, 50];   //number array
let details=["aman", 24, 6.1];  //mixed array
let empty=[];  //empty array


console.log(names), console.log(typeof(names));
console.log(age),console.log(typeof(age));
console.log(details),console.log(typeof(details));


//Array creations by using new keyword;

let Num= new Array("bmw", "Hero", "Tvs", "Tata");
console.log(Num);
console.log(Num[2]);


//We can access array elements and perform action on them.

let info=["Mohit", 24, 6.1];

console.log(info[0][1]);
console.log(info[1].length);
console.log(info[0].toUpperCase());


//Arrays are mutable

let fruits=["Mango","apple","Litchi"];
console.log(fruits);

fruits[0]="Banana";
console.log(fruits);


//Empty array (If we declare an element more then original size then all the middle elemets will remain empty)

fruits[10]="Pineapple";
fruits.length;
console.log(fruits);

//array methods;

//!pop();
let a=[10,20,30,40,50];

a.pop();
console.log(a)

//!puh();
let b=[10,20,30,40,50];

b.push(200);
console.log(b);


//!shift();
let c=[10,20,30,40,50];

c.shift();
console.log(c);

//!unshift();
let d=[10,20,30,40,50];

d.unshift(500);
console.log(d);

//!slice();
let e=[10,20, 30, 40, 50];

let ansE= e.slice(1, 4);
console.log(ansE);
console.log(e);

//!splice();
let f=[10,20, 30, 40, 50];

let ansF = f.splice(1,2,"Mohit");
console.log(ansF);
console.log(f);


let fe=[1,2,3,4,5];

fe.splice(4,0, 4.75);
console.log(fe);


//! toString();

let g=["I","Love","Javascript"];

console.log(g.toString());

//! join();
let h=["I","Love","Javascript"];

console.log(h.join("%"));
console.log(h.join("()"));

//!sort();
let i=[10, 100, 20, 500, 7];

console.log(i.sort());
console.log(i);

console.log(i.sort((a,b)=>a-b));  //ascending order
console.log(i.sort((a,b)=>b-a));  //descinding order
console.log("Original value of array",i);

//!reverse();
let j=[10, 100, 20, 500, 7];

j.reverse();
console.log(j)


//!isarray();
let k=[10, 100, 20, 500, 7];

console.log(Array.isArray(k));


//!indexof()
let L=[10, 100, 20, 500, 7];

console.log(L.indexOf(500));
console.log(L.indexOf(9));


//!includes();
let m=[10, 100, 20, 500, 7];

console.log(m.includes(20));

//!concat();
let first=[20,30];
let second=[40,50];
let third=[60,70];

console.log(first.concat(second,third));


//Array Reference
let arr=[1,2,3,4,5];
console.log(arr);

let arrCopy = arr;

console.log(arrCopy);
arr.pop();
console.log("After making changes in original array",arr);
console.log("After making changes in original array reflect in copy aary",arrCopy);

//constant array
const numarray=[1,2,3,4];
numarray.pop();
numarray.push(20);
// numarray=[20,30,40]; // It will give error


//nested array
let nestedarr=[[1,2],[2,4],[6,7]];
console.log(nestedarr);
console.log(nestedarr[0]);
console.log(nestedarr[0][1]);
console.log(nestedarr[0][2]);
console.log(nestedarr[0].length);
console.log(nestedarr[0].push(30));
console.log(nestedarr);







//~questions and answer...............................
/*
Q1 change the array using splice 
start=['january', 'july', 'march', 'august']
end=['july', 'june', 'march', 'aughust']
*/

let start=['january', 'july', 'march', 'august']

start.splice(0,1);
start.splice(1,0, 'june');
console.log(start);


//Q2 making tic tac game

let game=[[],[],[]];
console.log(game);


game[0][0]='x';
game[0][2]='o';

game[1][1]='x';
game[1][2]=null;


game[2][0]='o';
game[2][2]='x';



console.log(game);















