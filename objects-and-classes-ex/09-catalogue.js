function catalogue (arr) {
    let products = {};

    for (elements of arr) {
        let tokens = elements.split(' : ');
        let product = tokens[0];
        let price = Number(tokens[1]);
        let initial = product[0].toUpperCase();

        if (!products[initial]) {
            products[initial] = [];
        }

        products[initial].push({ product, price });
    }

    
    let sortedInitials = Object.keys(products).sort();

    
    for (let initial of sortedInitials) {
        console.log(initial);
        products[initial].sort((a, b) => a.product.localeCompare(b.product));

        for (let productObj of products[initial]) {
            console.log(`  ${productObj.product}: ${productObj.price}`);

  
    } 
    


    }}
catalogue ([
    'Appricot : 20.4',    
    'Fridge : 1500',    
    'TV : 1499',    
    'Deodorant : 10',
    'Boiler : 300',    
    'Apple : 1.25',    
    'Anti-Bug Spray : 15',    
    'T-Shirt : 10'    
    ]);
    catalogue([
        'Omlet : 5.4',        
        'Shirt : 15',        
        'Cake : 59'        
        ] )