function perfectNumber (num){
    let sumOfDivisors = 0;

    let isPerfect = checkIfPerfect(num);

    if (isPerfect) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

   

    function checkIfPerfect (num) {

        for (let i = 1; i < num; i++){
            let curDiv = i;

            if(num % curDiv == 0) {
                sumOfDivisors += curDiv;
            } 
            
        } if (sumOfDivisors == num){
            return true;
        } else {
            return false;

        }
    }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);