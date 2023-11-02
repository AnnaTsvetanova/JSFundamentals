function solve (arr){
    let storage = {};

    for (let items of arr){
        let [prod, qty] = items.split(' ');
        storage[prod] = Number(qty);

        if(storage.hasOwnProperty(prod)){
            storage[prod] += Number(qty);
        } else {
            storage[prod] = Number(qty);
        }
    }
    console.log(storage.Map(prod, '->', qty));
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);
// solve(['apple 50',
// 'apple 61',
// 'coffee 115',
// 'coffee 40']);