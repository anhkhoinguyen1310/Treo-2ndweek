function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}
// advance random number
function printNum(num1, num2)
{
    for (var num = num1; num < num2; num++)
    {
        console.log(num + " ");
    }
}
printNum(1,11)

console.log(Math.random())
console.log(Math.floor(4.5)); // expected output: 4
console.log(Math.ceil(4.5)); // expected output: 5
console.log(Math.round(4.5)); // expected output: 5
console.log(Math.round(4.49)); // expected output: 4

// nested loop assigment
for (var i = 0; i < 10; i++) {
    var s = "";
    for (var j = 0; j < 10; j++) {
      s = s + i + j + " ";
    }
    console.log(s);
  }

  function printPyramid(number) {
    for (var i = 1; i < number + 1; i++) {
      var s = "";
      for (var j = 0; j < i; j++) {
        s = s + i + " ";
      }
      console.log(s);
    }
}
printPyramid (5)
// print ####
function printPoundSign (number){
for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 8; j++) {
    
       else {
        s += "#";
      }
    }
}
}

