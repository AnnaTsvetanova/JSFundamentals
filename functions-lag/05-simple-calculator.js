function calculator(numOne, numTwo, operator){

    
        let result = 0;

        switch (operator) {
          case 'multiply':
            result = numOne * numTwo;
            break;
          case 'divide':
            result = numOne / numTwo;
            break;
          case 'add':
            result = numOne + numTwo;
            break;
          case 'subtract':
            result = numOne - numTwo;
            break;
        }
       console.log(result);
    }

calculator(50, 13, 'subtract');
// calculator(12, 19, 'add');
// calculator(40, 8, 'divide');
// calculator(5, 5, 'multiply');