function activationKeys (input) {

    let rawKey = input.shift();
    
    let command = input.shift();

    while(command != 'Generate') {

        let tokens = command.split('>>>');
        let action = tokens[0];

        
        if(action == 'Contains') {
            let substring = tokens[1];
            
            if(rawKey.includes(substring)) {
                console.log(`${rawKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (action == 'Flip') {
            let type = tokens[1];
            let idx1 = Number(tokens[2]);
            let idx2 = Number(tokens[3]);
            let firstHalf = rawKey.slice(0, idx1);
            let secondHalf = rawKey.slice(idx2);
            let subStr = rawKey.slice(idx1, idx2)
            if(type == 'Upper') {
               subStr = subStr.toUpperCase();
               rawKey = firstHalf + subStr + secondHalf;
                console.log(rawKey);
            } else {
                subStr = subStr.toLowerCase();
                rawKey = firstHalf + subStr + secondHalf
                console.log(rawKey);
            }
        } else if (action == 'Slice'){
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);
            let leftHalf = rawKey.slice(0, startIdx);
            let rightHalf = rawKey.slice(endIdx);
            rawKey = leftHalf + rightHalf;
            console.log(rawKey);
        }

        command = input.shift();
    } 
    console.log(`Your activation key is: ${rawKey}`);

}
// activationKeys(["abcdefghijklmnopqrstuvwxyz",
// "Slice>>>2>>>6",
// "Flip>>>Upper>>>3>>>14",
// "Flip>>>Lower>>>5>>>7",
// "Contains>>>def",
// "Contains>>>deF",
// "Generate"]);
// activationKeys(["134softsf5ftuni2020rockz42",
// "Slice>>>3>>>7",
// "Contains>>>-rock",
// "Contains>>>-uni-",
// "Contains>>>-rocks",
// "Flip>>>Upper>>>2>>>8",
// "Flip>>>Lower>>>5>>>11",
// "Generate"]);
activationKeys(['abcdefghijklmnopqrstuvwxyz', 'Slice>>>2>>>6', 'Flip>>>Upper>>>3>>>14', 'Flip>>>Lower>>>5>>>7', ' Contains>>>def', 'Contains>>>deF', 'Generate']);
