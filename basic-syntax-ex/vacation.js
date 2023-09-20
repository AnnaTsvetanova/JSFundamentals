function vacation(people, type, day) {
    let pricePerPerson = 0;
    let totalPrice = 0;

    if(type == 'Students') {
        switch (day) {
            case 'Friday':
                pricePerPerson = 8.45;
                break;
                case 'Saturday':
                pricePerPerson = 9.80;
                break;
                case 'Sunday':
                pricePerPerson = 10.46;
                break;
           
        } if (people >= 30) {
            totalPrice = 0.85 * (people * pricePerPerson);
        } else {
            totalPrice = people * pricePerPerson;
        } console.log(`Total price: ${totalPrice.toFixed(2)}`);
    } else if(type == 'Business') {
        switch (day) {
            case 'Friday':
                pricePerPerson = 10.90;
                break;
                case 'Saturday':
                pricePerPerson = 15.60;
                break;
                case 'Sunday':
                pricePerPerson = 16;
                break;
    } if (people >= 100) {
        totalPrice =  (people * pricePerPerson) - (10 * pricePerPerson);
        
    } else {
        totalPrice = people * pricePerPerson;
    } console.log(`Total price: ${totalPrice.toFixed(2)}`);
} else if(type == 'Regular') {
        switch (day) {
            case 'Friday':
                pricePerPerson = 15;
                break;
                case 'Saturday':
                pricePerPerson = 20;
                break;
                case 'Sunday':
                pricePerPerson = 22.50;
                break;
        }if (people >= 10 && people <= 20) {
            totalPrice =  0.95 * (people * pricePerPerson);
            
        } else {
            totalPrice = people * pricePerPerson;
        }console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }
}
vacation(40,"Regular","Saturday");