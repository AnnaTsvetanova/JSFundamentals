// coffee, coke, water, snacks; and a quantity 
// coffee - 1.50
// • water - 1.00
// • coke - 1.40
// • snacks - 2.00

function orders(prod, num){

    let result = calcOrders(prod, num);

    console.log(result.toFixed(2));

    function calcOrders (prod, num) {
        
        let sum = 0;

    switch (prod) {
        case 'coffee':
            sum = 1.50 * num;          
            break;
            case 'water':
                sum = 1.00 * num;          
                break; 
            case 'coke':
                sum = 1.40 * num;          
                break;  
                case 'snacks':
                    sum = 2.00 * num;          
                    break;  
    }

    return sum;
}}
orders("water", 5);
orders("coffee", 2);