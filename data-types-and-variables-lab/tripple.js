function tripple(numAsString) {

    let num = Number(numAsString);
    let chars = 'abcdefghijklmnopqrstuvwxyz'
    for(let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {    
                console.log(`${chars[i]}${chars[j]}${chars[k]}`);
            }
        } 
    }
}
tripple('3');