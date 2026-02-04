function Student(){
    this.name='lakshay';
    this.age=19;
    this.marks=80;
}

const stu=new Student();
for(let key in stu){
    console.log(key,stu[key]);
}

stu.marks=89;
console.log(stu.marks);