const Stack = require("./Stack");

/* 1. Create a stack class */
function q1() {
  const starTrek = new Stack();

  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");

  return starTrek;
}

/* 2. Useful methods for a stack */
function peek(Stack) {
  return Stack.top.data;
}

function isEmpty(Stack) {
  return Stack.top === null;
}

function display(label, Stack) {
  if (Stack.top === null) {
    console.log("Stack is Empty!");
    return;
  }

  let currNode = Stack.top;
  let output = "";
  
  while (currNode.next !== null) {
    output += currNode.data + " -> ";
    currNode = currNode.next;
  }

  console.log(label, `${output}${currNode.data} ]`);
}

const starTrek = q1();
display('Star Trek: ' , starTrek);
starTrek.pop();
starTrek.pop();
display('Star Trek: ', starTrek);

/* 3. Check for palindromes using a stack */
function is_palindrome(s) {
  if (!s) {
    return "String is empty";
  }

  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const stack = new Stack();
  let result = true;

  for (let i = 0; i < s.length; i++) {
    if (i < Math.floor(s.length / 2)) {
      stack.push(s[i]);
      continue;
    }

    if (s.length % 2 !== 0 && i === Math.floor(s.length / 2)) {
      continue;
    }

    if (s[i] !== stack.pop()) {
      result = false;
    }
  }

  return result;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

/* 4. Matching parantheses in an expression */
function matchingParans(s) {
  let result = 'False: Your expression starts with an ")"'

  if(s[0] === ')') {
    return result
  }

  let stack = new Stack()

  for(let i=0; i < s.length; i++) {
    if(s[i] === '(') {
      stack.push(s[i])
    } else if(s[i] === ')') {
      if (stack.pop() === null) {
        return 'False: Your expression is missing a "("'
      }
    }
  }

  if(isEmpty(stack)){
    result = 'True: Your expression is balanced'
  } else {
    result = 'False: Your expression is missing a ")"'
  }

  return result
}

const test1 = ')('      //false
const test2 = '()'      //true
const test3 = '(()'     //false
const test4 = '())'     //false
const test5 = '(3+3())' //true

console.log(matchingParans(test1))
console.log(matchingParans(test2))
console.log(matchingParans(test3))
console.log(matchingParans(test4))
console.log(matchingParans(test5)) 

/* 5. Sort stack */
function sort(inputStack) {
  const resultStack = new Stack()

  while(!isEmpty(inputStack)) {
    const temp = inputStack.pop()
    // console.log('outer while ', temp)

    while(!isEmpty(resultStack) && peek(resultStack) < temp) {
      // console.log('inner while ', temp)
      inputStack.push(resultStack.pop())
    }
    
    resultStack.push(temp)
  }

  return resultStack
}

const testStack = new Stack()

testStack.push(34)
testStack.push(3)
testStack.push(31)
testStack.push(98)
testStack.push(92)
testStack.push(23)

display('Test Stack: ', testStack)
display('Sorted Stack: ', sort(testStack))
