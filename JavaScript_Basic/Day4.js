// 101. Write a JavaScript program to check whether a given string contains only Latin letters and 
//no two uppercase and no two lowercase letters are in adjacent positions. 

// const  test_string = input_str => {

// const is_lower_case = symbol => {
//     if ('a' <= symbol && symbol <= 'z') {
//       return true;
//     }
//     return false;
// }

// const is_upper_case = symbol => {
//     if ('A' <= symbol && symbol <= 'Z') {
//       return true;
//     }
//     return false;
// }

// const is_first_char_lower = is_lower_case(input_str[0]);
// const is_first_char_upper = is_upper_case(input_str[0]);

// for (let i = 1; i < input_str.length; i++) {
//     if (i % 2) {
//       if (is_lower_case(input_str[i]) === is_first_char_lower ||
//         is_upper_case(input_str[i]) === is_first_char_upper) {
//         return false;
//       }
//     } else {
//       if (is_lower_case(input_str[i]) !== is_first_char_lower ||
//         is_upper_case(input_str[i]) !== is_first_char_upper) {
//         return false;
//       }
//     }
//   }
//   return true
// }

// console.log(test_string("hGf"))




 // 102. Write a JavaScript program to find the number of inversions of a given array of integers. 
 // Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

// const number_of_InversionsNaive = arr => {
//     let ctr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) 
//               ctr++;
//         }
//     }
//     return ctr;
// }

// console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));   
// console.log(number_of_InversionsNaive([1, 5, 4, 3]));   
// console.log(number_of_InversionsNaive([10, 30, 20, -10])); 


// 103. Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number. 
const  digit_delete = num => {
    let result = 0;
    const num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (let index_num = 0; index_num < num_digits.length; index_num++) {
        let n = 0;
        for (let i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + num_digits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

console.log(digit_delete(1345));

// 104. Write a JavaScript program to find two elements of the array such that their absolute difference is 
//not greater than a given integer but is as close to the said integer. 

function different_values(ara, n) {
    var max_val = -1;
    for (var i = 0; i < ara.length; i++) {
        for (var j = i + 1; j < ara.length; j++) {
            var x = Math.abs(ara[i] - ara[j]);
            if (x <= n) {
                max_val = Math.max(max_val, x)
            }
        }
    }
    return max_val
}
console.log(different_values([12, 10, 33, 34], 10));
console.log(different_values([12, 10, 33, 34], 24));
console.log(different_values([12, 10, 33, 44], 40));


// 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits 
//until it convert to a single digit number. 

const digit_to_one =num => {

    const digitSum = num => {

        let digit_sum = 0;
        while (num) {
            digit_sum += num % 10;
            num = Math.floor(num / 10);
        }

        return digit_sum;
    };

    let result = 0;

    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    }

    return result;
}

console.log(digit_to_one(123))
console.log(digit_to_one(156))


// 106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result. 
const divide_digit = (num, d)=> {
    if (d==1)
      return num;
    else
    {
   while (num % d === 0) {
     num /= d;
     }
 return num;
    }
}
console.log(divide_digit(-12, 2))
console.log(divide_digit(13, 2))
console.log(divide_digit(13, 1))



// 107. Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of integers 
//such that one element in the pair is divisible by the other one. 
// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)

const arr_pairs = arr => {
    var result = 0;
    for (var i = 0; i < arr.length; i++)
        {
        for (var j = i + 1; j < arr.length; j++)
            {
              if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
                {
                result++;
                }
         }
      }
    return result;
}
console.log(arr_pairs([1,2,3]))
console.log(arr_pairs([2,4,6]))
console.log(arr_pairs([2,4,16]))



// 108. Write a JavaScript program to create the dot products of two given 3D vectors. 
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

const dot_product =(vector1, vector2) => {
    let result = 0;
    for (let i = 0; i < 3; i++) {
      result += vector1[i] * vector2[i];
    }
    return result;
  }
  console.log(dot_product([1,2,3], [1,2,3]))
  console.log(dot_product([2,4,6], [2,4,6]))
  console.log(dot_product([1,1,1], [0,1,-1]))


// 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer. 

const  sort_prime = (num) => {
    const prime_num1 = [];
    const prime_num2 = [];
    for (var i = 0; i <= num; i++) {
      prime_num2.push(true);
    }
    for (var i = 2; i <= num; i++) {
      if (prime_num2[i]) {
        prime_num1.push(i);
        for (let j = 1; i * j <= num; j++) {
          prime_num2[i * j] = false;
        }
      }
    }
  
    return prime_num1;
  }
  
  console.log(sort_prime(5))
  console.log(sort_prime(11))
  console.log(sort_prime(19))

// 110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number. 
const find_numbers = (arr_num, num)=> {
    let result = 0;
    for (let i = 0; i < arr_num.length; i++)
    {
        if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
            result++;
        }
        if (arr_num[i] === num) 
        {
            return result;
        }
    }
    return -1;
}

console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
console.log(find_numbers([1,3,5,6,7,8], 6))

//02.11.2022 = Tuesday

// 111. Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one. 

const check_if_equal = (num1,num2,num3)=> {
    if(num1 === num2 || num1 === num3 || num2 === num3) return true
        else 
        {return false}
}

console.log(check_if_equal(1,2,4))
// 112. Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number. 
const  trailing_zeros_factorial = n =>  {
    let result = 0;
    for (let i = 5; i <= n; i += 5) {
        let num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

console.log(trailing_zeros_factorial(8))
console.log(trailing_zeros_factorial(9))
console.log(trailing_zeros_factorial(10))


// 113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer. 

const calculate_sum = n => {
    sum = Math.floor(n + n/2 + n/4 + n/8)
    return sum
}

console.log(calculate_sum(26))

function int_sum(num) {
    let s_sum = 0;
    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
    }
    return s_sum;
}
console.log(int_sum(26))

console.log(Math.floor(1/2))
// 114. Write a JavaScript program to check whether a given string represents a correct sentence or not. 
//A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.)

const is_correct_Sentence = input_str => {
    var first_char = input_str[0];
    var last_char = input_str[input_str.length - 1];
    return /[A-Z]/.test(first_char) && last_char == "."
}
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));

