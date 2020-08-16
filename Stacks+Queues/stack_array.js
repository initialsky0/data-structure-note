class Stack {
   constructor(){
      this.container = new Array();
   }
   isEmpty() {
      return this.length === 0 ? true : false;
   }

   peek() {
      return this.container[this.container.length - 1];
   }

   push(value) {
      this.container.push(value);
      return this.peek();
   }

   pop() {
      this.container.pop();
      return this.peek();
   }
   
}
 
 const myStack = new Stack();
 console.log(myStack.push('Discord'));
 console.log(myStack.push('Udemy'));
 console.log(myStack.push('google'));
 console.log(myStack.container.length);
 console.log(myStack.pop());
 console.log(myStack.container.length);
 console.log(myStack.pop());
 console.log(myStack.container.length);
 console.log(myStack.pop());
 console.log(myStack.container.length);

 //Discord
 //Udemy
 //google