let num=Number(prompt("enter size of array"));
let arr=[];
for(let i=0;i<num;i++){
    arr[i]=Number(prompt("enter a number"));
}

let max=arr[0];
for(let i=1;i<num;i++){
    if(arr[i]>max) max=arr[i];
}
console.log(max);