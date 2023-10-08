function reverseArr (n, inputArr) {
    let arr = [];

    for(let i = 0; i < n; i++) {
        arr[i] = inputArr[i];
    } 
    let outputArr = [];
    for ( let i = n - 1; i >= 0; i--) {
        outputArr[outputArr.length] = arr[i];
    } 

console.log(outputArr.join(' '));
}
reverseArr(2, [66, 43, 75, 89, 47]);
reverseArr(4, [-1, 20, 99, 5]);
reverseArr(3, [10, 20, 30, 40, 50]);