function Student(){
    this.name='lakshay';
    this.age=19;
    this.marks=80;
}

const student=new Student();
for(let key in student){
    console.log(key,student[key]);
}

student.marks=89;
student["Grade"]='A';

for(let key in student){
    console.log(key,student[key]);
}