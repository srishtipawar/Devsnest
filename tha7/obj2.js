var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
for(let item in student){
    console.log(student[item]);
}
delete student['rollno'];
console.log("After deleting:");
for(let item in student){
    console.log(student[item]);
}