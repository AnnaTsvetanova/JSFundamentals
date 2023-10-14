function processOddNums (arr){

    let reversed = [];

    for (i = 0; i < arr.length; i++){
        
        if(i % 2 !== 0){
            let num = 2 * arr[i];
            reversed.unshift(num);
        }
    }
    console.log(reversed.join(' '));

}
processOddNums([3, 0, 10, 4, 7, 3]);
//processOddNums([10, 15, 20, 25]);
