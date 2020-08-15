class Node {
   constructor(value) {
      this.value = value,
      this.prev = null,
      this.next = null
   }
}

class DoublyLinkedList {
   constructor(value) {
      this.head = new Node(value)
      this.tail = this.head;
      this.length = 1;
   }

   append(value) {
      // this.tail.next -> is the appending new node
      const newNode = new Node(value);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return this;
   }

   prepend(value) {
      const newNode = new Node(value)
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
   }

   traverseToNode(index) {
      // Check input base on condition
      if(index === -1 || index >= this.length) { return this.tail; }
      else if(index < -1) { return undefined; }
      // create node state
      let currentNode = this.head;
      // let prevNode = currentNode; // no longer needed because it's implemented by changing node class to have previous node(Doubly)
      // locate the traverse position with index
      for(let i = 0; i < index; i++) {
         // prevNode = currentNode; // Change for doubly
         currentNode = currentNode.next;
      }
      // return { currentNode: currentNode, prevNode: prevNode }; // Change for doubly
      return currentNode;
   }

   reverseToNode(index) {
      // Check input base on condition
      if(index === -1) { return this.head; }
      else if(index < -1 || index >= this.length) { return undefined; }
      // create node state
      let currentNode = this.tail;
      let counter = 0;
      // locate the reverse position with index
      while(currentNode !== null && counter < index) {
         currentNode = currentNode.prev;
         counter++;
      }
      return currentNode;
   }

   insert(index, value) {
      // Check for overflow index and negative or 0 index
      if(index >= this.length) { return this.append(value); }
      else if(index <= 0) { return this.prepend(value); }
      const newNode = new Node(value);
      // insert items between 0 and max length
      const nodes = this.traverseToNode(index);
      // Assign correct link relationship between nodes
      nodes.prev.next = newNode; // referring to previous node's next pointer is pointing to new node
      newNode.prev = nodes.prev;
      nodes.prev = newNode;
      newNode.next = nodes;
      this.length++;
      return this;
   }

   remove(index) {
      // handle remove first or last item and check overflow or negative index
      if(index === 0) {
         this.head = this.head.next;
         this.head.prev = undefined;
         this.length--;
         return this;
      } else if(index === this.length - 1) {
         this.tail.prev.next = null;
         this.tail = this.tail.prev;
         this.length--;
         return this; 
      } else if(index >= this.length || index < 0) {
         return undefined;
      }
      // remove items after index 0
      const nodes = this.traverseToNode(index);
      // Assign correct link relationship between nodes after being removed
      nodes.next.prev = nodes.prev;
      nodes.prev.next = nodes.next;
      this.length--;
      return this;
   }

   get(index) {
      if(index >= this.length || index < -1) { return undefined; }
      else if (index === -1 ){ return this.tail.value; }
      const currentNode =  this.traverseToNode(index);
      return currentNode.value;
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

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0, 99);
myLinkedList.insert(1, 1000);
console.log(myLinkedList)
console.log(myLinkedList.reverseToNode(0).value);
console.log(myLinkedList.length);
console.log(myLinkedList.toArray());
myLinkedList.remove(5);
console.log(myLinkedList.traverseToNode(2).value);
console.log(myLinkedList.length);
console.log(myLinkedList.toArray());