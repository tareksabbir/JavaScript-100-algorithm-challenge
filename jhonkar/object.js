const car = {
    name: "bmw",
    model: "a750",
    serialNumber: 654789,
    color: "white",
    start: function () {
        console.log('the are started');
    },
    feature: function () {
        this.stop();
        console.log('music is on');
    },
    stop: function () {
        console.log('the care stoped');
    },
}

console.log(car);
console.log(car.color);
console.log(car.serialNumber);
car.feature();

if (car.serialNumber.toString().includes(654789)) {
    console.log('all ok')
}


