// Getting something like this
// let myLinkedList = {
//    head: {
//       value: 10,
//       next: {
//          value: 5,
//          next: {
//             value: 16,
//             next: null
//          }
//       }
//    }
// }

class Node {
   constructor(value) {
      this.value = value,
      this.next = null
   }
}

class LinkedList {
   constructor(value) {
      this.head = new Node(value)
      this.tail = this.head;
      this.length = 1;
   }

   append(value) {
      // this.tail.next -> is the appending new node
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
      this.length++;
      return this;
   }

   prepend(value) {
      const newNode = new Node(value)
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
   }

   traverseToNode(index) {
      // create node state
      let currentNode = this.head;
      let prevNode = currentNode;
      // locate the insert position with index
      for(let i = 0; i < index; i++) {
         prevNode = currentNode;
         currentNode = currentNode.next;
      }
      return { currentNode: currentNode, prevNode: prevNode };
   }

   insert(index, value) {
      // Check for overflow index and negative or 0 index
      if(index >= this.length) { return this.append(value); }
      else if(index <= 0) { return this.prepend(value); }
      const newNode = new Node(value);
      // insert items between 0 and max length
      const nodes = this.traverseToNode(index);
      nodes.prevNode.next = newNode;
      newNode.next = nodes.currentNode;
      this.length++;
      return this;
   }

   remove(index) {
      // handle remove first item and check overflow or negative index
      if(index === 0) {
         this.head = this.head.next;
         this.length--;
         return this;
      } else if(index >= this.length || index < 0) {
         return undefined;
      }
      // remove items after index 0
      const nodes = this.traverseToNode(index);
      nodes.prevNode.next = nodes.currentNode.next;
      this.length--;
      return this;
   }

   get(index) {
      if(index >= this.length || index < -1) { return undefined; }
      else if (index === -1 ){ return this.tail.value; }
      let currentNode = this.head;
      for(let i = 0; i < index; i++) {
         currentNode = currentNode.next;
      }
      return currentNode.value;
   }

   reverse() {
      if(!this.head.next) { return this.head; }
      let currentNode = this.head;
      let bufferNode = currentNode.next;
      let bufferNodeNext = bufferNode.next;
      currentNode.next = null;
      this.tail = currentNode;
      while (bufferNode.next !== null) {
         bufferNode.next = currentNode;
         currentNode = bufferNode;
         bufferNode = bufferNodeNext;
         bufferNodeNext = bufferNode.next;
      }
      bufferNode.next = currentNode;
      this.head = bufferNode;
      return this;
   }

   reverseNewList() {
      const newLink = new LinkedList(this.tail.value);
      if(!this.head.next) { return newLink }
      newLink.tail = new Node(this.head.value);
      newLink.length++;
      let currentNode = this.head.next;
      let nodeTail = newLink.tail;
      let nodePrev = undefined;
      while (currentNode.next !== null) {
         nodePrev = new Node(currentNode.value);
         nodePrev.next = nodeTail; 
         nodeTail = nodePrev;
         currentNode = currentNode.next;
         newLink.length++;
      }
      newLink.head.next = nodeTail;
      return newLink;
   }

   toArray() {
      const linkArray = [];
      let currentNode = this.head;
      while(currentNode !== null) {
         linkArray.push(currentNode.value);
         currentNode = currentNode.next;
      }
      return linkArray
   }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(0, 1000);
console.log(myLinkedList.length);
console.log(myLinkedList.toArray());
console.log(myLinkedList.reverse().toArray());
myLinkedList.remove(2);
console.log(myLinkedList.length);
console.log(myLinkedList.toArray());
const reversedLinkedList = myLinkedList.reverseNewList();
console.log(reversedLinkedList.toArray());
console.log(reversedLinkedList.length);