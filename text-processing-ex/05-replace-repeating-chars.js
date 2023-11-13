function replaceRepeating (str) {
    let strAsArr = str.split('');
    let prevChar = '';
    let uniqueSrt = '';

    for (let char of strAsArr) {
        
        if (prevChar != char) {
            uniqueSrt +=char;
            prevChar = char;
        } 
    }
    console.log(uniqueSrt);
}
replaceRepeating('aaaaabbbbbcdddeeeedssaa');
//replaceRepeating('qqqwerqwecccwd');