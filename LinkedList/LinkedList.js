const Node = require('./Node');

class LinkedList{
    constructor(){
        this.head = null;
    }

    printList(){
        if(this.isEmpty()){
            console.log("Linked List is empty!")
            return false;
        } else {
            let tmpNode = this.head;
            while(tmpNode != null ){
                process.stdout.write(String(tmpNode.data));
                process.stdout.write("->")
                tmpNode = tmpNode.next;
            }
            console.log("null");
            return true;
        }
    }

    getHead() {
        return this.head;
    }
    
    getListStr() {
        if (this.isEmpty()) {
          console.log("Empty List");
          return "null";
        } else {
          let st = "";
          let temp = this.head
          while (temp != null) {
            st += String(temp.data);
            st += " -> ";
            temp = temp.next;
          }
          st += "null";
          return st;
        }
    }

    insertAtTail(data){
        let newNode = new Node(data);
        let tmpNode = this.head;
        if (tmpNode === null) {
            this.head = newNode;
        } else {
            while(tmpNode.next != null){
                tmpNode = tmpNode.next;
            }
            tmpNode.next = newNode;
        }   
        return this;
    }
}

module.exports = LinkedList;