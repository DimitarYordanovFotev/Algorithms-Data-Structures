import { DoubleLinkedListNode, DoubleLinkedList } from './DoubleLinkedList.js';

export class CircularLinkedListNode extends DoubleLinkedListNode{

}

export class CircularLinkedList extends DoubleLinkedList {
    insert(data) {
        let node = new CircularLinkedListNode(data);
        let tempNode = this.head;
    
        while (tempNode.next !== this.head &&
               tempNode.next !== null ) {
          tempNode = tempNode.next;
        }
    
        node.prev = tempNode;
        node.next = this.head;
        tempNode.next = node;
        this.head.prev = node;
        
        this.printLinkedList()
      }

      printLinkedList() {
        let arr = [];
        let node = this.head.next;

        arr.push(this.head);
    
        while (node && node !== this.head) {
          arr.push(node);
          node = node.next;
        }
    
        console.log(arr);
      }

      deleteHead() {
        this.head.next.prev = this.head.prev;
        this.head.prev.next = this.head.next
        this.head = this.head.next;
        this.printLinkedList();
    
      }

      deleteTail(){
        let node = this.head;
    
        while(node.next !== this.head){
          node = node.next;
        }
    
        this.head.prev = node.prev;
        node.prev.next = this.head;

        this.printLinkedList();
    
      }
}