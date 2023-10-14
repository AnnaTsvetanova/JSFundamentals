function smallestTwoNums (arr){
    let sorted = arr.sort((a, b) => a - b);
    let sliced = sorted.slice(0, 2).map(Number);

    console.log(sliced.join(' '));

       
}
smallestTwoNums([3, 0, 10, 4, 7, 3] );
//smallestTwoNums([30, 15, 50, 5]);