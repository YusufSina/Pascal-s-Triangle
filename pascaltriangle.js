"use strict";

Pascal();



function Pascal() {

  let n = +prompt("Sayı : ","");
  let sekil = "";

  for (let i = 0 ; i < n+1 ; i++) {
    for (let j = 0 ; j < i+1 ; j++) {



      sekil += factorial(i) / (factorial(j) * factorial(i-j)) + " ";


    }

    sekil += '<br><br>';

  }

  document.getElementById("demo").innerHTML = sekil;
}


function factorial(x) {

  if (x == 0 || x == 1) {
    x = 1;
    return x;
  }else {
    x = x * factorial(x-1);
    return x;
  }
}
