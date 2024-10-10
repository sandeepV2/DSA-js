class Button {
    #status;

    constructor(status = null) {
        if (this.constructor === Button) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.#status = status;
    }

    pressDown() {
        throw new Error("Method 'pressDown()' must be implemented.");
    }

    isPressed() {
        throw new Error("Method 'isPressed()' must be implemented.");
    }
}

// let Obj = new Button();
// console.log(Obj);

class ElevatorButton extends Button{
    #direction;
    constructor(direction, status){
        super(status);
        this.#direction = direction;
    }
}

let eleObj = new ElevatorButton('UP', true);

console.log(eleObj, eleObj.status);