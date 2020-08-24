class Node {
   constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
   }
}
 
class BinarySearchTree {
   constructor() {
      this.root = null;
   }
   
   
   insert(value) {
      const newNode = new Node(value);
      if(this.isEmpty()) {
         this.root = newNode;
         return this;
      } else {
         let currentNode = this.root;
         while(currentNode) {
            if(value < currentNode.value) {
               // left
               if(!currentNode.left){
                  currentNode.left = newNode;
                  currentNode = null;
               } else {
                  currentNode = currentNode.left;
               }
            } else if(value > currentNode.value) {
               // right
               if(!currentNode.right){
                  currentNode.right = newNode;
                  currentNode = null;
               } else {
                  currentNode = currentNode.right;
               }
            } else if(value === currentNode.value) {
               // if the value already existed, it will return the node of the value
               return currentNode;
            } else { throw Error(console.log('This value is invalid:', value)) }
         }
         return this;
      }
   }
   
   lookup(value) {
      if(this.isEmpty()) {
         return null;
      }
      let currentNode = this.root;
      while(currentNode !==  null) {
         if(value === currentNode.value) {
            return currentNode;
         } else if(value < currentNode.value) {
            currentNode = currentNode.left;
         } else if(value > currentNode.value) {
            currentNode = currentNode.right;
         } else { throw Error(console.log('This value is invalid:', value)) }
      }
      return currentNode;
   }

   remove(value) {
      if(this.isEmpty()) {
         return null;
      }
      let currentNode = this.root;
      let prevNode = null;
      while(currentNode) {
         if(value === currentNode.value) {
            // start removing
            if(currentNode.left === null && currentNode.right === null) {
               // condition when the node to remove don't have child
               if(prevNode.right && prevNode.right.value === value) {
                  prevNode.right = null;
                  return this;
               } else {
                  prevNode.left = null;
                  return this;
               }
            } else if(currentNode.right === null || currentNode.left === null) {
               // condition when the node only have 1 child
               if(currentNode.right === null) {
                  // child is on the left
                  if(prevNode.right.value === value) {
                     prevNode.right = currentNode.left;
                     return this;
                  } else {
                     prevNode.left = currentNode.left;
                     return this;
                  }
               } else {
                  // child on the right
                  if(prevNode.right.value === value) {
                     prevNode.right = currentNode.right;
                     return this;
                  } else {
                     prevNode.left = currentNode.right;
                     return this;
                  }
               }
            } else {
               // condition when node have children
               const nodeRemove = currentNode;
               let nodePrevRemove = prevNode;
               if(prevNode === null && value !== this.root.value) {
                  prevNode = this.root;
               }
               currentNode = currentNode.right;
               while(currentNode.left) {
                  nodePrevRemove = currentNode;
                  currentNode = currentNode.left;
               }
               if(nodePrevRemove.value === nodeRemove.value) {
                  // condition for one left hop
                  nodePrevRemove = prevNode;
               }
               // currentNode will be at the end of left node (might have right node branch out)
               if(nodePrevRemove !== this.root){
                  nodePrevRemove.left = currentNode.right;
               }
               // prevent circular node, or pointing to itself after removing
               if(nodeRemove.left !== currentNode){
                  currentNode.left = nodeRemove.left;
               }
               if(nodeRemove.right !== currentNode){
                  currentNode.right = nodeRemove.right;
               }
               if(prevNode === null) {
                  // condition when value is the root node
                  this.root = currentNode;
               } else if(prevNode.left && prevNode.left.value === nodeRemove.value) {
                  prevNode.left = currentNode;
               } else if(prevNode.right && prevNode.right.value === nodeRemove.value) {
                  prevNode.right = currentNode;
               }
               return this
            }

         } else if(value < currentNode.value) {
            // finding value to remove
            prevNode = currentNode;
            currentNode = currentNode.left;
         } else if(value > currentNode.value) {
            // finding value to remove
            prevNode = currentNode;
            currentNode = currentNode.right;
         } else { throw Error(console.log('This value is invalid:', value)) }
      }
      return currentNode
   }

