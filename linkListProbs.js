/************************************************ REVERSE LINKED LIST ***********************************************/

// Reverse Linked List: Reverse a singly linked list.

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
- Type: node linkListProbs.js
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

/************************************************ DETECT CYCLE IN LINKED LIST ***********************************************/

// Detect Cycle in Linked List: Check if a linked list has a cycle.
// If it has a cycle, return the node where the cycle begins. If no cycle, return null.

/*
class ListNode { ... }
We reuse the same ListNode class as before.
*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/*
const detectCycle = (head) => { ... }
This creates a machine (function) called "detectCycle".
You give it:
- the first node in the linked list (head)
It will tell you:
- where the cycle starts (the node), OR
- null if there’s no cycle
*/

const detectCycle = (head) => {
    let slow = head;
    let fast = head;

    // First, check if there’s a cycle.
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // There’s a cycle! Now find where it starts.
            let pointer1 = head;
            let pointer2 = slow;

            while (pointer1 !== pointer2) {
                pointer1 = pointer1.next;
                pointer2 = pointer2.next;
            }

            return pointer1; // This is the start of the cycle.
        }
    }

    return null; // No cycle found.
};

/*
Helper function: createCycledLinkedList(arr, pos)
Creates a linked list with a cycle.
- arr: array of values.
- pos: index in the list where the cycle should connect (use -1 for no cycle).
*/

const createCycledLinkedList = (arr, pos) => {
    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    if (pos === 0) cycleNode = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
        if (i === pos) cycleNode = current;
    }

    if (cycleNode) current.next = cycleNode;

    return head;
};

// Testing it out!

const list3 = createCycledLinkedList([1], -1);
const cycleNode3 = detectCycle(list3);
console.log(cycleNode3 ? cycleNode3.val : null); // Output: null

/*
HOW TO TEST:
- Save this file.
- Run in terminal: node linkListProbs.js
- Watch the printed outputs!
*/

/* Time Complexity:
O(n) - We may loop through the list twice, but that’s still proportional to the number of nodes.
*/

/* Space Complexity:
O(1) - We only use pointers (slow, fast, pointer1, pointer2) — no extra space.
*/

/************************************************ MERGE TWO SORTED LISTS ***********************************************/

// Merge Two Sorted Lists: Merge two sorted linked lists into one sorted linked list.
// Return the head of the new merged list.

/*
class ListNode { ... }
We reuse the same ListNode class as before.
*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/*
const mergeTwoLists = (list1, list2) => { ... }
This creates a machine (function) called "mergeTwoLists".
You give it:
- list1 (head of the first sorted list)
- list2 (head of the second sorted list)
It will:
- combine them into one sorted linked list
- return the head of the new merged list
*/

const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode(-1);
    // Dummy node acts as the starting point (we will skip it later).

    let current = dummy;
    // Current pointer to build the new list.

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If one list still has nodes, attach the rest.
    current.next = list1 !== null ? list1 : list2;

    return dummy.next;
    // Return the real head (skip dummy).
};

/*
Helper function: createLinkedList(arr)
Turns an array into a linked list.
*/

const createLinkedList2 = (arr) => {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
};

/*
Helper function: printLinkedList(head)
Turns a linked list into an array for easy printing.
*/

const printLinkedList2 = (head) => {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
};

// Testing it out!

const list4 = createLinkedList2([0]);
const mergedList2 = mergeTwoLists(list3, list4);
console.log(printLinkedList2(mergedList2));
// Output: [0]

const list7 = createLinkedList2([5, 6, 7]);
const list8 = createLinkedList2([1, 2, 3]);
const mergedList4 = mergeTwoLists(list7, list8);
console.log(printLinkedList2(mergedList4));
// Output: [1, 2, 3, 5, 6, 7]

/*
HOW TO TEST:
- Save this file.
- Run in terminal: node linkListProbs.js
- Watch the printed outputs!
*/

/* Time Complexity:
O(n + m) → n = length of list1, m = length of list2.
We go through both lists once.
*/

/* Space Complexity:
O(1) → We reuse the original nodes and only use pointers.
(No new list or array is created except the dummy node.)
*/