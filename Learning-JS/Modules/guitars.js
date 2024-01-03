// khai báo export mặc định.
export default function playGuitar() {
    return "Playing guitar";
}

export const shredding = () => {
    return "Shredding some licks!";
}

export const plucking = () => {
    return "Plucking the strings...";
}

/* Cách 2: định nghĩa hàm và export sau.
const playGuitar = () => {
    return "Playing guitar";
}

const shredding = () => {
    return "Shredding some licks!";
}

const plucking = () => {
    return "Plucking the strings...";
}

export default playGuitar;
export {shredding, plucking};
*/