/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {

  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  };


  function add(value) {
    let node = {
      value: value,
      next: null,
    }
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
    return node
  };



  function get(num) {
    let currentNode = head;
    let count = 0;
    while (count < num) {
      if (currentNode.next === null) {
        return false;
      }
      count++;
      currentNode = currentNode.next
    }if(num === count){
      
      return currentNode
    }else{
      return false;
    }
  }


  function remove(index) {

    let currentNode = get(index)

    let prevNode = get(index - 1);
    if (!currentNode) {
      return false;
    } else if (index === 0) {
      head = head.next;
      if (head === null) {
        tail = null;
      }
    } else if (currentNode.next === null) {
      prevNode.next = null;
      tail = prevNode;
    } else(prevNode.next = currentNode.next)


  }






  function insert(newValue, index) {
    let currentNode = get(index);
    let prevNode = get(index - 1)
   
    let newNode = {
      value: newValue,
      next: currentNode,
    }
   
    if (currentNode === false) {
      return false;
    }else if(index === 0){
      head = newNode
    }else{
      prevNode.next=newNode;

    }

  }
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
  }
}