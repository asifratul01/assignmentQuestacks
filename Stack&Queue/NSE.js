const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function nextSmallerElement(n, arr) {
  const stack = []; // Stack to store potential candidates
  const result = new Array(n).fill(-1); // Initialize result array with -1

  // Traverse the array from the end to the beginning
  for (let i = n - 1; i >= 0; i--) {
    // Pop elements from the stack that are greater than or equal to the current element
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    // If a smaller element is found, assign it to the result
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    // Push the current element onto the stack
    stack.push(arr[i]);
  }

  return result;
}

// Read input at runtime
rl.question('Enter the size of the array: ', n => {
  rl.question('Enter the array elements separated by spaces: ', input => {
    const arr = input.split(' ').map(Number); // Convert input string to array of numbers
    const result = nextSmallerElement(Number(n), arr); // Compute the result
    console.log(result.join(' ')); // Print the result as space-separated values
    rl.close();
  });
});
