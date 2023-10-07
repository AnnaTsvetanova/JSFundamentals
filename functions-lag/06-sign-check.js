function signCheck (numOne, numTwo, numThree){

    let isPositive = checkIfPositive(numOne, numTwo, numThree);

    if (isPositive) {
        console.log('Positive'); 
    } else {
        console.log('Negative');
    }

    function checkIfPositive (a ,b, c) {

        if (a > 0 && b > 0 && c > 0) {
            return true;
        } else if (a > 0 && b < 0 && c > 0) {
            return false;
        } else if ( a > 0 && b < 0 && c < 0) {
            return true;
        } else if ( a < 0 && b > 0 && c > 0) {
            return false;
        } else if ( a < 0 && b < 0 && c > 0) {
            return true;
        } else if ( a < 0 && b > 0 && c < 0) {
            return true;
        } else if ( a < 0 && b < 0 && c < 0) {
            return false;
        }
    }

}
signCheck(5, 12,-15);
// signCheck(-6, -12, 14);
// signCheck(-5, 1, 1);
// signCheck(-6, -12, 14);
