const _Node = require('./_Node')

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    this.top = new _Node(data, this.top)
  }

  pop() {
    if(this.top === null) {
      return this.top
    }

    const node = this.top
    this.top = node.next
    return node.data
  }
}

module.exports = Stack