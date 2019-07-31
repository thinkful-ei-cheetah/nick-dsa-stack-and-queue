const Queue = require('./Queue')
const QueueDLL = require('./QueueDLL')

/* 6. Create a queue using Singly linked list */
function q6() {
  const starTrekQ = new Queue()

  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('Spock')
  starTrekQ.enqueue('Uhura')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')

  return starTrekQ
}

function qPeek(Queue) {
  return Queue.first.data
}

function qIsEmpty(Queue) {
  return Queue.first === null
}

function qDisplay(label, Queue) {
  let output = ''

  let currNode = Queue.first

  while(currNode.next !== null) {
    output += currNode.data + ' -> '
    currNode = currNode.next
  }

  console.log(`${label}${output}${currNode.data}`)
}

const starTrekQ = q6()
qDisplay('Star Trek: ', starTrekQ)
starTrekQ.dequeue()
starTrekQ.dequeue()
qDisplay('Star Trek: ', starTrekQ)

/* 7. Create a queue class using Doubly linked list */
function q7() {
  const starTrekQdll = new QueueDLL()

  starTrekQdll.enqueue('Kirk')
  starTrekQdll.enqueue('Spock')
  starTrekQdll.enqueue('Uhura')
  starTrekQdll.enqueue('Sulu')
  starTrekQdll.enqueue('Checkov')

  return starTrekQdll
}

const starTrekQdll = q7()

qDisplay('Star Trek DLL: ', starTrekQdll)

/* 8. Queue implementation using a stack */
