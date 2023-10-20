function arrayModifier (arr) {
    let workArr = arr.shift().split(' ');
    
    let command = arr.shift();
    
    
    while (command != 'end') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        
        if (action == 'swap') {
            let idx1= Number(tokens.shift());
            let idx2 = Number(tokens.shift());
            
            let el1 = workArr[idx1];
            let el2 = workArr[idx2];
            
            workArr.splice(idx1, 1, el2);
            workArr.splice(idx2, 1, el1);
            
        } else if (action == 'multiply') {
            let idx1= Number(tokens.shift());
            let idx2 = Number(tokens.shift());

            let el1 = workArr[idx1];
            let el2 = workArr[idx2];
            let product = el1 * el2;
            workArr.splice(idx1, 1, product);
            
            
        } else if (action == 'decrease') {

            workArr = workArr.map(element => element - 1);
                        
        }
        
        
        command = arr.shift();
    }
    console.log(workArr.join(', '));
   
    
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);
// arrayModifier([
//     '1 2 3 4',
//     'swap 0 1',
//     'swap 1 2',
//     'swap 2 3',
//     'multiply 1 2',
//     'decrease',
//     'end'
//   ]);