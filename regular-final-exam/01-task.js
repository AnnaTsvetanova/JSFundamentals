function passwordValidator(input) {
    let insertedPass = input.shift();

    let command = input.shift();
    
    while(command != 'Complete') {

        let tokens = command.split(' ');
        let action = tokens[0];

        if (action == 'Make') {

            if(tokens[1] == 'Upper'){
                let makeUpperIdx = Number(tokens[2]);
                let source = insertedPass[makeUpperIdx];
                let replacement = source.toUpperCase();
                insertedPass = insertedPass.replace(source, replacement);  
                console.log(insertedPass);              
            } else {               
                let makeLowerIdx = Number(tokens[2]);
                let source = insertedPass[makeLowerIdx];
                let replacement = source.toLowerCase();
                insertedPass = insertedPass.replace(source, replacement); 
                console.log(insertedPass);               
            }

        } else if (action == 'Insert'){

            let insertIdx = Number(tokens[1]);
            let insertChar = tokens[2];

            if(insertIdx < 0) {
                command = input.shift();
                continue;
            } else {
                let firstHalf = insertedPass.slice(0, insertIdx);
                let secondHalf = insertedPass.slice(insertIdx);
                insertedPass = firstHalf + insertChar + secondHalf;
                console.log(insertedPass); 
      
            }
        } else if (action == 'Replace') {

            let replaceChar = tokens[1];

            if (Number(insertedPass.indexOf(replaceChar)) >= 0) {
                let replaceValue = Number(tokens[2]);
                let asciiVal = replaceChar.charCodeAt();
                let sumVals = asciiVal + replaceValue;
                let newChar = String.fromCharCode(sumVals);
                insertedPass = insertedPass.split(replaceChar).join(newChar);
                console.log(insertedPass);
            } else {
                command = input.shift();
                continue;
            }
        } else if (action == 'Validation') {

            if (insertedPass.length < 8) {
                console.log('Password must be at least 8 characters long!');
            }

            let lettersDigitsUnderscorePattern = /\w/g;
            let LDUmatch = insertedPass.match(lettersDigitsUnderscorePattern);

            if(!LDUmatch) {
                console.log('Password must consist only of letters, digits and _!');
            }

            let oneUpperCaseLetterMatch = /[A-Z]/g;
            let upperMatch = insertedPass.match(oneUpperCaseLetterMatch);

            if(!upperMatch) {
                console.log('Password must consist at least one uppercase letter!');
            }

            let oneLowerCaseLetterMatch = /[a-z]/g;
            let lowerMatch = insertedPass.match(oneLowerCaseLetterMatch);

            if(!lowerMatch) {
                console.log('Password must consist at least one lowercase letter!');
            }

            let oneDigitMatch = /[0-9]/g;
            let digitMatch = insertedPass.match(oneDigitMatch);

            if(!digitMatch) {

                console.log('Password must consist at least one digit!');
            }


        } else {
            command = input.shift();
            continue;
        }
                
        command = input.shift();
        }
        
    }
// passwordValidator((['invalidpassword*',
// 'Add 2 p',
// 'Replace i -50',
// 'Replace * 10',
// 'Make Upper 2',
// 'Validation',
// 'Complete']));
passwordValidator((['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete']) );
