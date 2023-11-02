function addressBook (input) {

    let book = {};

    for (let entries of input) {
        let [name, address] = entries.split(':');
        
        book[name] = address;
    }  
    let entries = Object.entries(book);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
        
    let sorted = {};

    for (let [name, address] of entries){
        sorted[name] = address;

    } for ( let [name, address] of Object.entries(sorted)) {
        console.log(name, '->', address);
    }

}
addressBook([
    'Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'
]);

// addressBook(['Bob:Huxley Rd',

// 'John:Milwaukee

// Crossing',

// 'Peter:Fordem Ave',

// 'Bob:Redwing Ave',

// 'George:Mesta

// Crossing',

// 'Ted:Gateway Way',

// 'Bill:Gateway Way',

// 'John:Grover Rd',

// 'Peter:Huxley Rd',

// 'Jeff:Gateway Way',

// 'Jeff:Huxley Rd'] );