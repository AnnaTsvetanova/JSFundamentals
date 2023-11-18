function furniture (input){
    let items = [];
    let totalSpent = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

    let command = input.shift();


    while(command != 'Purchase'){

        let match = command.match(pattern);

        if(match) {

            let {name, price, qty} = match.groups;
            items.push(name);
            let furniturePrice = Number(qty) * Number(price);
            totalSpent += furniturePrice;
        }

        command = input.shift();
    } 
    console.log('Bought furniture:');

    if(items.length > 0) {
    console.log(items.join('\n'));
    }
    console.log(`Total money spend: ${totalSpent.toFixed(2)}`);
}
// furniture(['>>Sofa<<312.23!3',
// '>>TV<<300!5',
// '>Invalid<<!5',
// 'Purchase']);

// furniture(['>>Laptop<<312.2323!3',
// '>>TV<<300.21314!5',
// '>Invalid<<!5',
// '>>TV<<300.21314!20',
// '>>Invalid<!5',
// '>>TV<<30.21314!5',
// '>>Invalid<<!!5',
// 'Purchase']);

furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase']);