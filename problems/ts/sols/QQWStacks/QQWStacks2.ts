class MyQueue2 {
    stack: number[] = []
    reverseStack: number[] = []

    push(x: number): void {
        while (this.reverseStack.length) {
            this.stack.push(this.reverseStack.pop())
        }
        this.stack.push(x)
        while (this.stack.length) {
            this.reverseStack.push(this.stack.pop())
        }
    }

    pop(): number {
        return this.reverseStack.pop()
    }

    peek(): number {
        return this.reverseStack[this.reverseStack.length - 1]
    }

    empty(): boolean {
        return this.reverseStack.length === 0
    }
}
