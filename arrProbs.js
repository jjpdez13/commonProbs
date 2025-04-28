/************************************************ PROBLEM 1 ***********************************************/

// Two Sum: Find two numbers in an array that add up to a target number.
// Written and explained for my son — and for any kid (or person) learning coding for the first time.

/*
const arr = [1, 2, 3, 4, 5];
This makes an array called "arr" with 5 numbers inside it.
'const' means it won't change completely later. (We can't reassign 'arr' to a different array.)
'=' means "set this name equal to" this value.
[ ] (square brackets) mean "this is an array" in JavaScript.
Commas ',' separate each item inside the array.
The semicolon ';' means "this line is finished."
*/

const arr = [1, 2, 3, 4, 5];

/*
const twoSum = (arr, target) => { ... }
This makes a machine (called a "function") named "twoSum".
You give it two things:
- an array of numbers (arr)
- a target number (target)
The machine will try to find two numbers from the array that add up exactly to the target.
*/

const twoSum = (arr, target) => {
    const seen = new Set(); 
    // 'seen' is a backpack where we store numbers we've already looked at.
    // A Set is a special type of container that does not allow duplicate numbers.

    for (const num of arr) {
        // For every number (num) inside the array (arr), do something:

        const complement = target - num;
        // "Complement" is the number we would still need to reach the target.
        // Example: if the target is 8 and num is 3, we still need 5 (because 3 + 5 = 8).

        if (seen.has(complement)) {
            // If we already put the complement number into our backpack,
            // it means we found two numbers that add up to the target.

            return [complement, num];
            // Return these two numbers inside an array [ ].
        }

        seen.add(num);
        // If we didn't find it yet, add this number into the backpack (seen) and keep going.
    }

    return null;
    // If we checked all numbers and found nothing, return null.
    // "null" means: we didn't find an answer.
};

// Testing it out!
// These lines will show what happens when we run the machine with different targets.

console.log(twoSum(arr, 8)); 
// Output: [3, 5] (because 3 + 5 = 8)

console.log(twoSum(arr, 10)); 
// Output: null (because no two numbers add up to 10)

/*
HOW TO TEST THIS YOURSELF:
- Open a terminal (the black/white box where you can type commands but I prefer "Warp" terminal).
- Go into the folder where this file is saved.
- Type: node arrProbs.js
- Press ENTER.
- You will see the results printed!

('node' tells the computer to run JavaScript files outside the browser (website/webpage).)
*/

/* Time Complexity:
O(n) - "n" means the number of items in the array.
We only look at each number one time by looping through the array once.

Why it matters:
- If the array gets very very big (like 1 million numbers),
- O(n) tells us that our machine will still finish quickly, not get stuck.
*/

/* Space Complexity:
O(n) - "n" again means the number of items in the array.
We might have to store every number in our "seen" backpack if no match is found early.

Why it matters:
- It shows that as the array gets bigger,
- The memory our machine uses grows at the same pace.
*/

/************************************************ PROBLEM 2 ***********************************************/

// Two Sum again but using double loops (a simpler but slower way).
// Written and explained for my son — and for any kid (or person) learning coding for the first time.

/*
const twoSumtwo = (arr, target) => { ... }
This makes a machine (called a "function") named "twoSumtwo".
You give it two things:
- an array of numbers (arr)
- a target number (target)
The machine will try every possible pair of numbers and see if they add up to the target.
*/

const twoSumtwo = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        // Start at the first number (i = 0) and go through the whole array one by one.
        // 'i' keeps track of where we are in the array.

        for (let j = i + 1; j < arr.length; j++) {
            // For each number 'i', start a second number 'j' that is one step ahead.
            // This checks every possible pair (i, j) without checking the same pair twice.

            if (arr[i] + arr[j] === target) {
                // If the two numbers add up exactly to the target...

                return [arr[i], arr[j]];
                // ...return the two numbers inside a new array.
            }
        }
    }

    return null;
    // If we finish checking all pairs and find nothing, return null.
};

// Testing it out!

console.log(twoSumtwo(arr, 7)); 
// Output: [2, 5] (because 2 + 5 = 7)

console.log(twoSumtwo(arr, 3)); 
// Output: [1, 2] (because 1 + 2 = 3)

/*
HOW TO TEST THIS YOURSELF:
- Open a terminal (I prefer "Warp" terminal).
- Go into the folder where this file is saved.
- Type: node arrProbs.js
- Press ENTER.
- You will see the results printed!

('node' lets you run JavaScript code outside of a website, straight from your computer.)
*/

