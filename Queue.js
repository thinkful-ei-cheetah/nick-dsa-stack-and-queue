const _Node = require('./_Node')

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(data) {
    const node = new _Node(data, null)
    
    if(this.first === null) {
      this.first = node
    }

    if(this.last) {
      this.last.next = node
    }

    this.last = node
  }

  dequeue() {
    if(this.first === null) {
      return
    }

    const node = this.first
    this.first = this.first.next

    if(node === this.last) {
      this.last = null
    }

    return node.data
  }
}

module.exports = Queue