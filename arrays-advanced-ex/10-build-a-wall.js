function buildWall(sections) {
    let dailyConcrete = [];
  
    let totalCost = 0;
    let isIncomplete = true;
  
    while (isIncomplete) {
      let dailyUsage = 0;
      isIncomplete = false; 
  
      for (let i = 0; i < sections.length; i++) {
        if (sections[i] < 30) {
          sections[i] += 1; 
          dailyUsage += 195;
  
          if (sections[i] < 30) {
            
            isIncomplete = true;
          }
        }
      }
  
      dailyConcrete.push(dailyUsage);
      totalCost += dailyUsage * 1900;
    }
  
    console.log(dailyConcrete.join(', '));
    console.log(totalCost + ' pesos');
  } 


buildWall([21, 25, 28]);
// buildWall([17]);
// buildWall([17, 22, 17, 19, 17]);