/* Time Complexity:
O(n²) - "n" means the number of items in the array.
We check every possible pair of numbers.
- First loop goes through n numbers.
- For each number, second loop checks about n more numbers.
- So n times n = n².

Why it matters:
- If the array gets really big (like 1000 numbers), the number of checks grows even bigger (almost 1 million checks).
- It's much slower than O(n).
*/

/* Space Complexity:
O(1) - We only use a few extra variables ('i', 'j'), not a new array.
Memory use stays small no matter how big the array is.

Why it matters:
- Even with a huge array, we won't run out of memory.
- Only the time (speed) is a problem, not the space.
*/

/************************************************ PROBLEM 3 ***********************************************/

// Reverse Array: Write a function to reverse an array in-place (no new array created).
// Written and explained for my son — and for any kid (or person) learning coding for the first time.

/*
const revArr = (arr) => { ... }
This creates a machine (function) called "revArr".
You give it one thing:
- an array (arr)
The machine will reverse the array — meaning it puts the last item first, second last second, and so on — without making a new array.
*/

const revArr = (arr) => {
    let left = 0;
    // 'left' is a number starting at the beginning of the array (index 0).

    let right = arr.length - 1;
    // 'right' is a number starting at the end of the array (last index).

    while (left < right) {
        // Keep looping as long as left is before right.

        const temp = arr[left];
        // Save the left item in a temporary place called 'temp'.

        arr[left] = arr[right];
        // Move the right item into the left position.

        arr[right] = temp;
        // Move the saved left item into the right position.

        left++;
        // Move 'left' one step to the right.

        right--;
        // Move 'right' one step to the left.
    }

    return arr;
    // After all the swaps are done, return the array (which is now reversed).
};

// Testing it out!

console.log(revArr([1, 2, 3, 4, 5])); 
// Output: [5, 4, 3, 2, 1]

console.log(revArr(['a', 'b', 'c', 'd'])); 
// Output: ['d', 'c', 'b', 'a']

/*
HOW TO TEST THIS YOURSELF:
- Open a terminal (I prefer "Warp" terminal).
- Go into the folder where this file is saved.
- Type: node arrProbs.js
- Press ENTER.
- You will see the reversed arrays printed!

('node' lets you run JavaScript files outside of a website.)
*/

/* Time Complexity:
O(n) - "n" means the number of items in the array.
We touch (swap) each item at most once while moving toward the center.

Why it matters:
- If the array has 1 million items, we still only go through it one time.
- Very efficient for large arrays.
*/

/* Space Complexity:
O(1) - We do not make a new array.
We only use a few extra variables (left, right, temp).

Why it matters:
- Memory stays small no matter how big the array is.
- Great for saving space and avoiding crashes on big arrays.
*/

/************************************************ PROBLEM 4 ***********************************************/

// Reverse Array again but using math with array indexes.
// Written and explained for my son — and for any kid (or person) learning coding for the first time.

/*
const revArrTwo = (arr) => { ... }
This creates a machine (function) called "revArrTwo".
You give it one thing:
- an array (arr)
The machine will reverse the array by swapping numbers using math to find matching positions.
No new array is created — everything happens inside the same array.
*/

const revArrTwo = (arr) => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        // Start a loop where 'i' moves from the beginning toward the middle.
        // Math.floor makes sure we stop exactly halfway (no swapping the middle item twice if array length is odd).

        const temp = arr[i];
        // Save the item at position 'i' temporarily.

        arr[i] = arr[arr.length - 1 - i];
        // Move the item from the matching position at the end into position 'i'.

        arr[arr.length - 1 - i] = temp;
        // Move the saved item (from position 'i') into the matching end position.
    }

    return arr;
    // After all swaps are done, return the array (which is now reversed).
};

// Testing it out!

console.log(revArrTwo([1, 2, 3, 4, 5])); 
// Output: [5, 4, 3, 2, 1]

console.log(revArrTwo(['a', 'b', 'c', 'd'])); 
// Output: ['d', 'c', 'b', 'a']

/*
HOW TO TEST THIS YOURSELF:
- Open a terminal (I prefer "Warp" terminal).
- Go into the folder where this file is saved.
- Type: node arrProbs.js
- Press ENTER.
- You will see the reversed arrays printed!

('node' lets you run JavaScript code outside of a website.)
*/

