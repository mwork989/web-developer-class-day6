function greet() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var age = document.getElementById("age").value;
  // '',undefined,null,0,false - falsy values

  if (fname) {
    alert("welcome " + fname);
  } else {
    alert("please enter firstname");
  }

  if (lname) {
    alert("welcome " + lname);
  } else {
    alert("please enter lastname");
  }

  if (age) {
    age = parseInt(age);

    if (age > 18) {
      alert("eligible for voting");
    } else {
      alert("not eligible for voting");
    }
  } else {
    alert("please enter age");
  }
}
