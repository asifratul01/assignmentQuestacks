const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class QueueUsingStacks {
  constructor() {
    this.stack1 = []; // Used for enqueue operations
    this.stack2 = []; // Used for dequeue and front operations
  }

  // Enqueue operation
  enqueue(x) {
    this.stack1.push(x);
  }

  // Dequeue operation
  dequeue() {
    if (this.stack2.length === 0) {
      // Transfer all elements from stack1 to stack2
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    // If stack2 is still empty, the queue is empty
    if (this.stack2.length === 0) {
      return -1;
    }
    // Pop and return the front element
    return this.stack2.pop();
  }

  // Front operation
  front() {
    if (this.stack2.length === 0) {
      // Transfer all elements from stack1 to stack2
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    // If stack2 is still empty, the queue is empty
    if (this.stack2.length === 0) {
      return -1;
    }
    // Return the front element without popping
    return this.stack2[this.stack2.length - 1];
  }
}

// Read input at runtime
rl.question('Enter the number of operations: ', q => {
  const queue = new QueueUsingStacks();
  let count = 0;

  const processOperation = () => {
    if (count < q) {
      rl.question(`Operation ${count + 1}: `, input => {
        const parts = input.split(' ');
        const command = parseInt(parts[0]);

        if (command === 1) {
          const x = parseInt(parts[1]);
          queue.enqueue(x);
        } else if (command === 2) {
          const result = queue.dequeue();
          console.log(result);
        } else if (command === 3) {
          const result = queue.front();
          console.log(result);
        } else {
          console.log('Invalid command');
        }

        count++;
        processOperation(); // Process the next operation
      });
    } else {
      rl.close(); // Close the readline interface
    }
  };

  processOperation(); // Start processing operations
});
