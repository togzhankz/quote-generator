//Write a JavaScript program to get the difference between a given number and 13, 
// if the number is greater than 13 return double the absolute difference.
// function difference(n)
//  {
//     if (n <= 13)
//         return 13 - n;
//     else
//         return (n - 13) * 2;
//  }
// console.log(difference(32))
// console.log(difference(11))

// //Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// function sumTriple (x, y) {
//     if (x == y) {
//       return 3 * (x + y);
//       } 
//      else
//      {
//       return (x + y);
//      }
//    }
//   console.log(sumTriple(10, 20));
//   console.log(sumTriple(10, 10));


  //Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

//   const checkFunction = (num1, num2) => {
//     return ((num1 === 50 || num2 === 50 )|| (num1 + num2 == 50)) 
//   }
// console.log(checkFunction(25,29))

//Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. 

// const checkSign = (num1, num2)=>{
//     return ((num1>0 && num2<0)||(num2>0 && num1<0))
// }
// console.log(checkSign(21,2))


//Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.

const string_check = (str1) => {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
    {
      return str1;
    }
    return `Py${str1}`;
  }
  
  console.log(string_check("Python"));
  console.log(string_check("thon"));

