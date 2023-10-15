function bombNums (nums, bomb) {

    
    let bombNum = Number(bomb[0]);
    let power = Number(bomb[1]);

    while(nums.includes(bombNum)){
        let idx = nums.indexOf(bombNum);
        nums.splice(Math.max(0, idx - power), 1 + 2 * power,0);

    }
    
    let sum = 0;
    for (num of nums){
        sum += num;
    }
    console.log(sum);

}
bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2] );
// bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]); 
// bombNums([1, 7, 7, 1, 2, 3], [7, 1] );
// bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);