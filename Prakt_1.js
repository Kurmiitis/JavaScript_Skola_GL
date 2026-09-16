// Uzd 1
console.log("1.1. uzdevums");
const name = 'Gustavs';
const surname = 'Līdaka';
let age = 21;
let uni = 'ViA';
let year = '3';

console.log("Name:",name, "\nSurname:",surname, "\nAge:",age, "\nUniversity:",uni, "\nYear:",year);

// Uzd 1.2
console.log(" ");
console.log("1.2. uzdevums");

var grade1=4;
var grade2=6;
var grade3=8;
console.log(grade1, grade2, grade3);
let total=grade1+grade2+grade3;
let avg=(grade1+grade2+grade3)/3;

console.log("Total: ",total);
console.log("Average: ",avg);


// Uzd 1.3
console.log(" ");
console.log("1.3. Uzdevums");

let price = 80;
let quantity = 3;
let discount = 0.10;

var final=(price*(1-discount));
var all_final=(price*3*(1-discount));

console.log("Price for 1 with discount: ", final);
console.log("Price for all with discount: ", all_final);


// Uzd 1.4
console.log(" ");
console.log("1.4. Uzdevums");

let a = 15;
let b = 4;

var remainder=a%b;
var raise=a**b;
var greater = "";
if(a>b){
    greater="True";
}else{
    greater="False";
}

var equal=equal;
if(a==b){
    equal="A and B are the same number!";
}else{
    equal="A and B are not the same number!";
}

console.log("Remainder: ", remainder);
console.log("A raised to B: ", raise);
console.log("Is A greater than B: ", greater);
console.log(equal);



// Uzd2.1

console.log(" ");
console.log("2.1 uzdevums");

var grade=90;

if (grade>=90){
    console.log("Excellent");
}else if(grade>=80 && grade<=89){
    console.log("Verry good");
}else if(grade>=70 && grade<=79){
    console.log("Good");
}else if(grade>=50 && grade<=69){
    console.log("Passed");
}else{
    console.log("Failed");
}

//uzd 2.2
console.log(" ");
console.log("2.2 uzdevums");

let age1=16;

if(age1>=18){
    console.log("Can vote");
}else{
    console.log("Can't vote");
}

if(age1>=16){
    console.log("Can recieve a student discount!");
}else{
    console.log("Can't recieve a student discount!");
}

// uzd 2.3
console.log(" ");
console.log("2.3 uzdevums");

let username = "student";
let password = "js123";

if(username=="student" && password=="js123"){
    console.log("Login successful");
}else{
    console.log("Invalid credentials");
}

// uzd 2.4
console.log(" ");
console.log("2.4 uzdevums");

// == Pārbauda, vai vērtības ir vienādas, piemēram, 3==3 un 3=='3' būs True, bet 3==4 un 3=='4' būs False
// === Pārbauda vai vērtība un tips ir vienāds, piemēram, 3===3 būs True, bet 3==='3' un 3===4 un 3==='4' būs False

var num1=3;
var num5=3;
var num2='3';
var num3=4;
var num4='4';

let x0=num1==num5
let x= num1==num2;
let x1= num1==num4;
let x2= num1==num4;

console.log("== tests ==");
console.log(x0,x,x1,x2);

let x6=num1===num5;
let x3= num1===num2;
let x4= num1===num4;
let x5= num1===num4;

console.log(" ");
console.log("=== tests ===");
console.log(x6,x3,x4,x5);



// uzd 3
console.log(" ");
console.log("3.1 uzdevums");

const student={
    firstName: 'Gustavs',
    lastName: 'Līdaka',
    age: 21,
    studentId: 'IT24010',
    program: 'IT',
    year1: 3,
    averageGrade: 89,
    getStatus: function(){
        return this.averageGrade;
    }
}
console.log(student);


//uzd 3.2
console.log(" ");
console.log("3.2 uzdevums");

console.log("Name:",student.firstName);
console.log("Programme:",student.program);
console.log("Year:",student.year1);
console.log("Avg grade:",student.averageGrade);


// uzd 3.3
console.log(" ");
console.log("3.3 uzdevums");

student.averageGrade=86;
student.year1=5;
console.log("Avg grade:",student.averageGrade);
console.log("Year:",student.year1);

student.email='gustavs.lidaka@va.lv';
console.log(student.email);


// uzd 3.4
console.log(" ");
console.log("3.4 uzdevums");


if(student.getStatus()>=90){
    console.log("Excellent student!");
}else if(student.getStatus()>=70 && student.getStatus()<=89){
    console.log("Good student!");
}else if (student.getStatus()<70){
    console.log("Needs improvement.");
}



//uzd 4
console.log(" ");
console.log("4.1 uzdevums");

const stud={
    firstName:'Ivars',
    lastName: "Krēsls",
    age: 32,
    program: "Kulinārija",
    averageGrade: 84,
    creditsCompleted: 120,
    getAge: function(){
        return this.age;
    },
    getGrade: function(){
        return this.averageGrade;
    },
    getCreds: function(){
        return this.creditsCompleted;
    },
    getName: function(){
        return this.firstName+" "+ this.lastName;
    }
}

//uzd 4.2
console.log(" ");
console.log("4.2 uzdevums");
var eligable="Null";

if(stud.getAge()>=18 && stud.getGrade()>=50){
    eligable="Eligible";
}else{
    eligable= "Not Eligible";
}
console.log("Registration Status:",eligable);

// uzd 4.3
console.log(" ");
console.log("4.3 uzdevums");

let courseFee = 500;
var dicount=0;
var finalFee=0;

if(stud.getGrade()>=90){
    discount=0.25;
    finalFee=courseFee*(1-discount);
}else if(stud.getGrade()>=80 && stud.getGrade()<=89){
    discounr=0.15;
    finalFee=courseFee*(1-discount);
}else if(stud.getGrade()>=70 && stud.getGrade()<=79){
    discount=0.1;
    finalFee=courseFee*(1-discount);
}else{
    discount=0;
    finalFee=courseFee*(1-discount);
}

console.log("Final course fee: ", finalFee);


//uzd 4.4
console.log(" ");
console.log("4.4 uzdevums");
var level="null";

if(stud.getCreds()>=120){
    level="Graduating";
}else if(stud.getCreds()>=60 && stud.getCreds()<=119){
    level="Advanced";
}else if(stud.getCreds()>=30 && stud.getCreds()<=59){
    level="Intermediate";
}else{
    level="Beginner";
}
console.log(level);

//uzd 4.5
console.log(" ");
console.log("4.5 uzdevums");

console.log("----- STUDENT REPORT -----");
console.log(" ");
console.log("Name:", stud.getName());
console.log("Program:",stud.program);
console.log("Average Grade:",stud.program);
console.log("Eligibility:", eligable);
console.log("Course Fee:",finalFee);
console.log("Study level:",level);
console.log(" ");
console.log("--------------------------");

