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
      return new _Node('Nothing to pop...', null)
    }

    const node = this.top
    this.top = node.next
    return node.data
  }
}

module.exports = Stack