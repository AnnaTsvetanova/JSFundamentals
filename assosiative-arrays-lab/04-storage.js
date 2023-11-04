function solve (arr){
    let storage = new Map ();


    for (let items of arr) {
        let [prod, qty] = items.split(' ');
    
        if (storage.has(prod)) {
          
          qty = parseInt(qty) + parseInt(storage.get(prod));
        }
    
        storage.set(prod, qty);
      }
    for (let [prod, qty] of storage) {
        console.log(prod, '->', qty);
    }
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);
// solve(['apple 50',
// 'apple 61',
// 'coffee 115',
// 'coffee 40']);