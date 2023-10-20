function battleShips(input) {
    let pirate = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift())  ;
    let pirateStatusSum = 0;
    let warshipStatusSum = 0;

    for (let element of input) {
        let tokens = element.split(' ');
        let action = tokens[0];

        if (action == 'Retire') {
            break;
        } else if (action == 'Fire') {
            let index = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if (index < 0 || index >= warship.length) {
                continue;
            } 
                warship[index] -= damage;

                if (warship[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            } else if (action == 'Defend') {
            let start = Number(tokens[1]);
            let end = Number(tokens[2]);
            let damage = Number(tokens[3]);

            if (start < 0 || start >= pirate.length || end < 0 || end >= pirate.length) {
                continue;
            } 

                for (let i = start; i <= end; i++) {
                    pirate[i] -= damage;

                    if (pirate[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }

            } else if (action == 'Repair') {
            let index = Number(tokens[1]);
            let health = Number(tokens[2]);

            if (index < 0 || index >= pirate.length) {
                continue;
            } 
                
            pirate[index] += health;
                if (pirate[index] > maxHealth) {
                    pirate[index] = maxHealth;
                } 
                
                
            
        } else if (action == 'Status') {
            let needsRepair = maxHealth * 0.2;
            let repairsCount = 0;

            for (let inspected of pirate) {
                if (inspected < needsRepair) {
                    repairsCount++;
                }
            } console.log(`${repairsCount} sections need repair.`);
        }

    } for (let els of pirate) {
        pirateStatusSum += els;
    } console.log(`Pirate ship status: ${pirateStatusSum}`);
    for (let items of warship) {
        warshipStatusSum += items;
    } console.log(`Warship status: ${warshipStatusSum}`);

}
// battleShips((
//     ["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status", 
//     "Retire"]
//     ));

battleShips((
    ["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]
    ));