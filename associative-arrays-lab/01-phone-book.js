function solve (arr) {

    let phoneBook = {};

    for (let item of arr) {
        let [name, phone] = item.split(' ');

        phoneBook[name] = phone;
    } 

    for (let [name, phone] of Object.entries(phoneBook)) {
        console.log(name, '->', phone);
    }
    

}
solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);
// solve([
//     'George 0552554',
//     'Peter 087587',
//     'George 0453112',
//     'Bill 0845344'
// ] );