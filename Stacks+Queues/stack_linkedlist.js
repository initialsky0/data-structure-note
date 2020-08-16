class Node {
   constructor(value){
      this.value = value;
      this.next = null;
   }
}

class Stack {
   constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
   }
   isEmpty() {
      return this.length === 0 ? true : false;
   }

   peek() {
      return this.top;
   }

   push(value) {
      if(this.isEmpty()){
         this.top = new Node(value);
         this.bottom = this.top;
      } else {
         const newLayer = new Node(value);
         newLayer.next = this.top;
         this.top = newLayer;
      }
      this.length++;
      return this.peek();
   }

   pop() {
      if(this.isEmpty()) {
         return null;
      }

      this.top = this.top.next;
      // check if the stack is going to be empty
      if(this.top === null) {
         this.bottom = null;
      }
      this.length--;
      return this.peek();
   }
   
}
 
 const myStack = new Stack();
 console.log(myStack.push('Discord').value);
 console.log(myStack.push('Udemy').value);
 console.log(myStack.push('google').value);
 console.log(myStack.length);
 console.log(myStack.pop().value);
 console.log(myStack.length);
 console.log(myStack.pop().value);
 console.log(myStack.length);
 console.log(myStack.pop());
 console.log(myStack.length);

 //Discord
 //Udemy
 //google
 