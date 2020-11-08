import { DoubleLinkedListNode, DoubleLinkedList } from './DoubleLinkedList.js';

export class CircularLinkedListNode extends DoubleLinkedListNode {

}

export class CircularLinkedList extends DoubleLinkedList {
    insert(data) {
        let node = new CircularLinkedListNode(data);
        let tempNode = this.head;

        while (tempNode.next !== this.head &&
            tempNode.next !== null) {
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
        if (this.head.prev) {
            this.head.prev.next = this.head.next
        }
        if (this.head.next) {
            this.head.next.prev = this.head.prev;
            this.head = this.head.next;
        }

        if (this.head.next === null &&
            this.head.prev === null) {
            console.log('List is empty');
            return;
        }

        this.printLinkedList();
    }

    deleteTail() {
        let node = this.head;

        while (node && 
               node.next !== this.head &&
               node.next !== null ) {
            node = node.next;
        }

        if (node === this.head){ 
            this.deleteHead(); 
            return;
        }

        this.head.prev = node.prev;
        node.prev.next = this.head;

        this.printLinkedList();

    }
}