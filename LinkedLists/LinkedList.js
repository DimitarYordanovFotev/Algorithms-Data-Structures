export class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getSize() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let node = this.head;
    do {
      node = node.next;
    }
    while (node.next !== null)

    return node;
  }

  getFirst() {
    if (this.head !== null) {
      return this.head;
    }
  }

  insert(data) {
    let node = new ListNode(data);
    let tempNode = this.head;

    while (tempNode.next !== null) {
      if (tempNode.data === data) {
        return console.log('Data already exists in linked list');
      }
      tempNode = tempNode.next;
    }

    if (tempNode.data === data) {
      return console.log('Data already exists in linked list');
    }

    tempNode.next = node;
    /*    this.printLinkedList(); */
  }

  printLinkedList() {
    let arr = [];
    let node = this.head;

    if (node == null) {
      console.log('List is empty');
      return;
    }

    while (node) {
      arr.push(node);
      node = node.next;
    }

    console.log(arr);
  }

  deleteHead() {
    this.head = this.head.next;
    this.printLinkedList();

  }

  deleteTail() {
    let node = this.head;

    while (node.next.next !== null) {
      node = node.next;
    }

    node.next = null;
    this.printLinkedList();

  }

  searchInList(data) {
    let node = this.head;

    if (node == null) {
      console.log('List is empty');
      return;
    }

    while (node) {
      if (node.data === data) {
        return true;
      }
      node = node.next;
    }

    return false;
  }

  delete(data) {
    let node = this.head;

    if (node == null) {
      console.log('List is empty');
      return;
    }

    while (node) {
      if (node.next &&
        node.next.data === data) {
        node.next = node.next.next;
        return;
      } else if (node.data == data) {
        this.deleteHead();
        return;
      }
      node = node.next;
    }
  }

}

/* let head = new ListNode(1);
let list = new LinkedList(head)
list.insert(2)
list.insert(3)
list.deleteHead();
list.deleteTail(); */

