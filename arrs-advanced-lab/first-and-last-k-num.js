function firstAnsLastKNum (arr){
    let k = Number(arr[0]);

    
    
    let result1 = arr.slice(1, k + 1);
    let result2 = arr.slice(arr.length - k);
    console.log(result1.join(' '));
    console.log(result2.join(' '));

}
firstAnsLastKNum([3, 6, 7, 8, 9]);
// firstAnsLastKNum([2, 7, 8, 9]);