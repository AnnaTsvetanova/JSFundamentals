function oddAndEvenSum(num) {
    
  let numAsStr = String(num);

  let [evenSum, oddSum] = calcEvenOddSum(numAsStr)
  
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  
  function calcEvenOddSum(str){
    let evenSum = 0;
    let oddSum = 0;

    for (let char of str) {
      let curNum = Number(char);
      
      if (curNum % 2 == 0) {
        evenSum += curNum;
      } else {
        oddSum += curNum;
      }
    }
    return [evenSum, oddSum];
  }
  
}
oddAndEvenSum(1000435);
//oddAndEvenSum(3495892137259234);
