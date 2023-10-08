function printAndSum(start, end) {
    let numbsAsString = '';
    let sum = 0;

    for (i = start; i <= end; i++) {
        numbsAsString += `${i} `;
        sum += i;
    } console.log(numbsAsString);
    console.log(`Sum: ${sum}`);
}
printAndSum(50, 60);