// 1 - Problem - Reverse a String

// Write a function that takes a string as input and returns the string reversed.

// function reverseString(str) {
//     return str.split("").reverse().join("")
// }

// console.log(reverseString("Hello"))

// 2 - Problem - Find the Largest Number in an Array

// Write a function that takes an array of numbers as input and returns the largest number in the array.



// Given an array of integers, return indices of the two numbers such that they add up to a specific target

// input = [1, 2, 3, 4, 5, 6] target = 10

// // let twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] == target){
//                 return [i, j]
//             }
//         }
//     }
// }

// console.log(twoSum([1, 2, 3, 4, 5, 6],10))

// Find Second Largest Number In An Array

// function nextBiggest(arr) {
//     // Convert strings to numbers and remove duplicates
//     const nums = [...new Set(arr.map(Number))];
    
//     if (nums.length < 2) return undefined; // or handle the edge case as needed
    
//     // Sort in descending order and return the second element
//     nums.sort((a, b) => b - a);
//     return nums[1];
//   }
  
//   const arr = ['20','120','111','215','54','78'];
//   console.log(nextBiggest(arr)); // Output: 120

// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) {
//       return false;
//     }

//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
  
//     return sortedStr1 === sortedStr2;
//   }
//   console.log(areAnagrams("listen", "silent"));
//   console.log(areAnagrams("dome", "mode"));
    
//   Pseudocode

// Define a function called areAnagrams to hold two strings
// Check the length of each string. If string lengths are not equal, return false, otherwise execute rest of code
// Split the strings into individual arrays, then sort alphabetically, then join array into a string
// Compare the sorted strings
// Print the function to the console, and the output will define true or false


// Write a function that merges two sorted arrays into a single sorted array.



const array1 = [1, 2, 3, 4, 5];
const array2 = ["a", "b", "c", "d"];

function mergeArrays(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
}

const mergedArray = mergeArrays(array1, array2); 
console.log(mergedArray);