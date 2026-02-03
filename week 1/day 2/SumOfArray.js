let num=Number(prompt("enter size of array"));
let arr=[];
for(let i=0;i<num;i++){
    arr[i]=Number(prompt("enter a number"));
}

let sum=0;
for(let i=0;i<num;i++){
    sum+=arr[i];
}
console.log(sum);