function showMessage () {
    alert("This message is inside the function");
}
showMessage();

function sum(number1, number2){
    return number1 + number2;
}
console.log(sum(25, 5));

function toCelcius(f){
    return(5/9) * (f-32);
}
console.log("54 fahrenheit is equal to "+toCelcius(54)+" celcius")

var result = toCelcius(54);
console.log("54 fahrenheit is equal to "+result+" celcius"); 

var arrowFunction = () => alert("Hello World");
arrowFunction();

var arrowFunction = name => alert('Hello World ${name}');
arrowFunction("Jhon Doe");

function dsFunction(){
    var localVar = "Digital School";
    alert(localVar)
}

//alert(localVar)
function toSeconds(minuter){
    return minutes * 60;
}
console.log(toSeconds(60));

function triangleArea(baseLength, height){
    return 0.5 * baseLength * height
}
console.log(triangleArea(5, 7));

//Object
var car = {
    name: "Mercedes",
    color: "red",
    year: 2020, 
    kilometera: 0,
    startEngine : function() {
        alert("Vroooom!!!")
    },
    get getKilometers() {
        return this.kilometers;
    },
    set setkilometers(km) {
        this.kilometers = km;
    }
};

console.log(car.getKilometers);
car.setkilometers = 100;
console.log(car.getKilometers);

var school = {
    name: "Digital School",
    subject: "programing",
    students: 1500,
    year: 2024,
};
alert(car.name);
alert(car['color']);
car.startEngine();

var computer = new Object();
computer.name = "Lenovo";
computer.CPU = "Intel Core i7";
computer.RAM = "16GB";
computer.GPU = "GeForce GT730 2GB Dual DP HP";

computer.type = function() {
    return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU;
};

alert(computer.GPU);
alert(computer.type());
delete computer.GPU;
alert(computer.GPU);

function Computer(name, CPU, RAM, GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM
    this.GPU = GPU;
}
var copmuter1 = new Computer("MacBook Pro", "M1 8-core", "8GB", "5600M GPU");
var copmuter2 = new Computer("Acer", "Intel Core i3", "4GB", "Intergrated");