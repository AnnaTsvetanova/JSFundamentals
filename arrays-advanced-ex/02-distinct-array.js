function distinctArray (arr) {

    let unique = [];
    
    for (let num of arr) {
        
        if (!unique.includes(num)){
            unique.push(num);
        }
    } console.log(unique.join(' '));
    
    
    }

    distinctArray([1, 2, 3, 4] );
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);