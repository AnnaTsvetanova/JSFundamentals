function emojiDetector (input) {

    let digitsPattern = /[0-9]/g;
    let inputAsStr = input[0];

    let digitMatch = inputAsStr.match(digitsPattern);
    let coolness = 1;
    
    if(digitMatch) {

    for (digit of digitMatch) {
        coolness *= Number(digit);
    }
    console.log(`Cool threshold: ${coolness}`);

    } else {
        return;
    }
    
    let pattern = /(?<chars>\*{2}|:{2})(?<word>[A-Z][a-z]{2,})\1/g;

    let valid = [];
    let match = pattern.exec(inputAsStr);

    while(match) {        
        
        valid.push(match[0]);

        match = pattern.exec(input);
    }
    
    if(valid.length > 0) {
        console.log(`${valid.length} emojis found in the text. The cool ones are:`);

    
    let lettersOnlyPattern = /[A-za-z]/g;
    
    for (let emoji of valid) {
        let emojiCoolness = 0; 
        let emojiLetters = emoji.match(lettersOnlyPattern);
        

    for (letters of emojiLetters.join('')) {         
    let code = Number(letters.charCodeAt());
    emojiCoolness += code;
    }
    if (emojiCoolness > coolness) {
        console.log(emoji);
    } else {
        continue;
    }

}
    }else {
        return;
    }


}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
//emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
//emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);