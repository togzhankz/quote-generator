// 53. Write a JavaScript program to check whether the characters
//a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// const checkFunction = (string) => {
//   const myArray = string.split("");
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] === "a" && myArray[i + 4] === "b") 
//     console.log("True");
//     else console.log("False")
//   }
// };

// checkFunction("Myrrafyb");

const ab_Check=(str) =>
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));


// 54. Write a JavaScript program to count the number of vowels in a given string.


const vowels = ["a","e","i","o","u","y"]
const checkVowel = (string) => 
{
  let count = 0
  for (let letter of string.toLowerCase()) {
    if (vowels.includes(letter)) {
        count++;
    }
}
return count

}
console.log(checkVowel("tpgeeen"))



// 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's.
// const equalChars = (string) => 
// {
//   const arrayString = string.split("")
//   count1 = 0
//   count2 = 0
//   for  (let i = 0; i < arrayString.length; i++){
//     if (arrayString[i] === 'p'){
//     count1 ++
//     } else if ( arrayString[i] === 't'){
//     count2++
//         if(count1 === count2) return true
//   } else {
//     return false
//   }
// }
// }

// console.log(equalChars("tttogzhanppp"))





// 56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.????

const formatFunction = (n1,n2) => {
  const result = Math.floor(n1/n2).toString()
  const resultArray = result.split("")
  return resultArray
}
console.log(formatFunction(4,3))

// 57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.????

const copyFunction = (string, num) => {
    if(num<0)
    return false
    else
    return string.repeat(num)
}

console.log(copyFunction("togzhan",2))


// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. 
//The length of the given string must be 3 and above.

const copyFunction2 = (string) => {
  if (string.length < 4)
  return false
  else {
  const lastThree = string.slice(-3).repeat(4)
  return lastThree}
}

console.log(copyFunction2("togzhan"))

// 59. Write a JavaScript program to extract the first half of a string of even length.

const halfString = (string)=> {
  let x
  if (string.length % 2 !== 0)
  return false
  else {
     x = (string.length/2)
  }
  const extractString = string.substring(0, x)
  return extractString
}

console.log(halfString("togzhana"))
// 60. Write a JavaScript program to create a new string without the first and last character of a given string.

const newStringFunction = (string) => {
  const newString = string.slice(1,-1)
  return newString
}

console.log(newStringFunction("togzahn"))


// 61. Write a JavaScript program to concatenate two strings except their first character.

const concatFunction = (str1, str2)=>{
  const concatString = str1.slice(1).concat(str2.slice(1))
  return concatString
}

console.log(concatFunction("apple","banana"))
// 62. Write a JavaScript program to move last three character to the start of a given string. 
//The string length must be greater or equal to three.

const  movethreeFunction = (string) => {
  if (string.length<3)
  return false
  else {
    const lastThree = string.slice(-3)
    const leftOver = string.slice(0, -3)
    return (`${lastThree}${leftOver}`)
  }
}



console.log(movethreeFunction("togzhan"))
// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. 
//The string length must be greater or equal to three.
const middle_three = (str)=> {
  if (str.length % 2!= 0) {
  
   mid = (str.length + 1)/2;
   return str.slice(mid - 2, mid + 1);
   }
 return str;
}
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));



// 64. Write a JavaScript program to concatenate two strings and return the result. 
//If the length of the strings are not same then remove the characters from the longer string.

const str_con_cat = (str1, str2)=> {
  const m = Math.min(str1.length, str2.length);

  return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));

// 65. Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.

const test_script = (str) => {
  if (str.length >= 6 &&  str.endsWith("Script")){
    return true
  }else{
    return false
  }
}
console.log(test_script("JavaScript"))
// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
const test_los_new = (str) => {
  if (str.startsWith("Los") || str.startsWith("New")){
    return true
  }else{
    return false
  }
}
console.log(test_los_new("Siettle"))

// 67. Write a JavaScript program to create a new string from a given string, 
//removing the first and last characters of the string if the first or last character are 'P'. 
//Return the original string if the condition is not satisfied.

const new_string = (str)=> {
  if(str.charAt(0)== "p"&& str.charAt(str.length-1)=="p" ){
    new_str = str.slice(1, -1)
    return new_str
  }
  else{
    return "Condition is not satisfied"
  }
}

console.log(new_string("pethiops"))


// 68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. 
//The string length must be greater or equal to n.

const new_string2 = (str,n) => {
if(str.length >= n) {
  new_str = str.slice(n, -n)
  return new_str
}
else {
  return false
}
}
console.log(new_string2("togzhahahn",3))

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.


const sum_of_three = [2,32,2].reduce((array_element,a)=> array_element + a,0)

console.log(sum_of_three)


// 70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
const rotate_elements_left=(array)=>
{
    return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5])); 


// 71. Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers.
// The array length must be greater or equal to 1.

