function lowerToUpper(char){
    let code = char.charCodeAt();
    if (code >= 65 && code <= 90) {
        console.log('upper-case');
    } else{
        console.log('lower-case');
    }

}
lowerToUpper('f');
lowerToUpper('L');