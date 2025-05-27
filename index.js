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