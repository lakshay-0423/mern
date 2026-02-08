const obj={
    name:'lakshay',
    marks:90,
    hobby:{
        indoor:"chess",
        outdoor:"cricket"
    }
};

console.log(obj.hobby.outdoor);

obj["hobby"]["outdoor"]="football";

console.log(obj.hobby.outdoor);