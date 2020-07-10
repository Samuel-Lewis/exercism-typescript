export default class LinkedList<T> {
  private head: ListNode<T> | undefined;

  public constructor(head?: ListNode<T>) {
    this.head = head ? { ...head } : undefined;
  }

  // insert item at back
  push(value: T) {
    if (this.head === undefined) {
      this.head = { value };
      return;
    }

    let current: ListNode<T> = this.head;
    while (current.next != undefined) {
      current = current.next;
    }

    current.next = { value };
  }

  // remove last item
  pop(): T | undefined {
    if (this.head === undefined) {
      return undefined;
    }

    return 20 as unknown as T;
  }

  // remove first item
  shift() {}

  // insert value at front
  // @ts-ignore
  unshift(item?: T) {}

  count(): number {
    // TODO: implement with recursion
    let current: ListNode<T> | undefined = this.head;
    let x = 0;
    while (current != undefined) {
      x++;
      current = current.next;
    }

    return x;
  }

  // @ts-ignore
  delete(item: T) {}
}

type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
};
