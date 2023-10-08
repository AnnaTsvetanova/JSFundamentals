function carWash (arr){

    let carState = cleanOrDirty(arr);
    console.log(`The car is ${carState.toFixed(2)}% clean.`);
    

    function cleanOrDirty(arr) {

    let afterInitSoap = 10;

    for (let i = 1; i < arr.length; i++){
        let command = arr[i];

        switch (command) {
            case 'soap':
                afterInitSoap += 10;                
                break;
            case 'water':
                afterInitSoap *= 1.2;                
                break;
            case 'vacuum cleaner':
                afterInitSoap *= 1.25;                
                break;
            case 'mud':
                afterInitSoap *= 0.9;                
                break;
        }
    } return afterInitSoap;

}}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'] );
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
