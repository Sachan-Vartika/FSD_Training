console.log("hello world");
/*console.log("3+4");

console.error("v"); // gives error

console.warn("a");

let x=11;
let bool=true;
const v=11.2;
let b="hbds";
console.log(x,v,b);
console.log(typeof bool);
console.log(typeof v);
console.log(typeof b);*/

let a=10;
let b=4;
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(a%b);

let marks=3;
if(marks>=33) console.log("pass");
else console.log("fail");

//SWITCH CASE
let ch='a';
switch(ch){
    case 'a': 
        console.log("a+b=",a+b);
        break;
    case 'b':
        console.log("a*b",a*b);
        break;
}

//ARRAY
let arr=[10,20,30,40];
console.log(arr);
arr.push(50);
console.log(arr);
arr.pop();
console.log(arr);
//OBJECT
let stu={
    name:"vartika",
    age: 19
}
console.log(stu);

//FUNCTION
function add(a,b){
    return(a+b)
}
console.log(add(5,6));

//ARROW FUNCTION
const mul=(p,q)=>p*q;
console.log("arrow function",mul(5,10));

//DATE
let date=new Date();
console.log(date);

//MATH
console.log(Math.sqrt(65543));
console.log(Math.random()); //random(): number => Returns a pseudorandom number between 0 and 1.

//STRING
txt="Vartika";
console.log(txt.length);
console.log(txt.toUpperCase);
console.log(txt.includes("var"));

//TYPE CONVERSION
let strnum="123";
let convert=Number(strnum);
console.log(convert);
