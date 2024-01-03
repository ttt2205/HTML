// Modules

/* Cách 1: (có thể dùng as để đổi tên các hàm được import bằng as)
import playGuitar from "./guitars";
import { shredding as shred, plucking as fingerpicking} from "./guitars"; */

/* Cách 2: */
import * as Guitars from "./guitars";
import User from "./user.js";

// dùng cho các hàm riêng cần import.
console.log(Guitars.default()); // dùng default cho thuộc tính hoặc hàm mặc định.
console.log(Guitars.shredding());
console.log(Guitars.plucking());

// dùng các import của class.
const me = new User("email@email.com", "Dave");
console.log(me);
console.log(me.greeting());