interface StackDataStructure<T> {
  push(newItem: T): void;
  pop(): T;
}

export class Stack<T> implements StackDataStructure<T> {
  items: Array<T> = [];

  push(newItem: T): void {
    this.items.push(newItem);
  }

  pop(): T {
    return this.items.pop();
  }

  peek(): T {
    return this.items[this.items.length - 1];
  }
}
