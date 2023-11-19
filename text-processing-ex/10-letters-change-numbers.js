function letterChangeNums (input){
    let words = input.split(' ');
    let alphabetPositions = 'abcdefghijklmnopqrstuvwxyz';
    let idx = 0;
    let position = 0;
    let result = 0;
    let sum = 0;


    if(input.includes('\n')) {
        return;
    }
    let pattern = /[A-Za-z]\d+[A-Za-z]/g;


    for (word of words) {

        let match = word.match(pattern);

        if (match) {
            
        let firstChar = word[idx];
        let number = Number(word.slice(1,word.length - 1));
        let lastChar = word[word.length - 1];
        
       
        if(firstChar == firstChar.toUpperCase()) {
            position = alphabetPositions.indexOf(firstChar.toLowerCase()) + 1;
            result = number / position;
        } else {
            position = alphabetPositions.indexOf(firstChar.toLowerCase()) + 1;
            result = number * position;
        }
        
        if(lastChar == lastChar.toUpperCase()) {
            position = alphabetPositions.indexOf(lastChar.toLowerCase()) + 1;
            result -= position;
        } else {
            position = alphabetPositions.indexOf(lastChar.toLowerCase()) + 1;
            result += position;
        }
        
        sum += result;
    }}
    console.log(sum.toFixed(2));

}
letterChangeNums('A12b s17G');
// letterChangeNums('P34562Z q2576f H456z');
// letterChangeNums('a1A');



