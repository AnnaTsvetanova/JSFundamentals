function encrypted (input) {
    let message = input.shift();
    
    let command = input.shift();

    while(command != 'Decode'){
        let tokens = command.split('|');
        
        let action = tokens[0];

        switch (action) {
            case 'Move':
                let toMove = Number(tokens[1]);
                let toBeMoved = message.slice(0, toMove);
                let messageBase = message.slice(toMove);

                message = messageBase + toBeMoved;
                break;
            case 'Insert':
                let idx = Number(tokens[1]);
                let valueToInsert = tokens[2];
                let firstHalf = message.slice(0, idx);
                let secondHalf = message.slice(idx);
                message = firstHalf + valueToInsert + secondHalf;
                break;
            case 'ChangeAll':
                let changeValue = tokens[1];
                let replacement = tokens[2];
                message = message.split(changeValue).join(replacement);
                break;
        }

        command = input.shift();
    } console.log(`The decrypted message is: ${message}`);

}

// encrypted([
//     'zzHe',
//     'ChangeAll|z|l',    
//     'Insert|2|o',    
//     'Move|3',    
//     'Decode'    
//     ]);
encrypted(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);