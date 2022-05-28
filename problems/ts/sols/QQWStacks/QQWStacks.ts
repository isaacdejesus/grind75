class MyStack {
    stack: number[];
    constructor() {
        this.stack = []
    }
    push(n: number) {
        this.stack.push(n)
    }
    pop(): number | null {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length-1];
    }
    isEmpty() {
        return this.stack.length == 0;
    }
}

class MyQueue {
    pushStack: MyStack;
    popStack: MyStack;
    constructor() {
        this.pushStack = new MyStack()
        this.popStack = new MyStack()
    }

    push(x: number): void {
        this.pushStack.push(x)
    }

    pop(): number {
        if(this.popStack.isEmpty()) {
            while(!this.pushStack.isEmpty()) {
                let n = this.pushStack.pop();
                this.popStack.push(n)
            }
        }
        return this.popStack.pop()
    }

    peek(): number {
        if(this.popStack.isEmpty()) {
            while(!this.pushStack.isEmpty()) {
                let n = this.pushStack.pop();
                this.popStack.push(n)
            }
        }
        return this.popStack.peek()
    }

    empty(): boolean {
        return this.pushStack.isEmpty() && this.popStack.isEmpty()
    }
}
