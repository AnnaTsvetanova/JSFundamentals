function companyUsers (arr) {
    let companyInfo = {};

    for (let elements of arr) {
        let [company, id] = elements.split(' -> ');

        
        if(company in companyInfo) {
            if(!companyInfo[company].includes(id)){
            companyInfo[company].push(id);
        } }
        else {
            companyInfo[company] = [id];
        }  
    } let entries = Object .entries(companyInfo).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, employeeIds] of entries) {
        console.log(name);
        employeeIds.forEach(id => console.log(`-- ${id}`));
    }

}
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);
//companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]);