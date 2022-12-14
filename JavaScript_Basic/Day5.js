
// 1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one. 

const object1 = {color: "rede",
                age: 33}
const object2 = {color: "red",
                    age: 36}

const equivalentProperty = (object1,object2) => {
    if(object1.color === object2.color){
        return true}
    else{
        return false
    }
}

console.log(equivalentProperty(object1,object2))


const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

  
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }));

// 2. Write a JavaScript program to copy a string to the clipboard. 



// 3. Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array. 

const csv_to_array = (data) =>data.split('\n').map(item => item.split(','))

console.log(csv_to_array(`id,name,price,color,amount
1,Pen,1,black,100
2,Eraser,3,white,234
3,Pen,5,black,368
4,Eraser,7,white,502
5,Pen,9,black,636
6,Eraser,11,white,770
7,Pen,13,black,904
8,Eraser,15,white,1038
9,Pen,17,black,1172
10,Eraser,19,white,1306
11,Pen,21,black,1440
12,Eraser,23,white,1574
13,Pen,25,black,1708
14,Eraser,27,white,1842
15,Pen,29,black,1976
16,Eraser,31,white,2110
17,Pen,33,black,2244
18,Eraser,35,white,2378
19,Pen,37,black,2512
20,Eraser,39,white,2646
21,Pen,41,black,2780
22,Eraser,43,white,2914`))


// 4. Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. 
// The first row of the string is used as the title row. 

const csv_to_object = (str) =>{
    const headers = str.slice(0, str.indexOf("\n")).split(',');
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(row => {
        const values = row.split(',');
        const el = headers.reduce((object, header, index)=> {
          object[header] = values[index];
          return object;
        }, {});
        return el;
      });

      return arr;
    }
//    const firstRow = twodArray.shift()
console.log(csv_to_object(`id,name,price,color,amount
1,Pen,1,black,100
2,Eraser,3,white,234
3,Pen,5,black,368
4,Eraser,7,white,502
5,Pen,9,black,636
6,Eraser,11,white,770
7,Pen,13,black,904
8,Eraser,15,white,1038
9,Pen,17,black,1172
10,Eraser,19,white,1306
11,Pen,21,black,1440
12,Eraser,23,white,1574
13,Pen,25,black,1708
14,Eraser,27,white,1842
15,Pen,29,black,1976
16,Eraser,31,white,2110
17,Pen,33,black,2244
18,Eraser,35,white,2378
19,Pen,37,black,2512
20,Eraser,39,white,2646
21,Pen,41,black,2780
22,Eraser,43,white,2914`))






// 5. Write a JavaScript program to convert an array of objects to a comma-separated values (CSV) string that contains only the columns specified. 



// 6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key. 



// 7. Write a JavaScript program to converts a specified number to an array of digits. 



// 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values. 



// 9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations. 



// 10. Write a JavaScript program to extract out the values at the specified indexes from a specified array. 



// 11. Write a JavaScript program to generate a random hexadecimal color code. 



// 12. Write a JavaScript program to removes non-printable ASCII characters from a given string. 



// 13. Write a JavaScript program to convert the length of a given string in bytes. 



// 14. Write a JavaScript program to replace the names of multiple object keys with the values provided. 



// 15. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set comparing rule. 



// 16. Write a JavaScript function that returns true if the provided predicate function returns true for all elements 
//in a collection, false otherwise. 



// 17. Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, 
//the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group. 



// 18. Write a JavaScript program to remove specified elements from the left of a given array of elements. 



// 19. Write a JavaScript program to remove specified elements from the right of a given array of elements. 



// 20. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code. 



// 21. Write a JavaScript program to get every nth element in a given array. 



// 22. Write a JavaScript program to filter out the non-unique values in an array. 



// 23. Write a JavaScript program to filter out the non-unique values in an array, based on a provided comparator function. 



// 24. Write a JavaScript program to dcapitalize the first letter of a string. 



// 25. Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays. 



// 26. Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no. 



// 27. Write a JavaScript program to find every element that exists in any of the two given arrays once, using a provided comparator function. 



// 28. Write a JavaScript program to measure the time taken by a function to execute. 



// 29. Write a JavaScript program to convert a value to a safe integer. 



// 30. Write a JavaScript program to filter out the element(s) of a given array, that have one of the specified values. 



// 31. Write a JavaScript program to find all elements in a given array except for the first one. Return the whole array if the array's length is 1. 



// 32. Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function. 



// 33. Write a JavaScript program to get a random number in the specified range. 



// 34. Write a JavaScript program to get a random integer in the specified range. 



// 35. Write a JavaScript program to get an array of given n random integers in the specified range. 



// 36. Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results. 



// 37. Write a JavaScript program to get a sorted array of objects ordered by properties and orders. 



// 38. Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length. 



// 39. Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object. 



// 40. Write a JavaScript program to create an array of key-value pair arrays from a given object. 



// 41. Write a JavaScript program to create an object from the given key-value pairs. 



// 42. Write a JavaScript program to get a customized coalesce function that returns the first argument that 
//returns true from the provided argument validation function. 



// 43. Write a JavaScript program to change function that accepts an array into a variadic function. 



// 44. Write a JavaScript program to remove falsey values from a given array. 



// 45. Write a JavaScript program to split values into two groups, if an element in filter is truthy, 
//the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group. 



// 46. Write a JavaScript program to curry (curries) a function. 



// 47. Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent. 



// 48. Write a JavaScript program to get an array of function property names from own (and optionally inherited) enumerable properties of an object. 



// 49. Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object. 



// 50. Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.



//51


