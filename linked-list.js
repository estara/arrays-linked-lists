/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;
    this.length += 1;
    this.tail = newNode;
    return undefined
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head !== null) {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    if (this.head === null) this.head = newNode;
    if (this.tail === null) this.tail = newNode;
    return undefined

  }

  /** pop(): return & remove last item. */

  pop() {
    try{
      const lastNode = this.tail;

      if (this.head === this.tail) {
        this.head = null; 
        this.tail = null;
        this.length = 0;
        return lastNode.val;
      }

      let current = this.head;
      while (current.next !== null) {
        if (current.next === lastNode) {
          this.tail = current;
          current.next = null;
          this.length -= 1;
          return lastNode.val
        }

        current = current.next;
      }
      
    } catch(err) {
      return "Error: not in list"
    }
    
  }

  /** shift(): return & remove first item. */

  shift() {
    try  {
      const firstNode = this.head;

      if (this.head === this.tail) {
        this.head = null; 
        this.tail = null;
        this.length = 0;
        return firstNode.val;
      }

      this.head = this.head.next;
      this.length -= 1;
      return firstNode.val
    } catch(err) {
      return "Error: not in list"
    }
    
  }
  

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    try{
    let count = 0;
    let current = this.head;

    while (count <= idx) {
      if (count === idx) {
        return current.val;
      }
      count += 1;
      current = current.next;
    }
  } catch (err) {
    return "Error: bad index";
  }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    try{
      if (idx === 0) {
        this.head.val = val;
      }
      if (idx === 1) {
        this.head.next.val = val;
      }
      let count = 1;
      let current = this.head;
  
      while (count <= idx) {
        if (count+1 === idx) {
          current.next.val = val;
          current.next = val;
        }
        count += 1;
        current = current.next;
      }
    } catch (err) {
      return "Error: bad index";
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    try{
      if (idx === this.length) {
        this.tail = newNode;
      }
      if (idx === 0 || idx === 1) {
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
        return undefined
      }
      let count = 0;
      let current = this.head;
  
      while (count < idx) {
        if (count+1 === idx) {
          newNode.next = current.next;
          current.next = newNode;
          this.length += 1;
          return undefined
        }
        count += 1;
        current = current.next;
      }
    } catch (err) {
      return "Error: bad index";
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let toReturn
    try{
      if (idx === 0) {
        toReturn = this.head.val;
        this.head = this.head.next;
        if (this.length === 1) {
          this.tail = null;
        }
        this.length -= 1;
        return toReturn
      }
      let count = 0;
      let current = this.head;
  
      while (count < idx) {
        if (count+1 === idx) {
          toReturn = current.next.val;
          current.next = current.next.next;
          this.length -= 1;
          return toReturn
        }
        count += 1;
        current = current.next;
      }
    } catch (err) {
      return "Error: bad index";
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.head === null) {return 0};
    let current = this.head;
    let total = 0;
    let count = 0;
    while (current !== null) {
      total += current.val;
      count += 1;
      current = current.next;
    }
    return total / count
  }
}

module.exports = LinkedList;
