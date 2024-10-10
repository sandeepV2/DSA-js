// Composition
// Composition is a "part-of" relationship where one object is composed of one or more objects. 
// The composed objects cannot exist independently of the container object.

// Example: Computer and Components
// In this example, a Computer is composed of CPU and RAM objects. 
// The CPU and RAM objects cannot exist independently of the Computer.

class CPU {
    constructor(model) {
        this.model = model;
    }
}

class RAM {
    constructor(size) {
        this.size = size;
    }
}

class Computer {
    constructor(cpuModel, ramSize) {
        this.cpu = new CPU(cpuModel);
        this.ram = new RAM(ramSize);
    }

    getSpecs() {
        return `CPU: ${this.cpu.model}, RAM: ${this.ram.size}GB`;
    }
}

// Creating a computer with specific CPU and RAM
const myComputer = new Computer("Intel i7", 16);

console.log(myComputer.getSpecs());