/* Time Complexity:
O(n) - "n" means the number of items in the array.
Even though we only loop through half of the array, Big O ignores constants.
So it is still O(n).

Why it matters:
- We can reverse huge arrays quickly because we only touch each item once.
- Very efficient for big arrays.
*/

/* Space Complexity:
O(1) - We do not create a new array.
We only use a few extra variables ('i' and 'temp').

Why it matters:
- Memory stays very small, even if the array has millions of items.
- No wasted space — very clean solution.
*/

/************************************************ PROBLEM 5 ***********************************************/

// Maximum Subarray: Find the contiguous subarray within an array that has the largest sum.
// Written and explained for my son — and for any kid (or person) learning coding for the first time.

/*
const maxSubArr = (arr) => { ... }
This creates a machine (function) called "maxSubArr".
You give it one thing:
- an array (arr)
The machine will find the part of the array (a subarray) where the numbers add up to the biggest total.
It uses a smart method called "Kadane's Algorithm" to do it very fast.
*/

const maxSubArr = (arr) => {
    let maxSum = arr[0];
    // Start by saying the biggest sum we have seen is the very first number.

    let currSum = arr[0];
    // Start by saying the current running total is also the first number.

    for (let i = 1; i < arr.length; i++) {
        // Start looping through the array, beginning with the second number.

        currSum = Math.max(arr[i], currSum + arr[i]);
        // Decide:
        // Should we start a brand new sum at arr[i]?
        // Or should we keep adding arr[i] to the current sum?
        // Pick whichever choice gives a bigger number.

        maxSum = Math.max(maxSum, currSum);
        // Update the biggest sum we have ever seen if the new current sum is bigger.
    }

    return maxSum;
    // After we finish the loop, return the biggest sum we found.
};

// Testing it out!

console.log(maxSubArr([-2,1,-3,4,-1,2,1,-5,4])); 
// Output: 6 (because [4,-1,2,1] adds up to 6)

console.log(maxSubArr([5,4,-1,7,8])); 
// Output: 23 (because [5,4,-1,7,8] adds up to 23)

/*
HOW TO TEST THIS YOURSELF:
- Open a terminal (I prefer "Warp" terminal).
- Go into the folder where this file is saved.
- Type: node arrProbs.js
- Press ENTER.
- You will see the biggest sums printed!

('node' lets you run JavaScript code outside of a website.)
*/

/* Time Complexity:
O(n) - "n" means the number of items in the array.
We go through the array one time, touching each item exactly once.

Why it matters:
- Even for huge arrays (like 1 million numbers), it still finishes quickly.
- Very efficient!
*/

/* Space Complexity:
O(1) - We only use a few extra variables (currSum, maxSum).
We do not create a new array.

Why it matters:
- Memory stays very small.
- No matter how big the input array is, memory use stays the same.
*/

/************************************************ PROBLEM 6 ***********************************************/

// Maximum Subarray again but trying every possible subarray (a simpler but much slower way).
// Written and explained for my son — and for any kid (or person) learning coding for the first time.

/*
const maxSubArrTwo = (arr) => { ... }
This creates a machine (function) called "maxSubArrTwo".
You give it one thing:
- an array (arr)
The machine will look at every possible part (subarray) and find the one that adds up to the biggest number.
This is a very simple method, but much slower because it checks everything.
*/

const maxSubArrTwo = (arr) => {
    let maxSum = arr[0];
    // Start by saying the biggest sum we have seen is the very first number.

    for (let i = 0; i < arr.length; i++) {
        // First loop: Pick a starting point for the subarray.

        let currSum = 0;
        // Start a running total at 0 for this starting point.

        for (let j = i; j < arr.length; j++) {
            // Second loop: Keep adding numbers starting from i.

            currSum += arr[j];
            // Add the next number to the running total.

            maxSum = Math.max(maxSum, currSum);
            // Update the biggest sum if the new running total is bigger.
        }
    }

    return maxSum;
    // After checking all subarrays, return the biggest sum we found.
};

// Testing it out!

console.log(maxSubArrTwo([-2,1,-3,4,-1,2,1,-5,4])); 
// Output: 6 (because [4,-1,2,1] adds up to 6)

console.log(maxSubArrTwo([5,4,-1,7,8])); 
// Output: 23 (because [5,4,-1,7,8] adds up to 23)

