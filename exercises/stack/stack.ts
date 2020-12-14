type Node<T> = {
  edge?: Node<T>;
  value: T;
};
export default class Stack<T> {
  private head: Node<T> | undefined = undefined;
  // insert item at front
  push(value: T): void {
    const newNode: Node<T> = {
      edge: this.head,
      value,
    };
    this.head = newNode;
    return;
  }
  // remove item at front
  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    const oldHead = this.head;
    this.head = this.head.edge;
    return oldHead.value;
  }
  // get length of stack
  count(): number {
    return 0;
  }
}
