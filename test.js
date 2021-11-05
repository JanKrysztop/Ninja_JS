

var Car = function(maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };

}

var myCar = new Car (70, "Ninja Man");
var myCar2 = new Car (30, "Grandma");
var myCar3 = new Car (20, "Johnny");
var myCar4 = new Car (110, "Levi");

myCar.drive(30, 5);
myCar4.logDriver();