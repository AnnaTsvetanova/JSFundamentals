function employees (employees) {

    for (let employee of employees) {
        let name = employee;
        let personalNum = Number(employee.length);
        
        let person = {name: name, personalNum: personalNum};
        

        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ] );
// employees([
// 'Samuel Jackson',
// 'Will Smith',
// 'Bruce Willis',
// 'Tom Holland'
// ]);