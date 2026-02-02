let arr=[];
let num=Number(prompt("enter size of array"));

for(let x=0;x<num;x++){
    arr[x]=Number(prompt("enter a number"));
}

let avg=0;

for(let x=0;x<num;x++){
    avg+=arr[x];
}

console.log(avg/num);