function sumDigit (num) {

    let sum = 0;
    let numAsString = String(num);

    for(let i = 0; i < numAsString.length; i++){
        let currNum = Number(numAsString[i]);
        sum += currNum;
    }
    console.log(sum);


}
sumDigit(245678);
// sumDigit(97561);
// sumDigit(543);