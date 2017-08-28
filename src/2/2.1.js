// Remove Dups 

// Write code to remove duplicates from an unsorted linked list. 

// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

function removeDuplicatesSet(list) {
  // let result = { val: list.val};
  let result = [];
  let traverse = (node) => { 
    if (node === null) { return }
    console.log('node =>', node);
    
    // result.next.val = node.next.val;
    result.push(node.val);
    traverse(node.next) 
  }

  traverse(list);
  console.log('result =>', result);
  return result;
}
let a = { val: 1, next: { val: 2, next: { val: 3, next: null} } };
removeDuplicatesSet(a)

const Node = (data) => {
  this.data = data;
  this.next = null;
}
const LinkedList = () => {
  this._length = 0;
  this.head = null;
}

/*
let set = Set()
let resultNode = {};
traverse the linked list
  if val === null, return true
  if val exists in the set
  else traverse(list.next)

*/