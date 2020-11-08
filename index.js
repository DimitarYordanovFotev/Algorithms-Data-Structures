import { CircularLinkedListNode, CircularLinkedList  } from './LinkedLists/CircularLinkedList.js';

let head = new CircularLinkedListNode(1)
let list = new CircularLinkedList(head)
/* list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5) */
/* list.deleteHead() */
list.deleteTail()