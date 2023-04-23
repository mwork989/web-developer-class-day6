function greet(){
    var username = prompt("enter your name");
    alert(`hello ${username}`)

}

function hover(){
   greet();
}

function confirmAge(){
    var age = prompt("enter your age");
    age =  parseInt(age)
    confirm(`Please confirm your age is ${age}`)
    alert(`Confirmed age is ${age}` )
}