function sumOfOdd(num) {
    numCount = 0;
    numSum = 0;
    let i = 1;

    while(numCount<num) {
        
        if (i % 2 != 0) {
        console.log(i);
        numSum += i;
        numCount++;
        i +=2;
    }      
    }  console.log(`Sum: ${numSum}`);
}
sumOfOdd(5)