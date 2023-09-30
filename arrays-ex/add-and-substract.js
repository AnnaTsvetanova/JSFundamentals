function addAndSubstract(arr) {
    let modified = [];
    let oldSum = 0;
    let newSum = 0;
           
    for (let i = 0; i < arr.length; i++){
        let num = arr[i];
        oldSum += num;

        if (num % 2 == 0){
            num += i;
        } else {
            num -= i;
        }
        modified.push(num);
    } for (i = 0; i < modified.length; i++) {
        
        num = modified[i];
        newSum += num;
    }
    
    console.log(modified);
    console.log(oldSum);
    console.log(newSum);

}
addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);