array = [1,2,3,4]
const check_array_position = (array)=>{
  if(array.length >= 1 &&  array[0]== 1 ||  array[array.length-1] == 1){
    return true
  }
else return false
}

console.log(check_array_position(array))

// 72. Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.

array2 = [6,2,3,4,6]
const check_array_first_last = (array2)=> {
  if (array2[0] === array2[array2.length-1]) return true

else return false
}
console.log(check_array_first_last(array2))

// 73. Write a JavaScript program to reverse the elements of a given array of integers length 3.
array3 = [1,2,3]
 const reverse_array = (array3)=> {
  new_array = array3.reverse()
  return  new_array
 }

 console.log(reverse_array(array3))
// 74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. 
//Display the new array.

array4 = [1,2,3,5]

const max_value_array = (array4)=>{
  max_value = Math.max(array4[0], array4[array4.length-1])
  new_array = array4.fill(max_value)
  return new_array
}

console.log(max_value_array(array4))







// START AT 8PM : FINISH AT 12AM
// 75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.

const new_array_function = (arr1,arr2)=> {
  const new_array = []
  new_array.push(arr1[1],arr2[1])
  return new_array
}

console.log(new_array_function([1,2,3],[4,5,6]))


// 76. Write a JavaScript program to create a new array taking the first and last elements from a given array of integers 
//and length must be greater or equal to 1.

const new_array_function2 =(array) => {
  if(array.length >= 1){
    const new_array = []
    new_array.push(array[0],array[array.length-1])
  return new_array}
  else false
}

console.log(new_array_function2([1,2,3,5,4]))

// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.

const test_function2 = (array)=>{
  if (array.includes(1)|| array.includes(3)){
    return true
  } else return false
}

console.log(test_function2([2,4,4]))

// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.

const test_function_arr = (array)=>{
  if (array.indexOf(1) == -1 && array.indexOf(3)== -1){
    return true
  } else return false
}

console.log(test_function_arr([7,9]))
// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

const twice3040 = (array) =>{
  let a  = array[0]
  let b = array[1]
  if((a === 30 && b === 30) ||(a === 40 && b === 40)) return true
  else return false
}

console.log(twice3040([30,40]))
// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
const swap = (array) =>{
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array;
}
console.log(swap([1, 2, 3, 4]));  
console.log(swap([0, 2, 1]));  
console.log(swap([3])); 
// 81. Write a JavaScript program to add two digits of a given positive integer of length two.

const addDigits = (int)=> {
  return int%10 + Math.floor(int/10)
}

console.log(addDigits(23))

// 82. Write a JavaScript to add two positive integers without carry.

const add_without_carry = (int1,int2)=>{
  let result = 0;
  let x = 1;
  while (int1 > 0 && int2 > 0) {
      result += x * ((int1 + int2) % 10);
      int1 = Math.floor(int1 / 10);
      int2 = Math.floor(int2 / 10);
      x*= 10;
  }
  return result;
}
console.log(add_without_carry(222, 911))
console.log(add_without_carry(200, 900))


// 83. Write a JavaScript to find the longest string from a given array of strings.

const longest_string = (array) =>{
  let max_length = array[0].length
  let ans = array[0]
  for(let i = 1; i< array.length; i++){
    const maxi = array[i].length
    if(maxi > max_length){
      ans = array[i]
      max_length = maxi
    }
  }
  return ans;
}
console.log(longest_string(["khavfffal","daniekd","appppp"]))
// 84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

const alphabet_char_Shift = (str)=> {
  const all_chars = str.split("");
  for(let i = 0; i < all_chars.length; i++) {
    let n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26; 
    all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return all_chars.join("");
}

console.log(alphabet_char_Shift("abcdxyz"))


// 85. Write a JavaScript code to divide a given array of positive integers into two parts. 
//First element goes to first part, second element goes to second part, and third element goes to first part and so on. 
//Now compute the sum of two parts and store into an array of size two.
const  alternate_Sums = (arr) =>  {
  const result = [0, 0];
  for(let i = 0; i < arr.length; i++) 
  {
    if(i % 2) result[1] += arr[i];
    else
      result[0] += arr[i];
  }
  return result
}

console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))

// 86. Write a JavaScript program to find the types of a given angle.
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.




const angle = 123;
switch (true) {
  case angle>0 && angle < 90:
    console.log("Acute");
    break;
  case angle == 90:
    console.log("Right");
    break;
  case angle>90 && angle < 180:
    console.log("Obtuse");
    break;
  case angle == 180:
    console.log("Straight");
    break;
}


// 87. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and it does not divide either, then two given integers are similar. Check whether two given integers are similar or not.

// 89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

// 90. Write a JavaScript program to find the kth greatest element of a given array of integers

// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.

// 92. Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.

// 93. Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.

// 94. Write a JavaScript program to find the number which appears most in a given array of integers.

// 95. Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.

// 96. Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.

// 97. Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.

// 98. Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.
// Fox example "Write" will be write and "PHp" will be "PHP"

// 99. Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.

// 100. Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.
