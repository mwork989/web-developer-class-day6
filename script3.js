
function greet(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
 

   alert("welcome "+ fname + lname)

   var age = document.getElementById('age').value;
   age = parseInt(age);
  
   if(age>18){
    alert("eligible for voting")
   }else{
    alert("not eligible for voting")
   }

   //alert(`welcome ${fname},${fname}`)
}

