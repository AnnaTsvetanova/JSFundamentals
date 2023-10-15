function sorting (arr) {

    let ascendingOrder = arr.sort((a, b) => a - b) ;
    let result = [];

    for (let elements of arr) {
        
        while(arr.length > 0) {
            let i = 0;
            let firstEl = arr.pop();
            let secondEl = arr.shift();
            result.push(firstEl);
            result.push(secondEl);
            i++;
        }
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94] );
//sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
