function taxCalculator (input) {
    let str = input[0];
    let data = str.split('>>');
    let totalTax = 0;
    let taxAll = 0;
    

    for (let element of data) {
    let tokens = element.split(' ');
    let type = tokens[0];

    if (type == 'family') {
        totalTax = 50;        
        let yearPaid = Number(tokens[1]);
        let kilometers = Number(tokens[2]);
        
        let declined = 5 * yearPaid;
        totalTax -= declined;

        let increased = Math.floor(kilometers / 3000) * 12;
        totalTax += increased;
        taxAll += totalTax;
        console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
    
    } else if (type == 'heavyDuty') {
        totalTax = 80;        
        let yearPaid = Number(tokens[1]);
        let kilometers = Number(tokens[2]);
        
        let declined = 8 * yearPaid;
        totalTax -= declined;

        let increased = Math.floor(kilometers / 9000) * 14;
        totalTax += increased;
        taxAll += totalTax;
        console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);

    } else if (type == 'sports') {
        totalTax = 100;        
        let yearPaid = Number(tokens[1]);
        let kilometers = Number(tokens[2]);
        
        let declined = 9 * yearPaid;
        totalTax -= declined;

        let increased = Math.floor(kilometers / 2000) * 18;
        totalTax += increased;
        taxAll += totalTax;
        console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);        
    } else {
        console.log('Invalid car type.');
        continue;
    }} console.log(`The National Revenue Agency will collect ${taxAll.toFixed(2)} euros in taxes.`);
}

//taxCalculator((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']));
taxCalculator((['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]));
