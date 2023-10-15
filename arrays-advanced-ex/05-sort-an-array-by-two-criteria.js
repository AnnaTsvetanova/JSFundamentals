function sortArray(arr) {

    let result = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(result.join('\n'));

}
sortArray(['alpha', 'beta', 'gamma']);
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);