//35. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

// const checkFunction = (char, string) => {
//     shortString = string.substring(1,5)
//     return shortString.includes(char)
// }

// console.log(checkFunction("n",""))
//36. Write a JavaScript program to check whether the last digit of the three given positive integers is same.
// const checkFunction2 = (num1,num2,num3) => {
//     const last1 = num1%10
//     const last2 = num2%10
//     const last3 = num3%10
//     return (last1 === last2 && last2 === last3)

// }

// console.log(checkFunction2(4,24,34))
//37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string.
//If the string length is less than 3 convert all the characters in upper case.
// const checkFunction3 = (string) => {
//   if (string.length < 3) {
//     console.log(string.toUpperCase());
//   } else {
//     const newString = string.substring(0,3)
//     const newString2 = string.substring(3)
//     console.log(`${newString.toLowerCase()}${newString2}`)
//   }

// };

// checkFunction3("TOGZHAN")

//41. Write a JavaScript program to check three given numbers,
//if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

// const checkFunction4 = (num1,num2,num3)=>{
//     if (num1=== num2 && num2 === num3) return 30
//     else if (num1 === num2 || num1 === num3 || num2 === num3) return 40
//     else return 20
// }

// console.log(checkFunction4(20,20,20))

//44. Write a JavaScript program to check from three given integers that whether a number is
//greater than or equal to 20 and less than one of the others.

// const checkFunction5 = (num1,num2,num3) => {
//     if (num1 >= 20 && (num1 < num2 || num1 < num3) )return num1
//     else if (num2 >= 20 && (num2 < num1 || num2 < num3) ) return num2
//     else if (num3 >= 20 && (num3 < num1 || num3 < num2) ) return num3
//     else return false
// }

// console.log(checkFunction5(21,19,19))

//48. Write a JavaScript program to reverse a given string.
// const checkFunction6 = (string) => {

//     const array = string.split("").reverse().join("")
//     console.log(array)
// }

// checkFunction6("togzhan")

//49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// const checkFunction7 = (string) => {
//   const alphabetArray = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "A",
//   ];
//   const upperString = string.toUpperCase();
//   const stringArray = upperString.split("");
//   let finalString = "";

//   const valid = stringArray.every((letter) => {
//     return alphabetArray.includes(letter);
//   });

//   if (!valid) {
//     console.log("Enter a string with letters");
//     return;
//   }

//   stringArray.forEach((letter) => {
//     const index = alphabetArray.indexOf(letter);
//     const next = alphabetArray[index + 1];
//     finalString = finalString + next;
//   });

//   console.log(finalString);
// };

// checkFunction7("Togzhan");

//50. Write a JavaScript program to capitalize the first letter of each word of a given string.

// const checkFunction8 = (string) => {
//     const capitalizeString = string.charAt(0).toUpperCase()
//     const theRest = string.substring(1,string.length)
//     return (`${capitalizeString}${theRest}`)
// }

// console.log(checkFunction8("Yogzhan"));

//51. Write a JavaScript program to convert a given number to hours and minutes.

// const checkFunction9 = (seconds) => {
//     const hours = Math.floor(seconds/3600)
//     const residualSeconds = seconds%3600
//     const minutes = Math.floor(residualSeconds/60)
//     const residualSeconds2 = residualSeconds%60
//     return (`${hours} hours ${minutes} minutes ${residualSeconds2} seconds`)
// }

// console.log(checkFunction9(50000))

//52. Write a JavaScript program to convert the letters of a given string in alphabetical order.


