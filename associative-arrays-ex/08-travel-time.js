function travelTime (arr) {
    let travelInfo = {};

    for (let element of arr) {
        let [country, town, cost] = element.split(' > ');
        cost = Number(cost);
        

        if(!travelInfo.hasOwnProperty(country)){
            travelInfo[country] = {};
        } 

        let destination = travelInfo[country];

        if (!destination.hasOwnProperty(town)) {
            destination[town] = cost;
        } else {
            if (destination[town] > cost) {
                destination[town] = cost;
            }
        }
    }
    let result = Object.entries(travelInfo);
    
    let sorted = result.sort((a, b) => a[0].localeCompare(b[0]) || (a[1] - b[1]));

    for (let [country, towns] of sorted) {
        let sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        let townsStr = sortedTowns.map(entry => `${entry[0]} -> ${entry[1]}`).join(' ');

        console.log(`${country} -> ${townsStr}`);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",   
    "Bulgaria > Sopot > 800",    
    "France > Paris > 2000",    
    "Albania > Tirana > 1000",    
    "Bulgaria > Sofia > 200"    
    ]);
// travelTime([
//     'Bulgaria > Sofia > 25000',    
//     'Bulgaria > Sofia > 25000',    
//     'Kalimdor > Orgrimar > 25000',    
//     'Albania > Tirana > 25000',    
//     'Bulgaria > Varna > 25010',    
//     'Bulgaria > Lukovit > 10'    
//     ]);