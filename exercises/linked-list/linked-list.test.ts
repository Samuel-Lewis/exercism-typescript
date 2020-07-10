import LinkedList from './linked-list';

describe('LinkedList', () => {
  it('count works without items', () => {
    const list = new LinkedList<number>();
    expect(list.count()).toBe(0);
  });

  it('count works with one defined item', () => {
    const head = {
      value: 10,
    };
    const list = new LinkedList<number>(head);
    expect(list.count()).toBe(1);
  });

  it('count works with next value defined in head', () => {
    const head = {
      value: 10,
      next: {
        value: 11,
      },
    };
    const list = new LinkedList<number>(head);
    expect(list.count()).toBe(2);
  });

  it('list works with push', () => {
    const list = new LinkedList<number>();
    list.push(1);
    expect(list.count()).toBe(1);
  });

  it('list works with push twice', () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(800000);
    expect(list.count()).toBe(2);
  });

  it('list pop returns last item', () => {
    const head = {
      value: 10,
      next: { value: 20 },
    };
    const list = new LinkedList<number>(head);
    expect(list.pop()).toBe(head.next.value);
  });

  it('list pop returns undefined for empty list', () => {
    const list = new LinkedList<number>();
    expect(list.pop()).toBeUndefined();
  });

  // it('list to have correct content after push', () => {
  //   const head = {
  //     value: 10,
  //     next: { value: 20 },
  //   };
  //   const list = new LinkedList<number>(head);
  //   expect(list.pop()).toBe(head.next.value);
  // });

  // ---
  xit('add/extract elements to the end of the list with push/pop', () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    expect(list.pop()).toBe(10);
  });

  xit('extract elements from the beginning of the list with shift', () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    expect(list.shift()).toBe(10);
    expect(list.shift()).toBe(20);
  });

  xit('add/extract elements from the beginning of the list with unshift/shift', () => {
    const list = new LinkedList<number>();
    list.unshift(10);
    list.unshift(20);
    expect(list.shift()).toBe(20);
    expect(list.shift()).toBe(10);
  });

  xit('unshift/pop', () => {
    const list = new LinkedList<number>();
    list.unshift(10);
    list.unshift(20);
    expect(list.pop()).toBe(10);
    expect(list.pop()).toBe(20);
  });

  xit('example', () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    list.push(30);
    expect(list.shift()).toBe(10);
    list.unshift(40);
    list.push(50);
    expect(list.shift()).toBe(40);
    expect(list.pop()).toBe(50);
    expect(list.shift()).toBe(30);
  });

  xit('can count its elements', () => {
    const list = new LinkedList<number>();
    expect(list.count()).toBe(0);
    list.push(10);
    expect(list.count()).toBe(1);
    list.push(20);
    expect(list.count()).toBe(2);
  });

  xit('sets head/tail after popping last element', () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.pop();
    list.unshift(20);
    expect(list.count()).toBe(1);
    expect(list.pop()).toBe(20);
  });

  xit('sets head/tail after shifting last element', () => {
    const list = new LinkedList<number>();
    list.unshift(10);
    list.shift();
    list.push(20);
    expect(list.count()).toBe(1);
    expect(list.shift()).toBe(20);
  });

  xit('deletes the element with the specified value from the list', () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    list.push(30);
    list.delete(20);
    expect(list.count()).toBe(2);
    expect(list.pop()).toBe(30);
    expect(list.shift()).toBe(10);
  });

  xit('deletes the only element', () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.delete(10);
    expect(list.count()).toBe(0);
  });

  xit('delete does not modify the list if the element is not found', () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.delete(20);
    expect(list.count()).toBe(1);
  });
});
