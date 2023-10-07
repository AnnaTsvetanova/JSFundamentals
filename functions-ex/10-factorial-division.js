function factorialDivision (num1, num2){

    let result = calcFactorial(num1) / calcFactorial(num2);
    console.log(result.toFixed(2));

    function calcFactorial(num){
        let factorial = 1;
        
        while (num > 1){
            factorial *= num;
            num--;
        }
        return factorial;
    }

}
factorialDivision(5, 2);
factorialDivision(6, 2);