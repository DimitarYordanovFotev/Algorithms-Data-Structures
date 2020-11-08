import { ListNode, LinkedList } from './LinkedList.js';

export class DoubleLinkedListNode extends ListNode{
    constructor(data){
        super(data);
        this.prev = null;
    }
}

export class DoubleLinkedList extends LinkedList{
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
