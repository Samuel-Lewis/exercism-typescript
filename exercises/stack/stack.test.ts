import Stack from './stack';

describe('Stack', () => {
  it('stack pop returns undefined for empty stack', () => {
    const stack = new Stack<number>();
    expect(stack.pop()).toBeUndefined();
  });

  xit('stack pop returns last item', () => {
    const stack = new Stack<number>();
    stack.push(100);
    expect(stack.pop()).toBe(100);
  });

  xit('add/extract elements to the end of the stack with push/pop', () => {
    const stack = new Stack<number>();
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
  });

  xit('example', () => {
    const stack = new Stack<number>();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toBe(30);
    stack.push(40);
    expect(stack.pop()).toBe(40);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
  });

  describe.skip('size', () => {
    it('count works without items', () => {
      const stack = new Stack<number>();
      expect(stack.count()).toBe(0);
    });

    it('stack works with push', () => {
      const stack = new Stack<number>();
      stack.push(1);
      expect(stack.count()).toBe(1);
    });

    it('stack works with push twice', () => {
      const stack = new Stack<number>();
      stack.push(1);
      stack.push(800000);
      expect(stack.count()).toBe(2);
    });

    it('can count its elements', () => {
      const stack = new Stack<number>();
      expect(stack.count()).toBe(0);
      stack.push(10);
      expect(stack.count()).toBe(1);
      stack.push(20);
      expect(stack.count()).toBe(2);
      stack.pop();
      expect(stack.count()).toBe(1);
    });
  });
});
