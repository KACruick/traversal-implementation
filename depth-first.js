// Implement a depth-first search and traversal of both a tree and a graph 
// using the pseudo-code from the depth-first overview reading.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}
bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);

//prints nodes as they are visited
function depthTreeTraversal(rootNode){
  const stack = [rootNode] 

  while(stack.length){
      let currNode = stack.pop()
      console.log(currNode.val)
      // if the node has a left node
      // push the left node on the back of the queue
      if (currNode.left) {
        stack.push(currNode.left)
      }
      // if the node has a right node
      // push the right node on the back of the queue
      if (currNode.right) {
        stack.push(currNode.right)
      }
  }
}

depthTreeTraversal(bstRoot)

// returns tree node 
function depthTreeSearch(rootNode, target){
  const stack = [rootNode]

  while(stack.length > 0){
      let currentNode = stack.pop()
      if(currentNode.val === target){
          return currentNode
      }
      if (currentNode.left) {
        stack.push(currentNode.left)
      }
      if (currentNode.right) {
        stack.push(currentNode.right)
      }
  }
  return null
}

console.log(depthTreeSearch(bstRoot, 3))



const adjList1 = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

//prints nodes as they are visited
function depthGraphTraversal(startNode, graph){
const stack = [startNode]

let visited = new Set([startNode])

    while (stack.length > 0){
        let currentNode = stack.pop()
   
        console.log(currentNode)
        //add neighbors 
        for (let neighbor of graph[currentNode]){
            if (!visited.has(neighbor)){
              visited.add(neighbor)
              stack.push(neighbor)
            }
        }
    }

}

depthGraphTraversal(1, adjList1)

//returns path to target node
function depthGraphSearch(startNode, graph, target){
  const stack = []
  const path = [startNode]
  stack.push(path)
  const visited = new Set()

  while(stack.length > 0){
      let currentPath = stack.pop()
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
        stack.push(newPath)
      }
    })
  }

return null
}

console.log(depthGraphSearch(1, adjList1, 5))