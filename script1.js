
// primitives
var length = 20;
var firstName = 'David';
var lastName = "Oshea";
var  isEligibleForVoting = true;
var passport = null;


// non primitives
// object section
var employee1 = { name:"maria",age:32,isEligibleForVoting:false,passport:true}
var employee2 = { 
    name:"sam",
    age:23,
    isEligibleForVoting:true,
    passport:true,
    address:{
        city:"bangalore",
        pin:56066
    },
    friends:["tom","jerry"]
}


//array section
/// indexes        0          1         2        3
var cities = ["bangalore","chennai","delhi","hyderbad"];
var empids = [101,102,103,104]
//array list of objects
var xyzEmployees = [
    { name:"tom",age:12,isEligibleForVoting:false,passport:false},
    { name:"harry",age:19,isEligibleForVoting:true,passport:true},
    { name:"jacob",age:45,isEligibleForVoting:true,passport:true}
]


//var firstName = undefined  bad practice
//displaying the value in console section of browser - benefitting the developer for debugging
console.log('length variable =',length);
console.log('firstName variable =', firstName);
console.log('lastName variable =',lastName);
console.log('isEligibleForVoting variable =',isEligibleForVoting);
console.log('passport variable =',passport);

// object section
console.log('employee1 entire object',employee1);
console.log('employee1 name =',employee1.name);
console.log('employee1 age =',employee1.age);
console.log('employee1 voting rights =',employee1.isEligibleForVoting);
console.log('employee1 passport =',employee1.passport);
console.log('employee2 friends =',employee2.friends);
console.log('employee2 friends in index 0',employee2.friends[0]);
// array section
console.log('Array Cities values',cities);
console.log('Array city at index value 1',cities[1]);
console.log('Array empids values',empids);
console.log('Array empid at index value 2',empids[2]);

console.log('Array xyzEmployees  at index value 1',xyzEmployees[1]);
console.log('name of employee in xyzEmployees  at index value 1',xyzEmployees[1].name);

//xyzEmployees[1].name  --> employee.name
//displaying the value in html  section of browser - benefitting the user for viewing experience

document.getElementById("fName").innerHTML = firstName;
document.getElementById("lName").innerHTML = lastName;
document.getElementById("length").innerHTML = length;
document.getElementById("vRight").innerHTML = isEligibleForVoting;
document.getElementById("passport").innerHTML = passport;

// object section
document.getElementById("employee1Name").innerHTML  = employee1.name;
document.getElementById("employee1Age").innerHTML  = employee1.age
document.getElementById("employee1Vrights").innerHTML  = employee1.isEligibleForVoting
document.getElementById("employee1Passport").innerHTML  = employee1.passport


document.getElementById("employee2Name").innerHTML  = employee2.name;
document.getElementById("employee2Age").innerHTML  = employee2.age;
document.getElementById("employee2Vrights").innerHTML  = employee2.isEligibleForVoting;

var city =["bangalore","chennai"]

document.getElementById("employee2Passport").innerHTML  = employee2.passport;
document.getElementById("employee2AddCity").innerHTML  = employee2.address.city;
document.getElementById("employee2AddPin").innerHTML  = employee2.address.pin;

// variable hoisting 
// var passport;
// var firstName;



