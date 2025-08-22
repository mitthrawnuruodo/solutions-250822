"use strict";

/*
Array Exercises (Solutions)
Each task restates the prompt and prints results to the console.
*/

/* 1. Create an Array
   Make an array called `animals` with the values: "Dog", "Cat", "Elephant".
   Print the array to the console.
*/
console.log("1.");
const animals = ["Dog", "Cat", "Elephant"];
console.log(animals);

/* 2. Access by Index
   Print the first and last item of the `animals` array.
*/
console.log("2.");
console.log("First:", animals[0]);
console.log("Last:", animals[animals.length - 1]);

/* 3. Length Property
   Print how many items are in the `animals` array.
*/
console.log("3.");
console.log("Length:", animals.length);

/* 4. Push
   Add "Lion" to the end of the `animals` array.
   Print the array and the new length.
*/
console.log("4.");
const newLenAfterPush = animals.push("Lion");
console.log("New length:", newLenAfterPush);
console.log("Updated:", animals);

/* 5. Pop
   Remove the last element from the `animals` array and store it in a variable.
   Print the removed item and the updated array.
*/
console.log("5.");
const removedLast = animals.pop();
console.log("Removed:", removedLast);
console.log("Updated:", animals);

/* 6. Shift & Unshift
   Add "Monkey" to the beginning of the array.
   Then remove the first element and print it.
*/
console.log("6.");
animals.unshift("Monkey");
console.log("After unshift:", animals);
const removedFirst = animals.shift();
console.log("Removed first:", removedFirst);
console.log("Updated:", animals);

/* 7. includes & indexOf
   Check if "Cat" is in the array and print the result.
   Find the index of "Elephant" and print it.
*/
console.log("7.");
console.log("Has 'Cat'?", animals.includes("Cat"));
console.log("Index of 'Elephant':", animals.indexOf("Elephant"));

/* 8. slice
   Make a copy of the first 2 elements from the `animals` array.
   Print the new array.
*/
console.log("8.");
const firstTwo = animals.slice(0, 2);
console.log("First two:", firstTwo);
console.log("Original unchanged:", animals);

/* 9. splice (remove)
   Remove 1 element at index 1 from the `animals` array.
   Print what was removed and the updated array.
*/
console.log("9.");
const removedAt1 = animals.splice(1, 1);
console.log("Removed:", removedAt1);
console.log("Updated:", animals);

/* 10. join
   Join all elements of the array into a single string separated by " - ".
   Print the result.
*/
console.log("10.");
const joined = animals.join(" - ");
console.log("Joined:", joined);

/* LEVEL 2: */

/* 11. forEach
   Make an array of numbers: [2, 4, 6, 8].
   Use forEach to print "Number: X" for each value.
*/
console.log("11.");
const nums1 = [2, 4, 6, 8];
nums1.forEach((n) => console.log("Number:", n));

/* 12. map
   Use map on the same numbers array to make a new array where each number is doubled.
   Print the new array.
*/
console.log("12.");
const doubled = nums1.map((n) => n * 2);
console.log("Original:", nums1);
console.log("Doubled:", doubled);

/* 13. filter
   Use filter to create a new array containing only numbers greater than 5.
   Print the result.
*/
console.log("13.");
const greaterThan5 = nums1.filter((n) => n > 5);
console.log("Greater than 5:", greaterThan5);

/* 14. reduce
   Use reduce to add up all the numbers in [5, 10, 15, 20].
   Print the total.
*/
console.log("14.");
const nums2 = [5, 10, 15, 20];
const total = nums2.reduce((sum, n) => sum + n, 0);
console.log("Numbers:", nums2);
console.log("Total:", total);

/* 15. sort (numbers)
   Make an array: [25, 7, 100, 3].
   Sort the numbers in ascending order (smallest to largest).
   Print the sorted array.
*/
console.log("15.");
const toSort = [25, 7, 100, 3];
toSort.sort((a, b) => a - b);
console.log("Sorted ascending:", toSort);


/* Bonus: Extra (safe copy & combine) */
console.log("\n\nExtra: combine & copy");
const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Potato"];
const combined1 = fruits.concat(vegetables);
const combined2 = [...fruits, ...vegetables];
console.log("concat:", combined1);
console.log("spread:", combined2);

const original = ["A", "B", "C"];
const unsafeRef = original;     // same reference
const safeCopy1 = original.slice();
const safeCopy2 = [...original];

unsafeRef.push("D");
console.log("original after unsafeRef.push:", original); // mutated
safeCopy1.push("E");
console.log("safeCopy1:", safeCopy1, "| original:", original);
safeCopy2.push("F");
console.log("safeCopy2:", safeCopy2, "| original:", original);