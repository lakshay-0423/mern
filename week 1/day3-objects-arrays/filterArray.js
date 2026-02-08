let num=Number(prompt("enter size of Array"));
let arr=[];

for(let i=0;i<num;i++){
    arr[i]=Number(prompt("enter a number"));
}

const filtered=arr.filter((value)=>value%2===0);

console.log(filtered);