function reveal (wordsStr, text) {
    let words = wordsStr.split(', ');
    
    for(let word of words) {
        let len = word.length;

        let starTemplate = '*'.repeat(len);
        text = text.replace(starTemplate, word);
    }
    console.log(text);

}
reveal('great', 'softuni is ***** place for learning new programming languages');
//reveal('great, learning', 'softuni is ***** place for ******** new programming languages' );