class MyQueue {
   constructor() {
      this.qStackOrder = [];
      this.qStackReverse = [];
   }

   isEmpty() {
      return this.qStackOrder.length === 0 && this.qStackReverse.length === 0 ? true : false;
   }

   push(value) {
      if(this.isEmpty() || this.qStackReverse.length === 0) {
         this.qStackOrder.push(value);
         return this;
      } else {
         for(let i = 0; this.qStackReverse.length !== 0; i++) {
            this.qStackOrder.push(this.qStackReverse.pop());
         }
         this.qStackOrder.push(value);
         return this;
      }
   }

   pop() {
      if(this.isEmpty() || this.qStackOrder.length === 0) {
         return this.qStackReverse.pop();
      } else {
         for(let i = 0; this.qStackOrder.length !== 0; i++) {
            this.qStackReverse.push(this.qStackOrder.pop());
         }
         return this.qStackReverse.pop();
      }
   }

   peek() {
      if(this.qStackOrder.length === 0) {
         return this.qStackReverse[this.qStackReverse.length - 1];
      } else {
         return this.qStackOrder[0];
      }
   }
}

const queue = new MyQueue();

console.log(queue.push(1));
console.log(queue.push(2));
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.push(3));
console.log(queue.push(4));
console.log(queue.peek());
console.log(queue.push(5));
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.isEmpty());