   isEmpty() {
      return this.root === null ? true : false;
   }
   
   breadthFirstSearch() {
      let currentNode = this.root;
      let list = [];
      let queue = [];
      queue.push(currentNode);

      while(queue.length > 0) {
         currentNode = queue.shift();
         list.push(currentNode.value);
         if(currentNode.left) {
            queue.push(currentNode.left);
         }
         if(currentNode.right) {
            queue.push(currentNode.right);
         }
      }
      return list;

   }

   validateBST() {
      let currentNode = this.root;
      let list = [];
      let queue = [];
      queue.push(currentNode);

      while(queue.length > 0) {
         if(currentNode.left && currentNode.left.value > currentNode.value) {
            return false;
         } else if(currentNode.right && currentNode.right.value < currentNode.value) {
            return false;
         } else {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left) {
               queue.push(currentNode.left);
            }
            if(currentNode.right) {
               queue.push(currentNode.right);
         }
         }
      }
      return true;

   }

   breadthFirstSearchRecursive(queue, list) {
      if(!queue.length) {
         return list
      }
      // order of the list is perserved due to queue [9-> left: 4, right: 20] pop 9 currentNode is 4 -> [4, 20, left: 1, right: 6] ...
      const currentNode = queue.shift()
      list.push(currentNode.value);
      if(currentNode.left) {
         queue.push(currentNode.left);
      }
      if(currentNode.right) {
         queue.push(currentNode.right);
      }
      return this.breadthFirstSearchRecursive(queue, list);
   }

   depthFirstSearchPreorder(currentNode) {
      const list = [];
      if(!currentNode) {
         return list;
      }
      list.push(currentNode.value);
      // first value is the parent, then left branch, and last right branch
      return list.concat(this.depthFirstSearchPreorder(currentNode.left)).concat(this.depthFirstSearchPreorder(currentNode.right));
   }

   depthFirstSearchInorder(currentNode) {
      const list = [];
      if(!currentNode) {
         return list;
      }
      list.push(currentNode.value);
      // first value is the bottom of left branch, then the parent, and last is right branch
      return this.depthFirstSearchInorder(currentNode.left).concat(list).concat(this.depthFirstSearchInorder(currentNode.right));
   }

   depthFirstSearchPostorder(currentNode) {
      const list = [];
      if(!currentNode) {
         return list;
      }
      list.push(currentNode.value);
      // first value is the bottom of left branch, then the bottom of right branch, and last is the parent
      return this.depthFirstSearchPostorder(currentNode.left).concat(this.depthFirstSearchPostorder(currentNode.right)).concat(list);
   }
}
 
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// code to swap left node and parent node
// let buffer = tree.root;
// let bufferRight = tree.root.right;
// tree.root = tree.root.left;
// buffer.left = tree.root.left;
// buffer.right = tree.root.right;
// tree.root.left = buffer;
// tree.root.right = bufferRight;
console.log('ValidateBST:', tree.validateBST());
console.log('BFS:', tree.breadthFirstSearch());
console.log('BFS Recursive:', tree.breadthFirstSearchRecursive([tree.root], []));
console.log('DFS - In-order:', tree.depthFirstSearchInorder(tree.root));
console.log('DFS - Pre-order:', tree.depthFirstSearchPreorder(tree.root));
console.log('DFS - Post-order:', tree.depthFirstSearchPostorder(tree.root));
// const result = JSON.stringify(traverse(tree.root));
// console.log(result);
// console.log(tree.lookup(9));

 //     9
 //  4     20
 //1  6  15  170

 //DFS
 // inorder = [1, 4, 6, 9, 15, 20, 170]
 // preorder = [9, 4, 1, 6, 20, 15, 170]
 // postorder = [1, 6, 4, 15, 170, 20, 9]

tree.remove(9);
// const result1 = JSON.stringify(traverse(tree.root));
// console.log(result1);
 
function traverse(node) {
   const tree = { value: node.value };
   tree.left = node.left === null ? null : traverse(node.left);
   tree.right = node.right === null ? null : traverse(node.right);
   return tree;
}