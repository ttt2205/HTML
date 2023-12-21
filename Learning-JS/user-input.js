let input = prompt(`Enter your name!`);
/* console.log(input ?? "You didn't enter your name");
Knowlede Eski: nếu input ko có giá trị input thì trả về null và in ra "You didn't enter your name" */
if(input) {
    console.log(input.length);
    console.log(input.trim().length);
    console.log(input.trim());
} else {
    console.log("You didn't enter your name.");
}