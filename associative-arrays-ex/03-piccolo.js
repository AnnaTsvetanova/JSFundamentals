function piccolo (arr) {
    let carRegistry = new Set();
    
    for (element of arr) {
        let tokens = element.split(', ');
        let command = tokens[0];
        let carReg = tokens[1];

        if (command == 'IN'){
            carRegistry.add(carReg);
        } else {
            carRegistry.delete(carReg);
        }
        if (carRegistry.size <= 0) {
            console.log("Parking Lot is Empty");
            return;
        }
    } let sorted = Array.from(carRegistry).sort((a, b) => a.localeCompare(b));
    console.log(sorted.join('\n'));

}
// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ]);
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);