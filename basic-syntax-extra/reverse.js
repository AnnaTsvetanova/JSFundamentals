function reverse(input){
    let inputAsString = String(input);
    let output = '';

    for(let i = inputAsString.length - 1; i >=0; i--){
        let currSym = inputAsString[i];
        output += currSym;
    }
console.log(output);
}
reverse(1234);
reverse('SoftUni');
reverse('Hello');