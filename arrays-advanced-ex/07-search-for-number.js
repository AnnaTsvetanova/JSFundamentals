function searchForNum (arr1, arr2){
    let [toTake, toDelete, toSearch] = arr2;

    let count = 0;
    let sliced = arr1.slice(0, toTake);
    let deleted = sliced.splice(0, toDelete);

    for(el of sliced) {
        if(el == toSearch) {
            count++;
        }
    }
   console.log(`Number ${toSearch} occurs ${count} times.`)    
}
searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3] );
//searchForNum([7, 1, 5, 8, 2, 7], [3, 1, 5] );