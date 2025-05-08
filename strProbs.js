/************************************************ STRING PROBLEMS ************************************************/

/************************************************ PALINDROME CHECK ***********************************************/

// Checks if a string is a palindrome (ignores spaces, punctuation, capitalization)
const isPalindrome = (str) => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Remove non-alphanumeric chars and make lowercase

    let left = 0;
    let right = cleanStr.length - 1;

    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) return false;
        left++;
        right--;
    }

    return true;
};

/************************************************ LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS ***********************************************/

// Finds the length of the longest substring without repeating characters
const lengthOfLongestSubstring = (s) => {
    const seen = new Set();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

/************************************************ TESTING ************************************************/

console.log("Palindrome Tests:");
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true

console.log("\nLongest Substring Without Repeating Characters Tests:");
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // 0

/*
HOW TO TEST:
- Save this file as strProbs.js
- Run in terminal: node strProbs.js
- Watch the printed outputs!
*/

/* Time Complexity:
isPalindrome → O(n)
lengthOfLongestSubstring → O(n)

Space Complexity:
isPalindrome → O(n) for cleaned string
lengthOfLongestSubstring → O(min(n, m)) where m = charset size (at most 26-128 typically)
*/