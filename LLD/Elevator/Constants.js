// definition of enumerations used in elevator system
const ElevatorState = Object.freeze({
	IDLE: 1,
    UP: 2,
    DOWN : 3
});
const Direction = Object.freeze({
    UP:1,
    DOWN :2
});
const DoorState = Object.freeze({
	OPEN:1,
    CLOSE:2
});

console.log(ElevatorState.IDLE);

// enum CarName {
//     Honda,
//     Toyota,
//     Alto,
//     Swift,
// }
// console.log(CarName);
// console.log("Value of Alto is : "+ CarName.Alto);