function softUniReception (arr){

    let studentsPerHour = arr.map(Number);
    let studentsCount = Number(studentsPerHour.pop());

    let totalEfficiency = studentsPerHour.reduce((acc, val) => acc + val, 0);
    let hours = 0;

    while (studentsCount > 0) {
    hours++;

    if (hours % 4 === 0) {
      
        continue;
    }

    studentsCount -= totalEfficiency;

    if (studentsCount < 0) {
      studentsCount = 0;
    }
  }

    console.log(`Time needed: ${hours}h.`);

}
softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
//softUniReception(['3','2','5','40']);