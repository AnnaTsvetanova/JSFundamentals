function wordsFinder (arr) {
    let words = arr.shift().split(' ');
    let occurrences = {};

    for (word of words) {
        occurrences[word] = 0;        
    }

    for (let word of arr) {
        if (word in occurrences) {
            occurrences[word]++;
        }
    }

    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for (let [word, occurence] of entries){

        console.log(`${word} - ${occurence}`);
    }
}
wordsFinder([
    'this sentence',    
    'In', 'this', 'sentence', 'you', 'have',    
    'to', 'count', 'the', 'occurrences', 'of',    
    'the', 'words', 'this', 'and', 'sentence',    
    'because', 'this', 'is', 'your', 'task'    
    ]);
// wordsFinder([
//     'is the',    
//     'first', 'sentence', 'Here', 'is',    
//     'another', 'the', 'And', 'finally', 'the',    
//     'the', 'sentence']);