import { ListNode, LinkedList } from './LinkedList.js';

class DoubleLinkedListNode extends ListNode{
    constructor(data){
        super(data);
        this.prev = null;
    }
}

class DoubleLinkedList extends LinkedList{
    insert(data) {
        let node = new DoubleLinkedListNode(data);
        let tempNode = this.head;
    
        if (tempNode === null) {
          this.head = node;
          return;
        }
        while (tempNode.next !== null) {
          tempNode = tempNode.next;
        }
    
        node.prev = tempNode;
        tempNode.next = node;
        
        this.printLinkedList()
      }

      deleteHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.printLinkedList()
    
      }
    
}

let head = new DoubleLinkedListNode(1)
let list = new DoubleLinkedList(head)
list.insert(2)
list.insert(3)
/* list.deleteHead() */
list.deleteTail()