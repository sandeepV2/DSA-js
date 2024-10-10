class Circle {
  #radius;
  #pi;
  //define data attributes within the constructor
  constructor (radius = 0) {
    this.radius = radius;
    this.pi = 3.142
  }
  //define methods
  getArea() {
    return this.pi * Math.pow(this.radius, 2);
  }
  getPerimeter() {
    return 2 * this.pi * this.radius;
  }
};

const circle = new Circle(5);
console.log("Area: " + circle.getArea().toFixed(2));
console.log("Perimeter: " + circle.getPerimeter().toFixed(2));

console.log(circle.radius);
circle.radius = 10;
console.log(circle.radius);
console.log("Area: " + circle.getArea().toFixed(2));
