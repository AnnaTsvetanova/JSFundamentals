function dictionary(arr) {
    let dictionaryEntries = {};

    for (let element of arr) {
        let entry = JSON.parse(element);
        let term = Object.keys(entry)[0];
        let def = Object.values(entry)[0];

        if (!dictionaryEntries[term]) {
            dictionaryEntries[term] = def;
        } else {
           
            dictionaryEntries[term] = def;
        }
    }

    
    let sortedEntries = Object.entries(dictionaryEntries).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [term, definition] of sortedEntries) {
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}





// function dictionary(arr) {
//     let dictionaryEntries = [];

//     for (let element of arr) {
//         let entry = JSON.parse(element);
        
//         let term = Object.keys(entry);
//         let def = Object.values(entry); 
        
//         if (!dictionaryEntries.includes(term)) {
//             dictionaryEntries[term] = def;
//         } else {
//             continue;
//         }
                
//          dictionaryEntries.push(entry);
//     } 
   
//         dictionaryEntries.sort((a, b) => {
//             let keyA = Object.keys(a)[0]; 
//             let keyB = Object.keys(b)[0]; 
//             return keyA.localeCompare(keyB); 
//         });
    
//         for (let entry of dictionaryEntries) {
//             let key = Object.keys(entry)[0];
//             let value = Object.values(entry)[0];
//             console.log(`Term: ${key} => Definition: ${value}`);
//         }
  
// }

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);
// dictionary([

//     '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    
//     '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    
//     '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    
//     '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."}',
    
//     '{"Art":"The expression ormapplication of human creative skill and imagination, typically in a visual form such aspainting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."}']);