function sumFirstLast (arr) {
let first = arr.pop();
let last = arr.shift();

let sum = Number(first) + Number(last);
console.log(sum);
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);