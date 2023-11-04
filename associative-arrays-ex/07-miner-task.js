function minerTask (arr) {
    let info = {};
    
    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        
        
        if (info.hasOwnProperty(resource)) {
            info[resource] += qty;
        } else {
            info[resource] = qty;
        }
        }
    for ([resource, qty] of Object.entries(info)) {
        console.log(resource, '->', qty);
    }

}
// minerTask([
//     'Gold',    
//     '155',    
//     'Silver',    
//     '10',    
//     'Copper',    
//     '17']);
minerTask([ 
    'gold',
    '155', 
    'silver', 
    '10', 
    'copper', 
    '17', 
    'gold', 
    '15' ]);