// 115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. 
// In linear algebra, a diagonal matrix is a matrix in which the entries outside 
// the main diagonal are all zero (the diagonal from the upper left to the lower right). 
// Example:
// [1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
// [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false


const is_diagonal_matrix = user_matrix => {
    for (let i = 0; i < user_matrix.length; i++) {
        for (let j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0) 
              return false;
        }
    }
    return true
}

console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 5] ]));
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));


// 116. Write a JavaScript program to find all the possible options to replace the hash in a string 
//(Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. 
// For a string "2*0", the output should be : ["210", "240", "270"]




const hashThree = (str) => {
    const left = '0'. charCodeAt();
    const right = '9'.charCodeAt();
    digitSum = 0;
    stringArray = str.split('')
    maskedData = []
    hash = -1
    for (let i = 0; i< stringArray.length; i++)
    if (left <= stringArray[i].charCodeAt() && right >= stringArray[i].charCodeAt()){
        digitSum += stringArray[i].charCodeAt() - left
    }
    else {
        hash = i
    }

for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      stringArray[hash] = String.fromCharCode(left + i);
      maskedData.push(stringArray.join(''));
    }
  }

  return maskedData  ;
}

console.log(hashThree("3#0"))

const b= (digitSum + 1) % 3

const c = String.fromCharCode(48)

console.log(c)

const r = "".charCodeAt()
console.log(r)

// 117. Write a JavaScript program to check whether a given matrix is an identity matrix. 
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, 
//of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false

const identityMatrix = (U)=> {
    for(let i = 0; i < U.length; i++){
        for ( let j = 0; j< U.length; j++){
            if( (i===j && U[i][j]!==1)  || (i!==j && U[i][j] !==0)  ){
                return false
            }
        }
    }
    return true
}

console.log(identityMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))

// 118. Write a JavaScript program to check whether a given number is in a given range. 

const rangeFunction = (num, start,end)=> num > start && num < end;

