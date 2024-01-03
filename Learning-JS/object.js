// Objects
// Key-value pairs in curly braces
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrroooom!";
    }
};
// Inheritance (kế thừa)
const car = Object.create(vehicle); 
car.doors = 4;
car.engine = function() {
    return "Whoooosh!";
};
console.log(car.engine());
console.log(car.wheels);

// Inheritance cấp 2
const tesla = Object.create(car);
console.log(tesla.engine());
console.log(tesla.wheels);
tesla.engine = function() {
    return "Shhhhhh...!";
};
console.log(tesla.engine());

// VD2: thao tác trên đối tượng
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

/* delete band.drums; // hàm xóa key
console.log(band.hasOwnProperty("drums")); // kiểm tra drums key có tồn tại hay không. Có trả về true ngược lại trả về false.  */

console.log(Object.keys(band)); // liệt kê các keys của Object.
console.log(Object.values(band)); // liệt kê các values của Object.

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

// destructuring objects

/* // Cách 1:
const {vocals, guitar, bass, drums} = band;
console.log(guitar);
console.log(vocals); */

/* // Cách 2:
function sings({ vocals }) {
    return `${vocals} sings!`;
};
console.log(sings(band)); */