/*
HOW TO TEST THIS YOURSELF:
- Open a terminal (I prefer "Warp" terminal).
- Go into the folder where this file is saved.
- Type: node arrProbs.js
- Press ENTER.
- You will see the biggest sums printed!

('node' lets you run JavaScript code outside of a website.)
*/

/* Time Complexity:
O(n²) - "n" means the number of items in the array.
We have two loops:
- The first loop picks a starting point.
- The second loop adds up numbers from there.
This means lots and lots of checks: n times n = n².

Why it matters:
- If the array gets very big (like 1000 numbers), this will become very slow.
- It could need almost 1 million checks!
*/

/* Space Complexity:
O(1) - We only use a few extra number variables (currSum, maxSum).
We do not create a new array.

Why it matters:
- Even though it’s slow in time, it’s still very small in memory use.
- Memory is not the problem, only speed.
*/

/************************************************ PROBLEM 7 ***********************************************/

// Reverse Linked List: Reverse a singly linked list.
// Written and explained for my son — and for any kid (or person) learning coding for the first time.

/*
class ListNode { ... }
This creates a blueprint for something called a "node".
A node is one piece of a linked list — it holds:
- a value (val)
- a pointer (next) that tells it where the next node is.
*/

class ListNode {
    constructor(val) {
        this.val = val;
        // 'val' is the value or number that the node holds.

        this.next = null;
        // 'next' is where the next node lives.
        // Right now it is set to null (meaning it doesn't point anywhere yet).
    }
}

/*
const reverseLinkedList = (head) => { ... }
This creates a machine (function) called "reverseLinkedList".
You give it:
- the first node in the linked list (called 'head')
The machine will reverse the linked list so that the last node becomes the first.
*/

const reverseLinkedList = (head) => {
    let prev = null;
    // 'prev' will follow behind and remember the previous node. Start with nothing (null).

    let current = head;
    // 'current' starts at the very beginning (head) of the list.

    while (current !== null) {
        // Keep going until there are no more nodes (current becomes null).

        const nextNode = current.next;
        // Save the next node before we break the link.

        current.next = prev;
        // Make the current node point backward instead of forward.

        prev = current;
        // Move 'prev' forward to where 'current' is now.

        current = nextNode;
        // Move 'current' forward to the saved nextNode.
    }

    return prev;
    // When done, 'prev' will be the new head (the start of the reversed list).
};

/*
Helper function: createLinkedList(arr)
Turns an array into a linked list so we can test easily.
Each item in the array becomes a node.
*/

const createLinkedList = (arr) => {
    let head = new ListNode(arr[0]);
    // Make the first node with the first item in the array.

    let current = head;
    // Start from the head and build forward.

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        // Create a new node and link it to the current one.

        current = current.next;
        // Move 'current' forward to the new node.
    }

    return head;
    // Return the head (the start of the new linked list).
};

/*
Helper function: printLinkedList(head)
Turns a linked list back into a simple array to see it easier when we print it.
*/

const printLinkedList = (head) => {
    const result = [];
    // Start with an empty array.

    while (head) {
        result.push(head.val);
        // Add the value of each node to the array.

        head = head.next;
        // Move to the next node.
    }

    return result;
    // Return the full array of values.
};

// Testing it out!

const list1 = createLinkedList([1, 2, 3, 4, 5]);
const reversedList1 = reverseLinkedList(list1);
console.log(printLinkedList(reversedList1));
// Output: [5, 4, 3, 2, 1]

const list2 = createLinkedList([7, 14, 21]);
const reversedList2 = reverseLinkedList(list2);
console.log(printLinkedList(reversedList2));
// Output: [21, 14, 7]

/*
HOW TO TEST THIS YOURSELF:
- Open a terminal (I prefer "Warp" terminal).
- Go into the folder where this file is saved.
- Type: node arrProbs.js
- Press ENTER.
- You will see the reversed linked lists printed as arrays!

('node' lets you run JavaScript files outside of a website.)
*/

/* Time Complexity:
O(n) - "n" means the number of nodes in the linked list.
We touch each node exactly once while reversing the links.

Why it matters:
- Even if the list has 1 million nodes, it only takes 1 million simple steps.
- Very efficient!
*/

/* Space Complexity:
O(1) - We only use a few extra pointers (prev, current, nextNode).
We do not create a new linked list — just rearrange the one we already have.

Why it matters:
- Memory stays very small.
- No matter how big the list is, memory use stays the same.
*/