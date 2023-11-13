function substringString (word, text){
    let converted = text.toLowerCase().split(' ');
    
    if (converted.includes(word)) {
        console.log(word.toLowerCase());
        return;
    } else {
        console.log(` ${word} not found!`);
    }

}
//substringString('javascript', 'JavaScript is the best programming language');
substringString('python', 'JavaScript is the best programming language');