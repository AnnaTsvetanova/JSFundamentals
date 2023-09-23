function specialNumbers(num) {
  let result = "";

  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let currNum = i;

    while (currNum > 0) {
      let unit = currNum % 10;
      sum += parseInt(unit);
      currNum = parseInt(currNum / 10);
    }
    if (sum == 5 || sum == 7 || sum == 11) {
      result += `${i} -> True\n`;
    } else {
      result += `${i} -> False\n`;
    }
  }
  console.log(result.trim());
}
specialNumbers(15);
