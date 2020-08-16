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
   // remove
}
 
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// const result = JSON.stringify(traverse(tree.root));
// console.log(result);
// console.log(tree.lookup(9));

 //     9
 //  4     20
 //1  6  15  170

tree.remove(9);
const result1 = JSON.stringify(traverse(tree.root));
console.log(result1);
 
//     15
//  4      20
//1  6  null  170

tree.remove(4);
const result2 = JSON.stringify(traverse(tree.root));
console.log(result2);

//      15
//  6         20
//1  null  null  170

 
function traverse(node) {
   const tree = { value: node.value };
   tree.left = node.left === null ? null : traverse(node.left);
   tree.right = node.right === null ? null : traverse(node.right);
   return tree;
}