function pyramid(base, increment) {
  let stoneCount = 0;
  let marbleCount = 0;
  let lapisCount = 0;
  let goldCount = 0;

  let currBase = 0;
  let stepsCount = 0;
  let totalSteps = 0;
  let finalHight = 0;

  for (i = base; i >= 1; i -= 2) {
    totalSteps++;
  } finalHight = totalSteps * increment;
  let j = 1;

  while (j < totalSteps) {
    currBase = base * base * increment;
    let currStoneBase = (base - 2) * (base - 2) * increment;
    stoneCount += currStoneBase;

    let currMarbleCount = currBase - currStoneBase;
    marbleCount += currMarbleCount;
    

    if (j % 5 == 0) {
      let currLapisBase = currMarbleCount;
      marbleCount -= currLapisBase;
      lapisCount += currLapisBase;
    } 
    j++;
    stepsCount++;
    base -=2;
  }
  if (j == totalSteps) {
    goldCount = base * base * increment;
  }

  console.log(`Stone required: ${Math.ceil(stoneCount)}`);
  console.log(`Marble required: ${Math.ceil(marbleCount)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisCount)}`);
  console.log(`Gold required: ${Math.ceil(goldCount)}`);
  console.log(`Final pyramid height: ${Math.trunc(finalHight)}`);
}

pyramid(12, 1);
