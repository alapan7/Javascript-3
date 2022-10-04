//Write a JavaScript program to find the area of a triangle where the lengths of the three of its sides are 5, 6, 7.//

let a=5;
let b=5;
let c=7;
let s;
s=(a+b+c)/2;
let area= Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log("The area of the triangle is"+area);

//Write a JavaScript exercise to get the extension of a filename//
filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());



//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. (edited) //
function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));