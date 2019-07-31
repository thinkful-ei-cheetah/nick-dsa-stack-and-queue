class _Node {
  constructor(data, prev, next) {
    this.data = data,
    this.prev = prev,
    this.next = next
  }
}

class QueueDLL {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(data) {
    const node = new _Node(data, null, null)

    if(this.first === null) {
      this.first = node
    }
    
    if(this.last) {
      node.prev = this.last
      this.last.next = node
    }

    this.last = node
  }

  dequeue() {
    if(this.first === null) {
      return
    }

    const node = this.first
   
    this.first.next.prev = null
    this.first = this.first.next

    if(node === this.last) {
      this.last = null
    }

    return node.data
  }
}

module.exports = QueueDLL
