function travelTime (arr) {
    let travelInfo = {};

    for (let element of arr) {
        let [country, town, cost] = element.split(' > ');
        let currentCost = parseInt(cost);

        if (travelInfo[country] && travelInfo[country].town == town && currentCost < travelInfo[country].cost){
            travelInfo[country.push(currentCost)];
        } else {
            
        }
    }}














    //     if (!travelInfo[country] || currentCost < travelInfo[country].lowestCost) {
    //         travelInfo[country] = {
    //             lowestCOst: currentCost,
    //             towns: [town],
    //         };
    //       }else if (currentCost == travelInfo[country].lowestCost){
    //         travelInfo[country].towns.push(town);
    //       }
    //     }
    //     let sortedDestinations = Object.keys(travelInfo).sort();

    //     for(let country of sortedDestinations) {
    //         let { lowestCost, towns } = travelInfo[country];
    //         towns.sort();
    //         let formattedTowns = towns.map((town) => `${country} -> ${town} -> ${lowestCost}`);
    //         console.log(formattedTowns.join('\n'));
    //     }
    // }
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