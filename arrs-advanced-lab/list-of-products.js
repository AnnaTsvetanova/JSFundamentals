function listOfProds (arr){
    let sorted = arr.sort();
    
    for (i = 0; i < sorted.length; i++){
        
        console.log(`${i + 1}.${sorted[i]}`);
    }
}
listOfProds(['Potatoes', 'Tomatoes', 'Onions', 'Apples'] );
//listOfProds(['Watermelon', 'Banana', 'Apples']);