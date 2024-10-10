// FIFO - First In First Out
// LIFO - Last In First Out.

class Stack{

    constructor(arr, size){
        this.stk = arr;
        this.size = size;
        this.top = size -1;
    }


    push(ele){
        if (this.stk.length >= this.size){
            throw Error('Stack is full');
        }
        this.stk.push(ele)
    }

    pop(){
        // remove last element of array.
        if (this.stk.length <= 0){
            throw Error('Stack is empty');
        }
        return this.stk.pop()
    }

    display(){
        console.log(this.stk);
    }
}

let stk1 = new Stack([1,2,3,4], 4);

stk1.display();

let pop1 = stk1.pop();
console.log("popped ele", pop1);
stk1.push(11);
stk1.display();

stk1.push(5);


