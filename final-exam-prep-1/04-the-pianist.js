function thePianist (input) {
    let piecesNum = Number(input.shift());
    let piecesInfo = {};


    for (let i = 0; i < piecesNum; i++) {

        let piecesData = input.shift().split('|');

        let [piece, composer, key] = piecesData;

        let music = {composer, key};
        
        piecesInfo[piece] = music;

        
                    
    } let command = input.shift();
    
    
    while (command != 'Stop') {

        let tokens = command.split('|');
        let action = tokens[0];
        let piece = tokens[1];
        

        if (action == 'Add') {
            let composer = tokens[2];
            let key = tokens[3];

            if(piece in piecesInfo){

                console.log(`${piece} is already in the collection!`);
          
            } else {
            piecesInfo[piece] = {
                    composer,
                    key
                };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
        } else if (action == 'Remove') {
            if(piece in piecesInfo){

                delete piecesInfo[piece];
                console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    } else if (action == 'ChangeKey') {
        let newKey = tokens[2];

        if(piece in piecesInfo){
         
            piecesInfo[piece].key = newKey;
                    
           
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
  
        

    }   command = input.shift();
    	} 
        let collection = Object.entries(piecesInfo);

        for (let [piece, music] of collection) {
            
            console.log(`${piece} -> Composer: ${music.composer}, Key: ${music.key}`);
        }
    }
        

// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'  
//   ]);
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);