/************************************************ SORTING AND SEARCHING ************************************************/

/************************************************ MERGE SORT ***********************************************/

// Merge Sort: Divide and conquer sorting algorithm
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const merge = (left, right) => {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add leftovers
    return result.concat(left.slice(i)).concat(right.slice(j));
};

/************************************************ BINARY SEARCH ***********************************************/

// Binary Search: Find the index of a target in a sorted array
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1; // Not found
};

/************************************************ TESTING ************************************************/

console.log("Merge Sort Tests:");
console.log(mergeSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]
console.log(mergeSort([]));                 // []
console.log(mergeSort([10]));               // [10]

console.log("\nBinary Search Tests:");
const sortedArray = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(sortedArray, 4)); // 3
console.log(binarySearch(sortedArray, 7)); // 6
console.log(binarySearch(sortedArray, 0)); // -1

/*
HOW TO TEST:
- Save this file as sortNsearch.js
- Run in terminal: node sortNsearch.js
- Watch the printed outputs!
*/

/* Time Complexity:
Merge Sort → O(n log n)
Binary Search → O(log n)

Space Complexity:
Merge Sort → O(n) (because of new arrays)
Binary Search → O(1)
*/