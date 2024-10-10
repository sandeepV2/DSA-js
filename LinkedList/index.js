const LinkedList = require('./LinkedList.js');
// import { LinkedList } from './LinkedList';
const Node = require('./Node.js');

LinkedList.prototype.isEmpty = function() {
    return (this.head == null); // returns true if head is null, false otherwise
}

LinkedList.prototype.insertAtHead = function(data){
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this;
}

let list = new LinkedList();
let list1 = new LinkedList();
console.log(list.isEmpty()); 

for(let i=0;i<10;i++){
    list = list.insertAtHead(i);
    list1 = list1.insertAtTail(i);
}


console.log(list.getListStr());
console.log(list1.getListStr());


