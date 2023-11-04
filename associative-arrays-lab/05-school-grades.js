function schoolGrades (arr) {

    let school = {};

    for (let element of arr) {
       let tokens = element.split(' ');
       let name = tokens.shift();

       let totalGrade = 0;
             
       for(grade of tokens) {
        totalGrade += Number(grade);
       }

       let avgGrade = (totalGrade / tokens.length).toFixed(2);

       if (school.hasOwnProperty(name)) {
        school[name] = ((parseFloat(avgGrade) + parseFloat(school[name])) / 2).toFixed(2);
        } else {
        school[name] = avgGrade;
        }
    }   

    let entries = Object.entries(school);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
        
    for (let [name, avgGrade] of entries){
        console.log(name + ': ' + avgGrade);
    }
}

// schoolGrades(['Lilly 4 6 6 5',
// 'Tim 5 6',
// 'Tammy 2 4 3',
// 'Tim 6 6']);

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);