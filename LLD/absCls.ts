abstract class Shape {
    name: string;
    constructor(name: string) {
       this.name = name;
    }
    
    abstract getArea(): number;
}
  
class Circle extends Shape {
    radius: number;
    constructor(name: string, radius:number){
       super(name);
       this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
}
  
class Rectangle extends Shape {
    length: number;
     width: number;
  
     constructor(name:string, length:number, width:number){
       super(name);
       this.length = length;
       this.width = width;
     }
  
} 
  
const smallRectangle = new Rectangle("Small Rectangle", 3, 5) // This will throw an error.