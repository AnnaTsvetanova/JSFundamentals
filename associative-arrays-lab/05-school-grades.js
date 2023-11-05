function schoolGrades(input) {
    let school = {};
    input.forEach(el => {
        el = el.split(' ');
        let name = el.shift();
        let grades = el.map(Number);
        school.hasOwnProperty(name) ? school[name].push(...grades) : school[name] = grades; 
    });
    
    let sortedEntries = Object.entries(school).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [studentName, grade] of sortedEntries) {
        let averageGrade = grade.reduce((a, b) => a + b, 0) / grade.length;
        console.log(`${studentName}: ${averageGrade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);

// schoolGrades(['Steven 3 5 6 4',
// 'George 4 6',
// 'Tammy 2 5 3',
// 'Steven 6 3']);