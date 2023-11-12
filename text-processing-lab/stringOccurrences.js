function stringOccurrences (text, word) {
    let words = text.split(' ');
    let counter = 0;
    
    for (curWord of words) {
        if (curWord == word) {
            counter++;
        }
    }
    console.log(counter);

}
stringOccurrences('This is a word and it also is a sentence', 'is' );
//stringOccurrences('softuni is great place for learning new programming languages', 'softuni');