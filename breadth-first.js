//DONE

// Implement a breadth-first search and traversal of both a tree and a graph 
// using the pseudo-code from the breadth-first overview reading.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}
  
//tree 
      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7

    bstRoot = new TreeNode(4);
    bstRoot.left = new TreeNode(2);
    bstRoot.left.left = new TreeNode(1);
    bstRoot.left.right = new TreeNode(3);
    bstRoot.right = new TreeNode(6);
    bstRoot.right.left = new TreeNode(5);
    bstRoot.right.right = new TreeNode(7);

// 1. Put the starting node in a queue.
// 2. While the queue is not empty, repeat steps 3-4.
// 3. Dequeue a node and print it.
// 4. Put all of the node's children in the back of the queue.

// A breadth-first SEARCH will return a shortest path to the target node.

//traversal
function breadthTreeTraversal(rootNode){
    const queue = [rootNode] 

    while(queue.length){
        let currNode = queue.shift()
        console.log(currNode.val)
        // if the node has a left node
        // push the left node on the back of the queue
        if (currNode.left) {
          queue.push(currNode.left)
        }
        // if the node has a right node
        // push the right node on the back of the queue
        if (currNode.right) {
          queue.push(currNode.right)
        }
    }
}

breadthTreeTraversal(bstRoot)

//returns target node 
function breadthTreeSearch(rootNode, target){
    const queue = [rootNode]

    while(queue.length > 0){
        let currentNode = queue.shift()
        if(currentNode.val === target){
            return currentNode
        }
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
    }
    return null
}

console.log("breadthTreeSearch: ", breadthTreeSearch(bstRoot, 5))





const adjList1 = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}


function breadthGraphTraversal(start, graph){
    // Create a queue and enqueue the starting node
  const queue = [start]
  // Create a set to store visited nodes
    const visited = new Set([start])
    
  // While the queue is not empty, repeat steps 4-6
    while(queue.length > 0){
    // Dequeue the first node
      let currentNode = queue.shift()
  // DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
      console.log(currentNode)
  // For each unvisited neighbor, add it to the visited nodes and to the back of the queue
      for (let neighbor of graph[currentNode]){
        if (!visited.has(neighbor)){
          visited.add(neighbor)
          queue.push(neighbor)
        }
      }
    }
  
}

breadthGraphTraversal(1, adjList1)

//returns path to target node
function breadthGraphSearch(startNode, graph, target){
    
    const queue = []
    const path = [startNode]
    queue.push(path)
    const visited = new Set()

    while(queue.length > 0){
        let currentPath = queue.shift()
        let currentNode = currentPath[currentPath.length-1]
        visited.add(currentNode)
        if (currentNode === target){
            return currentPath
        }

        // find the list the current node has
      let neighbors = graph[currentNode]

      neighbors.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          let newPath = currentPath.concat(neighbor)
          queue.push(newPath)
        }
      })
    }
  
  return null
}

console.log("breadthGraphSearch: ", breadthGraphSearch(1, adjList1, 4))