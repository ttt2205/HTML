// Web Storage API

// Not part of the DOM = refers to the Window API. (Không phải là một phần của DOM - đề cập đến cửa sổ API).
// Available to JS via the global variable: window (nó hiện có sẵn để truy cập qua biến toàn cục.)

// We do not have to type window. It is implied:

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Trung",
    hobbies:  ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
};

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const  myLocalStore = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalStore);