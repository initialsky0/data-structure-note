class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}
 
 class Queue {
   constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
   }
   isEmpty(){
      return this.length === 0 && this.last === null ? true : false;
   }

   peek() {
      return this.first;
   }

   enqueue(value){
      const newNode = new Node(value);
      if(this.isEmpty()) {
         this.first = newNode;
         this.last = this.first;
      } else {
         this.last.next = newNode;
         this.last = newNode;
      }
      this.length++;
      return this;
   }

   dequeue(){
      if(this.isEmpty()) { return null; }
      const deqNode = this.first;
      this.first = this.first.next;
      if(this.first === null) {
         this.last = this.first;
      }
      this.length--;
      return deqNode;
   }
   
}
 
 const myQueue = new Queue();
 console.log(myQueue.enqueue('Joy').last.value);
 console.log(myQueue.enqueue('Matt').last.value);
 console.log(myQueue.enqueue('Pavel').last.value);
 console.log(myQueue.enqueue('Samir').last.value);
 console.log(myQueue.length);
 console.log(myQueue.dequeue().value);
 console.log(myQueue.dequeue().value);
 console.log(myQueue.length);
 console.log(myQueue.dequeue().value);
 console.log(myQueue.dequeue().value);
 console.log(myQueue.length);
 console.log(myQueue.isEmpty());
 console.log(myQueue.dequeue());
 
 
 //Joy
 //Matt
 //Pavel
 //Samir
 
 