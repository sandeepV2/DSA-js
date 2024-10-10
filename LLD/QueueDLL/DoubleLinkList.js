const Node = require("./Node");

class DoubeLinkList{
    constructor(){
        this.start = null;
    }

    insertRear(data){
        // console.log("insert rear")
        let newNode = new Node(data);
        // console.log(this.start);
        if(this.start === null){
            this.start = newNode;
            // newNode.tail = this.start
        } else {
            let tmp = this.start;
            // console.log(tmp);
            while(tmp.head != null){
                tmp =tmp.head;
            }
            tmp.head = newNode;
            newNode.tail = tmp;
        }
        return this;
    }

    removeFront(){
        if(this.start === null){
            console.log("Queue is empty");
        } else {
            let tmp = this.start;
            this.start = tmp.head;
            tmp.tail = null;
            return tmp;
        }
    }

    printQueue(){
        if (this.start === null){
            console.log("Queue is empty!");
        } else {
            let tmp = this.start;
            while(tmp!= null){
                process.stdout.write(tmp.data);
                process.stdout.write("->");
                tmp = tmp.head;
            }
            console.log("null");
        }
    }

}

let dllObj = new DoubeLinkList();

for(let i=0;i<5;i++){
    dllObj.insertRear(String(i));
}

dllObj.printQueue();
dllObj.removeFront();
dllObj.removeFront();
dllObj.printQueue();