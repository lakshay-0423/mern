let num1=Number(prompt("enter a number"));
let num2=Number(prompt("enter 2nd number"));

const add=(x,y)=>x+y;
const mul=(x,y)=>x*y;
const sub=(x,y)=>x-y;
const div=(x,y)=>x/y;

const calc={
    addition:add,
    multiplication:mul,
    subtraction:sub,
    division:div
};

let act=prompt("enter a action");
console.log(calc[act](num1,num2));