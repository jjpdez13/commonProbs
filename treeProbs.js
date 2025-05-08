/************************************************ TREE PROBLEMS ************************************************/

/*
TreeNode class for a binary tree.
Each node has:
- val (value)
- left (left child)
- right (right child)
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/************************************************ BINARY TREE TRAVERSAL ***********************************************/

// Pre-order: root → left → right
const preorderTraversal = (root, result = []) => {
    if (root) {
        result.push(root.val);
        preorderTraversal(root.left, result);
        preorderTraversal(root.right, result);
    }
    return result;
};

// In-order: left → root → right
const inorderTraversal = (root, result = []) => {
    if (root) {
        inorderTraversal(root.left, result);
        result.push(root.val);
        inorderTraversal(root.right, result);
    }
    return result;
};

// Post-order: left → right → root
const postorderTraversal = (root, result = []) => {
    if (root) {
        postorderTraversal(root.left, result);
        postorderTraversal(root.right, result);
        result.push(root.val);
    }
    return result;
};

/************************************************ FIND LOWEST COMMON ANCESTOR ***********************************************/

// Finds the lowest common ancestor of two nodes in a binary tree
const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;
    return left ? left : right;
};

/************************************************ VALIDATE BINARY SEARCH TREE ***********************************************/

// Checks if a binary tree is a valid BST
const isValidBST = (root, min = -Infinity, max = Infinity) => {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    );
};

/************************************************ HELPER FUNCTIONS ************************************************/

// Builds a simple binary tree for testing
const buildTestTree = () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(1);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(6);
    return root;
};

/************************************************ TESTING ************************************************/

const tree = buildTestTree();

console.log("Pre-order:", preorderTraversal(tree)); 
// Output: [3, 1, 0, 2, 5, 4, 6]

console.log("In-order:", inorderTraversal(tree)); 
// Output: [0, 1, 2, 3, 4, 5, 6]

console.log("Post-order:", postorderTraversal(tree)); 
// Output: [0, 2, 1, 4, 6, 5, 3]

// Find LCA
const lcaNode = lowestCommonAncestor(tree, tree.left.right, tree.right.left);
console.log("Lowest Common Ancestor of 2 and 4:", lcaNode.val); 
// Output: 3

// Validate BST
console.log("Is valid BST:", isValidBST(tree)); 
// Output: true

/*
HOW TO TEST:
- Save this as treeProbs.js
- Run in terminal: node treeProbs.js
- Watch the printed outputs!
*/

/* Time Complexity:
Traversal → O(n)
LCA → O(n)
Validate BST → O(n)

Space Complexity:
O(h) where h = height of the tree (due to recursion stack)
*/