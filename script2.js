


function displayOperators(){
    var x =10;
    var y = 5;
    
    var sum = x + y;
    var sub = x - y;
    
    var mul = x * y;
    var div = x / y;
    var modulo = x % y;
    
         // increase decrement by 1
     ++x; 
     x++; 
     --x;

     // increase decrement based on particular number
     x += 5; //  x = x+5;
     y -= 8;  // y = y-8;
    
    
    document.getElementById("result").innerHTML = `
         <p>x = ${x}  y = ${y}</span></p>
        <p><span>sum of x + y = ${sum}</span></p>
        <p><span>sub of x - y = ${sub}</span></p>
        <p><span>mul of x * y = ${mul}</span></p>
        <p><span>div of x / y = ${div}</span></p>
        <p><span>incrementoperatorbefore= ${x}</span></p>
        <p><span>incrementoperatorafter = ${x}</span></p>
        <p><span>decrementoperator = ${x}</span></p>
        <p><span>decrementoperator = ${y}</span></p>
    `
    
}


function displayComparisonOperators(){
    var a = 10;
    var b =10;
    var c ='10';
    var d= 5;
    var e = 6;
      // empties the result section in html page
    document.getElementById("result").innerHTML = '';
  
    document.getElementById("result").innerHTML = `
    <p>a = ${a}  b = ${b} c= ${c}</span></p>
   <p><span>== : ${a==c}</span></p>
   <p><span>=== : ${a===c}</span></p>
   <p><span>!= : ${d!=e}</span></p>
   <p><span>!== : ${d!==c}</span></p>
   <p><span>> : ${d>e}</span></p>
   <p><span>< : ${d<c}</span></p>
   <p><span><=: ${d<=e}</span></p>
   <p><span>>=: ${d>=c}</span></p>
   <p><span>&& : operator explored with conditional statement</span></p>
   <p><span>|| : operator explored with conditional statement</span></p>
`
}


function showLargestNumber(){
    var num1 = Number(prompt('Please enter first number'));
    var num2 = Number(prompt('Please enter second number'));
    var num3 = Number(prompt('Please enter third number'));

    if( num1 > num2 && num1 > num3){
        alert(`${num1} is largest`)
    }else if (num2 > num1 && num2> num3){
        alert(`${num2} is largest`)
    } else {
        alert(`${num3} is largest`)
    }

}