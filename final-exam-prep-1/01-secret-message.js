function secretMessage (input) {

    let message = input.shift();
    
    while (input[0] != 'Reveal') {
        let line = input.shift();
        let tokens = line.split(':|:');

        let command = tokens[0];

        if(command == 'InsertSpace') {
            let idx = Number(tokens[1]);
            let leftHalf = message.slice(0, idx);
            let rightHalf = message.slice(idx);
            message = leftHalf + ' ' + rightHalf;
            console.log(message);  
            
        } else if (command == 'Reverse') {

            let substring = tokens[1];
            
            if(message.includes(substring)) {

            let initialIdx = Number(message.indexOf(substring[0]));
            let reversed = message.slice(initialIdx, initialIdx + substring.length).split('').reverse().join('');
            let firstHalf= message.slice(0, initialIdx);
            let secondHalf = message.slice(initialIdx + substring.length);
            message = firstHalf + secondHalf + reversed;
            console.log(message);
            continue;

          } else {
            console.log('error');
            continue;
          }
       
            
        }else if ( command == 'ChangeAll') {
            let searched = tokens[1];
            let replacement = tokens[2];
            message = message.split(searched).join(replacement);
            console.log(message);
        }
    } console.log(`You have a new text message: ${message}`);

}

// secretMessage([
//     'heVVodar!gniV',    
//     'ChangeAll:|:V:|:l',    
//     'Reverse:|:!gnil',    
//     'InsertSpace:|:5',    
//     'Reveal'    
//     ] );
secretMessage([
    'Hiware?uiy',    
    'ChangeAll:|:i:|:o',    
    'Reverse:|:?uoy',    
    'Reverse:|:jd',    
    'InsertSpace:|:3',    
    'InsertSpace:|:7',    
    'Reveal'    
    ]);