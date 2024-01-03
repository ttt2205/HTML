// JavaScript Errors and Error Handling
"use strict"; // dùng để đặt sự nghiêm ngặt cho đoạn code.

/* const makeError = () => {
    try {
        // throw new: để thêm một hàm bắt lỗi tự tạo.
        throw new customError("This is a custom error!");
    } catch(err) {
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    }
};
makeError();

// tạo hàm báo lỗi.
function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
} */

const makeError = () => {
    let i = 1;
    while(i <= 5) {
        try {
            if(i % 2 !== 0) {
                throw new Error("Oddd number!");
            }
            console.log("Even number!");
        } catch(err) {
            console.error(err.stack);
        } finally {
            console.log("...finally");
            i++;
        }
    }
};
makeError();