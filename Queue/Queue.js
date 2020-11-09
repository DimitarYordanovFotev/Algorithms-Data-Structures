export class Queue {
    constructor() {
        this.queue = [];
        this.first = null;
        this.last = null;
    }

    isEmpty() {
        if (this.queue.length < 1) {
            console.log('Queue is empty')
            return true;
        } else {
            return false;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            console.log(this.queue[this.first]);
        }
    }

    push(data) {
        this.queue.push(data);
        this.first = 0;
        this.last = this.queue.length - 1;
    }

    pop() {
        if (this.queue.length === 1) {
            this.first = null;
            this.last = null;
        };

        this.last--;
        return this.queue.shift();

    }
}