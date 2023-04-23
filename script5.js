

function displayEmployee(){
    var Employees = [{ 
        name:"sam",
        age:23,
        isEligibleForVoting:true,
        passport:true,
        address:{
            city:"bangalore",
            pin:56066
        },
        friends:["tom1","jerry1"]
    },
    { 
        name:"maria",
        age:23,
        isEligibleForVoting:true,
        passport:true,
        address:{
            city:"hyderabad",
            pin:56066
        },
        friends:["tom2","jerry2"]
    },{ 
        name:"david",
        age:23,
        isEligibleForVoting:true,
        passport:true,
        address:{
            city:"chennai",
            pin:56066
        },
        friends:["tom","jerry"]
    }]

    var template = ""
     for(var i=0;i<Employees.length;i++){

        template+= `<ul class="card"><li>${Employees[i].name}</li>
        <li>${Employees[i].age}</li>
        <li>${Employees[i].isEligibleForVoting}</li>
        <li>${Employees[i].passport}</li>
        <li>${Employees[i].address.city}</li>
        <li>${Employees[i].address.pin}</li><li>
        <li>${Employees[i].friends}</li><li>`
       
        for(var j=0;j<Employees[i].friends.length;j++){
            `<ul><li>${Employees[i].friends[j]}</li></ul></li>`
        }
        template+=  "</ul>"  
     }
     
     document.getElementById('result').innerHTML = template


    //  var template2 = `<table>
    //    <thead>
    //       <tr>
    //       <th>Employee Name</th>
    //       <th>Employee Age</th>
    //     </tr>
    //   </thead>
    //   <tbody><tr>`
    //   for(var i=0;i<Employees.length;i++){

    //     template2+= `<td>${Employees[i].name}</td>
    //     <td>${Employees[i].age}</td>`
            
    //  }

    //  template2+= `</tbody></table>`
    //  document.getElementById('result2').innerHTML = template2



    // while loop

    var  cars = ["BMW", "Volvo", "Toyota", "Ford"];
    var i=0;
    var text = "";
    while(cars[i]){
        text += cars[i] +"</br>";
        i++;
    }
    document.getElementById('whileResult').innerHTML = text

     // do while loop
    // this loop is preferred when atleast you want to exceute the loop once before checking condition
    // data preparation user case scnearios
     var string1 = "Asdsd";
    Math.min(1,2)

     do{
        console.log(number);
        number++;
     } while( number< 10)

     
}