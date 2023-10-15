function gladiatorInventory (array) {
    let inventory = array.shift().split(' ');
    

    for (commands of array) {

        let command = commands.split(' ');

        let action = command[0];

        if (action == 'Buy') {
            let equipment = command[1];
            if (!(inventory.includes(equipment))){
                inventory.push(equipment);                
            }
        } else if (action == 'Trash') {
            let equipment = command[1];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
                
            }

        } else if (action == 'Repair') {
            let equipment = command[1];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        } else if (action == 'Upgrade') {
            let separatedItems = command[1].split('-');
            let equipment = separatedItems[0];
            let upgrade = separatedItems[1];
            

            if (inventory.includes(equipment)){
                let upgraded = String(`${equipment}:${upgrade}`)
                let index = inventory.indexOf(equipment);
                inventory.splice(index + 1, 0, upgraded);
                
            }
            
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
//gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);