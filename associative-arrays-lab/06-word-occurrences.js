function solve(input) {

    let occurrences = {};

    for (let word of input) {
            
        if (word in occurrences) {
            occurrences[word]++;
        } else {
        occurrences[word] = 1;
    }}

    let entries = Object.entries(occurrences);
    let sortedEntries = entries.sort((a, b) => b[1] - a[1]);
    for (let [word, occurrence] of sortedEntries) {
        console.log(`${word} -> ${occurrence} times`);
    }


}
solve(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);
// solve(["dog", "bye", "city", "dog", "dad",
// "boys", "ginger"]);