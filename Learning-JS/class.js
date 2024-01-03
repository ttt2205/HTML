// Javascript Classes
// Phải khai báo thuộc tính trong Constructor.
// Thuộc tính được đặt theo quy tắt chung kèm "this._name" nói rằng đó là thuộc tính riêng tư.

/* class Pizza {
    constructor(pizzaType) {
        this._type = pizzaType;
        this._size = "medium";
        this._crust = "original";
    }
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
    bake() {
        console.log(
            `Baking a ${this._size} ${this._crust} ${this._crust} ${this._type} crust pizza.`
        );
    }
} */

/* const myPizza = new Pizza("pepperoni");
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust());
 */

/* class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this,size} pizza has 8 slices.`);
    }
}

const mySpecialty = new SpecialtyPizza("medium");
console.log(mySpecialty.slice()); */

/* Sử dụng Factory Function để khởi tạo một class và các thuộc tính có vùng private. */

function pizzaFactory(pizzaSize) {
    const crust = "origin";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust piiza.`)
    };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); 

/* Cách mới nhất hiện nay để khai báo thuộc tính private (có một số trình duyệt chưa hỗ trợ). */

class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaType) {
        this.#size = pizzaType;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(
            `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`
        );
    }
}
const newPizza = new Pizza ("large");
newPizza.hereYouGo();
