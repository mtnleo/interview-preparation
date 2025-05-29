// 2704. To Be Or Not To Be

function expect(val) {
    return {
        toBe: (secondVal) => {
            if(val === secondVal) {
                return true;
            }
            else {
                throw new Error("Not equal");
            }
        },
        notToBe: (secondVal) => {
            if(val !== secondVal) {
                return true;
            }
            else {
                throw new Error("Equal");
            }
        }
    }
}
/*
console.log("First expression: ", expect(5).toBe(5)); // True
console.log("Second expression: ", expect("asd").toBe("asd")); // True
console.log("Third expression: ", expect(10).toBe("asd")); // Err
console.log("First expression: ", expect(5).toBe(null)); // Err
*/

// 2665. Counter II

function createCounter(init) {
    let value = init;
    const originalInit = init;
    return {
        increment: () => {
            value += 1;
            return value;
        },
        decrement: () => {
            value -= 1;
            return value;
        },
        reset: () => {
            value = originalInit;
            return value;
        }
    }
}

// let value = createCounter(5)
// console.log(value.increment())
// console.log(value.increment()) 
// console.log(value.increment())
// console.log(value.decrement())
// console.log(value.reset())

// 2635. Apply Transform Over Each Element in Array
// Learned quite a bit with this one

let map = function(arr, fn) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }

    return newArr;
}
console.log(map([1, 2, 3], (el) => {
    return el += 1;
}));

// 2634. Filter Elements from Array

var filter = function(arr, fn) {
    filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

// 1. Double all numbers
// Given an array of numbers, return a new array with each number multiplied by 2.
// Example: [1, 2, 3] → [2, 4, 6]

const arr = [1, 2, 3];
// console.log("Original array: ", arr);
// console.log("Modified array: ", arr.map((element) => {
//     return element * 2;
// }));


// 2. Keep only even numbers
// Given an array of integers, return a new array with only the even numbers.
// Example: [1, 2, 3, 4, 5] → [2, 4]

const arr2 = [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 14, 19];
// console.log("Original array: ", arr2);
// console.log("Even numbers from the array: ", arr2.filter((element) => {
//     return element % 2 === 0;
// }));

// 3. Capitalize names
// Given an array of lowercase names, return a new array with each name capitalized (first letter uppercase).
// Example: ["alice", "bob"] → ["Alice", "Bob"]

const arr3 = ["alice", "bob", "trudy"];
// console.log("Original array: ", arr3);
// console.log("Modified array: ", arr3.map((element) => {
//     return element.charAt(0).toUpperCase() + element.substring(1);
// }));


// 4. Sum of numbers
// Return the sum of all numbers in an array.
// Example: [5, 10, 15] → 30

const arr4 = [5, 10, 15];
// console.log("Original array: ", arr4);
// console.log("Modified array: ", arr4.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }));


// 5. Get names of adults
// Given an array of people objects
// Return an array with the names of people who are 18 or older.
// Expected: ["Jane", "Jim"]

const peopleArray = [
  { name: "John", age: 17 },
  { name: "Jane", age: 21 },
  { name: "Jim", age: 18 }
]

// console.log("Original array: ", peopleArray);
// console.log("Modified array: ", peopleArray.filter((element) => {
//     return element.age >= 18;
// }));


// 7. Count how many times a value appears
// Given an array of strings, return an object where the keys are the strings and the values are the number of times they appear.
// Example: ["apple", "banana", "apple"] → { apple: 2, banana: 1 }

const arr5 = ["apple", "banana", "apple", "pear", "apple", "banana"]
console.log("Original array: ", arr5);
let createObj = (arr5) => {
    const obj = {};
    for(let i = 0; i < arr5.length; i++) {
        if(obj[arr5[i]] === undefined) {
            obj[arr5[i]] = 1;
        } else {
            obj[arr5[i]] = obj[arr5[i]] + 1;
        }
    }
    return obj;}
let obj = createObj(arr5);
// console.log("Modified array: ", obj);
// console.log("Modified array: ", arr5.reduce((acc, curr) => {
//     if(obj[acc[curr]] === undefined) {
//             acc[curr] = 1;
//         } else {
//             acc[curr] = acc[curr] + 1;
//         }
// }, {}));



// 8. Flatten a nested array
// Given a 2D array (e.g. [[1, 2], [3, 4]]), return a flattened version (e.g. [1, 2, 3, 4]).



// Find the longest word
// Given an array of words, return the word with the most characters.
// Example: ["cat", "giraffe", "dog"] → "giraffe"

const arr6 = ["cat", "giraffe", "dog", "octopus", "the longest word", "d"];
console.log("Original array: ", arr6);
console.log("Longest word: ", arr6.reduce((acc, curr) => {
    if (curr.length > acc.length) {
        return curr;
    }
    else {
        return acc;
    }
}, ""));


// Format numbers with currency
// Given an array of numbers, return a new array with each number formatted as a dollar string.
// Example: [5, 10] → ["$5.00", "$10.00"]

const arr7 = [5, 10, 320, 20, 103, 129, 100000];
console.log("Original array: ", arr7)
console.log("Modified array: ", arr7.map((element) => {
    return `$${element}.00`;
}))

// Remove falsy values
// Given an array, return a new array with only truthy values (remove false, 0, null, undefined, "", NaN).
// Example: [0, "hello", false, 42, "", null] → ["hello", 42]

// FizzBuzz!
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0) {
            console.log("Fizz");
        }
        else if(i % 5 === 0) {
            console.log("Buzz");
        }
    }
}

// fizzbuzz();