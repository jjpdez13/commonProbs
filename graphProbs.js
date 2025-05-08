/************************************************ GRAPH PROBLEMS ************************************************/

/************************************************ BREADTH-FIRST SEARCH (BFS) ***********************************************/

// BFS for traversing a graph and finding the shortest path from a start node
const bfs = (graph, start) => {
    const visited = new Set();
    const queue = [start];
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift();

        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (const neighbor of graph[node]) {
                queue.push(neighbor);
            }
        }
    }

    return result;
};

/************************************************ DEPTH-FIRST SEARCH (DFS) ***********************************************/

// DFS for traversing a graph and solving connected components
const dfs = (graph, start, visited = new Set(), result = []) => {
    visited.add(start);
    result.push(start);

    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited, result);
        }
    }

    return result;
};

/************************************************ TESTING ************************************************/

// Example graph as adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

console.log("BFS from A:", bfs(graph, 'A'));
// Example output: ['A', 'B', 'C', 'D', 'E', 'F']

console.log("DFS from A:", dfs(graph, 'A'));
// Example output: ['A', 'B', 'D', 'E', 'F', 'C']

/*
HOW TO TEST:
- Save this file as graphProbs.js
- Run in terminal: node graphProbs.js
- Watch the printed outputs!
*/

/* Time Complexity:
BFS → O(V + E) 
DFS → O(V + E)
(V = vertices, E = edges)

Space Complexity:
BFS → O(V) for queue and visited
DFS → O(V) for call stack and visited
*/