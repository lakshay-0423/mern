let arr1=[1,2,3];
let arr2=[4,5,6];

let combined = [...arr1,...arr2];

console.log(combined);

function printing(...numbers){
    for(let num of numbers){
        console.log(num);
    }
}

printing(1,2,3);