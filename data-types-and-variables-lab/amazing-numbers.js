function amazingNumbers(num) {
  let numAsString = num.toString();
  let sum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    let currNum = Number(numAsString[i]);
    sum += currNum;
  }
  let sumAsSting = sum.toString();
  let currSym = '';
  let j = 0;

  while (currSym != 9 && j < sumAsSting.length) {
      currSym = sumAsSting[j];

    if (currSym == 9) {
      console.log(`${num} Amazing? True`);
      return;
    }
    j++;
  }
  console.log(`${num} Amazing? False`);
}

//amazingNumbers(999);
amazingNumbers(583472);
