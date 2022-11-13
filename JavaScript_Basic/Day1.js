// 1. Write a JavaScript program to display the current day and time in the following format.

console.clear();
const currentdate = new Date();

function formatAMPM(date) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const datetime = weekday[currentdate.getDay()];
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return `Today is: ${datetime}. Current time is: ${strTime}`;
}

console.log(formatAMPM(currentdate));

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 

const area = (base,height) => {
  return 1/2*base*height
}

console.log(area(5,6,7))``


//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 

for (let year = 2014; year <= 2050; year++){
  const D = new Date(year, 0,1)
  if (D.getDay() === 0)
  console.log(`1st January is being a Sunday in ${year}`)
}


//Write a JavaScript program to calculate days left until next Christmas.

// const currentDate = new Date()
// const christmasDate = new Date(2022,11,25)
// const dateChristmas =christmasDate.getDate()
// const dateCurrent = currentDate.getDate()
// const monthChristmas = christmasDate.getMonth()
// const monthCurrent = currentDate.getMonth()

// const calculate = (monthChristmas - monthCurrent)*30 + (dateChristmas- dateCurrent)
// console.log(dateChristmas)
// console.log(dateCurrent)
// console.log(monthChristmas)
// console.log(monthCurrent)
// console.log(calculate)


today=new Date();
const cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
const one_day=1000*60*60*24;
console.log(`${Math.ceil((cmas.getTime()-today.getTime())/(one_day))} days left until Christmas!`);

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

// const string_check = (str1) => {
//     if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
//     {
//       return str1;
//     }
//     return `Py${str1}`;
//   }
  
//   console.log(string_check("Python"));
//   console.log(string_check("thon"));

//Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// function remove_character(str, char_pos) 
//  {
//   part1 = str.substring(0, char_pos);   
//   part2 = str.substring(char_pos + 1, str.length);
//   return (part1 + part2);
//  }

// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));

//Write a JavaScript program to create a new string from a given string changing the position of first and last characters. 
//The string length must be greater than or equal to 1

// const firstLast = (str1) => {
//   if (str1.length <= 1) return str1
//   else {
//     midString = str1.substring(1, str1.length-1)
//     return  str1.charAt(str1.length-1) + midString + str1.charAt(0)
// }
// }

// console.log(firstLast("togzhan")) 

//Write a JavaScript program to create a new string from a given string with the first character
// of the given string added at the front and back.

// const frontBack = (str) => {
//   const firstChar = str.substring(0,1)
//   return (firstChar + str + firstChar)
// }

// console.log(frontBack("sle"))

//Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

// const chechFunction = (num1) =>  {
//   if (num1<0)return ("Enter positive number")
//   else {
//     if (num1%3 === 0||num1%7 === 0) return ("number is a multiple of 3 or a multiple of 7")
//     else return ("number is not  a multiple of 3 or a multiple of 7")
//   }
// }

// console.log(chechFunction(-7))
//Write a JavaScript program to check whether a string starts with 'Java' and false otherwise

// const checkFunction = (string) =>{
//   const begins = string.substring(0,4)
//   if (begins === "Java") return true
//   else return false
// }

// console.log(checkFunction("Javaddddript"))

//Write a JavaScript program to find the largest of three given integers.

// const checkFunction = (num1,num2,num3) => {
//   if (num1 > num2 && num1>num3) return num1
//   else if (num2 > num1 && num2 > num3) return num2
//   else return num3
// }

// console.log(checkFunction(4,8,9))


 