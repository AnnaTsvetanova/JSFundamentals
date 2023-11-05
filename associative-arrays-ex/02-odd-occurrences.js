function oddOccurrences (str) {
    let occurrencesArr = str.toLowerCase().split(' ');
    let occurrences = {};

    occurrencesArr.forEach(word => {
        if (word in occurrences) {
            occurrences[word]++;
        } else {
            occurrences[word] = 1;
        }
    });

    let result = occurrencesArr.filter(word => occurrences[word] % 2 != 0);
    let sorted = new Set (result);
    let sortedArr = [];
     for (let element of sorted){
        sortedArr.push(element);
    }
    console.log(sortedArr.join(' '));
}

// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');