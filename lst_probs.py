# ************************************************ TWO SUM ***********************************************
# Two Sum: Find two numbers in an array that add up to a target number.

"""
list = [1, 3, 5, 7, 9]
This makes a list called "list" with 5 numbers inside. 
This is different from JS where we need "const" in front. Python doesn't require that.
'=' means "set this name equal to" this value.
[ ] (square brackets) mean "this is a list" in Python.
Commas ',' separate each item inside the list.
This is different from JS also but this time where the semicolon is not required at the end.
"""

nums = [1, 3, 5, 7, 9]

"""
def two_sum(nums, target):
This defines a machine (function) called "two_sum".
You give it: 
- nums: a list of numbers
- target: the number you want to reach by adding two numbers
The machine will try to find two numbers from the list that add up to the target.
"""

def two_sum(nums, target):
    seen = set()
    # 'seen' is a backpack where we store numbers we've already looked at.
    # A set in Python (like a set in JS) does not allow duplicates.
    
    for num in nums:
        # For every number in the list, do something:
        
        complement = target - num
        # 'Complement' is the number we would need to reach the target.
        # Example: if target is 10 and num is 3, we still need 7.
        
        if complement in seen:
            # If we've already seen the complement, we found the answer
            
            return [complement, num]
            # Return the two numbers as a list.
            
        seen.add(num)
        # If we didn't find it yet, add this number to the backpack and keep going.
        
    return None
    # If we checked all numbers and found nothing, return None.
    # None in Python is like "null" in JS.
    
# Testing it out!
# These lines will show what happens when we run the machine with different targets.

print(two_sum(nums, 10))
# Output: [3, 7] (because 3 + 7 = 10)

print(two_sum(nums, 20))
# Output: None (because no two numbers add up to 20)

"""
HOW TO TEST:
- Save this file (for example as arr_probs.py).
- Open a terminal.
- Navigate to the folder where this file is saved.
- Type: python arr_probs.py
- Press ENTER.
- You will see the printed results!

('python' runs the script outside of a browser.)
"""

"""
Time Complexity:
O(n) - "n" is the number of items in the list.
We only loop through the list once.

Space Complexity:
O(n) - We might store up to all numbers in the 'seen' set.
"""

# ************************************************ REVERSE ARRAY ***********************************************

# Reverse List: Write a function to reverse a list in-place (no new list creation).

"""
def rev_list(lst):
This creates a machine (function) called "rev_list"
You give it one thing (parameter/argument):
- a list (lst)
The machine will reverse the list - meaning it puts the last item first, first item last, and swap everything in between
without making a new list.
"""

def rev_list(lst):
    left = 0
    # 'left' is a number starting at the beginning of the list at index 0.

    right = len(lst) - 1
    # 'right' is a number starting at the end of the list at the last index.

    while left < right:
        # keep looping while left is before right

        temp = lst[left]
        # save the left item temporarily

        lst[left] = lst[right]
        # move the right item into the left position

        lst[right] = temp
        # move the saved left item into the right position

        left += 1
        # move 'left' one step to the right

        right -= 1
        # move 'right' one step to the left

    return lst
    # after all swaps are done, return the list (now reversed)

# Testing it out!

print(rev_list([1, 2, 3, 4, 5]))
# Output: [5, 4, 3, 2, 1]

print(rev_list(['a', 'b', 'c', 'd']))
# Output: ['d', 'c', 'b', 'a']

"""
HOW TO TEST:
- Save this file (for example as arr_probs.py).
- Open a terminal.
- Navigate to the folder where this file is saved.
- Type: python arr_probs.py
- Press ENTER.
- You will see the reversed lists printed!

('python' runs the script outside the browser.)
"""

"""
Time Complexity:
O(n) - 'n' is the number of items in the list.
We touch (swap) each item at most once.

Space Complexity:
O(1) - We only use a few extra variables (left, right, temp).
"""

# ************************************************ MAX SUBARRAY ***********************************************

# Maximum Sublist

"""
def max_sub_list(lst): 
This creates a function called max_sub_list.
You pass in one parameter:
- a list (lst)
The function will find the part of the list (a sub list) where the numbers add up to the biggest total 
It uses a smart method called "Kadane's Algorithm" to do it very fast.
"""

def max_sub_list(lst):
    max_sum = lst[0]
    # Start by saying the biggest sum we have seen is the very fist number
    
    curr_sum = lst[0]
    # This says the current total is also the first number
    
    for i in range(1, len(lst)):
        # This loops through the list from 1 through the length of the list
        
        curr_sum = max(lst[i], curr_sum + lst[i])
        # This means the current sum will be the greater of the two nums
        
        max_sum = max(max_sum, curr_sum)
        # Here we update the biggest sum we have seen
        
    return max_sum
    # After we are done looping we return the biggest sum we found
    
# Testing it out!

print(max_sub_list([-2,1,-3,4,-1,2,1,-5,4]))
# Output: 6

print(max_sub_list([5,4,-1,7,8]))
# Output: 23

"""
HOW TO TEST THIS YOURSELF:
- Save this file (for example as arr_probs.py or max_sub_list.py).
- Open a terminal (I like iTerm, Warp, or regular terminal).
- Navigate to the folder where this file is saved.
- Type: python arr_probs.py
- Press ENTER.
- You will see the biggest sums printed!

('python' lets you run Python scripts from the terminal.)
"""

"""
Time Complexity:
O(n) - 'n' means the number of items in the list.
We go through the list one time, touching each item exactly once.

Why it matters:
- Even for huge lists (like 1 million numbers), it still finishes quickly.
- Very efficient!
"""

"""
Space Complexity:
O(1) - We only use a few extra variables (curr_sum, max_sum).
We do not create a new list.

Why it matters:
- Memory stays very small.
- No matter how big the input list is, memory use stays the same.
"""