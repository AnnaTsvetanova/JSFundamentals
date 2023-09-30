function rotation(arr, num){
    
    for (let i = 0; i < num; i++){
        let el = arr.shift(arr[i]);
        arr.push(el);
    } console.log(arr.join(' '));
}
rotation([51, 47, 32, 61, 21], 2);
rotation([32, 21, 61, 1], 4);
rotation([2, 4, 15, 31], 5);