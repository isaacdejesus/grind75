class MinStack {
        minArray: Array<number> = [];
        stack: Array<number>;
    constructor(stack=[]) {
                this.stack = [...stack]
    }
    push(x: number): void {
                this.stack.push(x);
                if (!this.minArray.length) this.minArray.push(x);
                else if (this.minArray[this.minArray.length - 1] >= x) this.minArray.push(x);
    }
    pop(): void {
                const lastItem = this.stack.pop();
                if (this.minArray[this.minArray.length - 1] === lastItem) this.minArray.pop();
    }
    top(): number {
                return this.stack[this.stack.length - 1];
    }

    getMin(): number {
                return this.minArray[this.minArray.length - 1];
    }
    
}