console.log(rangeFunction(3,4,5))

// 119. Write a JavaScript program to check whether a given integer has an increasing digits sequence. 

const sequenceDigit = (num) => {
    str = num.toString()
    array = str.split('')
    for(let i = 0; i < array.length; i++){
        if(array[i]> array[i+1]) return false
    }
    return true
}

console.log(sequenceDigit(645))

// 120. Write a JavaScript program to check whether a point lies strictly inside a given circle. 
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)

const isInsideCircle = (pointX, pointY, radius,centerX, centerY) => Math.sqrt(Math.pow(centerX - pointX,2)+ Math.pow(centerY-pointY,2)) < radius

console.log(isInsideCircle(3,2,3,6,2))
// 121. Write a JavaScript program to check whether a given matrix is lower triangular or not. 
// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

const isTriangular = (matrix) => {
    for(let i = 0; i< matrix.length; i++){
        for(let j = i+1 ; j < matrix.length; j++){
            if(i<j && matrix[i][j]!==0)
            return false
        }
    }
    return true
}

console.log(isTriangular(
    [
        [1,0,0,0],
        [1,1,0,0],
        [2,3,2,0],
        [1,2,4,4]
    ]
))


// 122. Write a JavaScript program to check whether a given array of integers represents either a 
//strictly increasing or a strictly decreasing sequence. 

const sequenceIncDec = (array) => {
    const num_direction = array[1] - array[0];
    for (var i = 0; i < array.length - 1; i++) {
        if (num_direction * (array[i + 1] - array[i]) <= 0) {
            return false;
        }
    }
    return true;
}

console.log(sequenceIncDec([7,6,5,9]))

// 123. Write a JavaScript program to find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer. 

const isPermutation = (array, n) => {
    for (let i = 0; i< n; i++){
        if(!(array.includes(i+1)))
        return false
    }
    return true
}

console.log(isPermutation([1,2,3,9,5,6,7],7))
// 124. Write a JavaScript program to create the value of NOR of two given booleans. 
// Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
// Sample Example:
// For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.


// 125. Write a JavaScript program to find the longest string from a given array. 


// 126. Write a JavaScript program to get the largest even number from an array of integers. 


// 127. Write a JavaScript program to reverse the order of the bits in a given integer. 
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87


// 128. Write a JavaScript program to find the smallest round number that is not less than a given value. 
// Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.


// 129. Write a JavaScript program to find the smallest prime number strictly greater than a given number. 


// 130. Write a JavaScript program to find the number of even digits in a given integer. 


// 131. Write a JavaScript program to create an array of prefix sums of the given array. 
// In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
// y0 = x0
// y1 = x0 + x1
// y2 = x0 + x1+ x2
// ...


// 132. Write a JavaScript program to find all distinct prime factors of a given integer. 


// 133. Write a JavaScript program to check whether a given fraction is proper or not. 
// Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.


// 134. Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a. 


// 135. Write a JavaScript program to remove all characters from a given string that appear more than once. 


// 136. Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character. 


// 137. Write a JavaScript program to test whether a given integer is greater than 15 return the given number, otherwise return 15. 


// 138. Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer. 


// 139. Write a JavaScript program to find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number.  
// Note: A round number is informally considered to be an integer that ends with one or more zeros.


// 140. Write a JavaScript program to check whether all the digits in a given number are the same or not.  


// 141. Write a JavaScript program to find the number of elements which presents in both of the given arrays.  


// 142. Write a JavaScript program to simplify a given absolute path for a file in Unix-style.  


// 143. Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.  
// Note: Do not change the order if the lengths of two string are same.


// 144. Write a JavaScript program to break an address of an url and put it's part into an array.  
// Note: url structure : ://.org[/] and there may be no part in the address.


// 145. Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.  


// 146. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.  


// 147. Write a JavaScript program to compute the sum of all digits that occur in a given string.  


// 148. Write a JavaScript program to swap two halves of a given array of integers of even length.  


// 149. Write a JavaScript program to change the capitalization of all letters in a given string.  


// 150. Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length`.