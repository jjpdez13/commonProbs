/************************************************ DYNAMIC PROGRAMMING ************************************************/

/************************************************ FIBONACCI SERIES ***********************************************/

// Recursive Fibonacci (inefficient for large n)
const recursiveFibonacci = (n) => {
    if (n <= 1) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

// DP Fibonacci (bottom-up approach, efficient)
const dpFibonacci = (n) => {
    if (n <= 1) return n;
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

/************************************************ KNAPSACK PROBLEM ***********************************************/

// 0/1 Knapsack Problem using DP
const knapsack = (weights, values, capacity) => {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
};

/************************************************ TESTING ************************************************/

console.log("Fibonacci Tests:");
console.log("Recursive (5):", recursiveFibonacci(5)); // 5
console.log("DP (10):", dpFibonacci(10)); // 55

console.log("\nKnapsack Tests:");
const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;
console.log("Max value:", knapsack(weights, values, capacity)); // 9

/*
HOW TO TEST:
- Save this file as dynamicProbs.js
- Run in terminal: node dynamicProbs.js
- Watch the printed outputs!
*/

/* Time Complexity:
recursiveFibonacci → O(2^n) (exponential, avoid for large n)
dpFibonacci → O(n)
knapsack → O(n * capacity)

Space Complexity:
recursiveFibonacci → O(n) (due to call stack)
dpFibonacci → O(n)
knapsack → O(n * capacity)
*/