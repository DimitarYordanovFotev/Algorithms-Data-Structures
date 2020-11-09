export class Stack {

    constructor() {
        this.stack = [];
        this.top = null;
    }

    isEmpty() {
        if (this.stack.length < 1) {
            console.log('Stack is empty')
            return true;
        } else {
            return false;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            console.log(this.stack[this.top]);
        }
    }

    push(data) {
        this.stack.push(data);
        this.top = this.stack.length - 1;
    }

    pop() {
        if (!this.isEmpty()) {
            this.top--
            return this.stack.pop();
        }
    }
}