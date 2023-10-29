function heroReg (arr){

    let registry = [];

    for (let data of arr) {
        let tokens = data.split(' / ');

        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2];

        let regObj = {name: name, level: level, items: items};
        registry.push(regObj);      
    }      
    registry.sort((a, b) => (a.level - b.level));

    for (let hero of registry) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
       
    }}

heroReg([
    'Isacc / 25 / Apple, GravityGun',    
    'Derek / 12 / BarrelVest, DestructionSword',    
    'Hes / 1 / Desolator, Sentinel, Antara'    
    ]);
// heroReg([
//     'Batman / 2 / Banana, Gun',    
//     'Superman / 18 / Sword',    
//     'Poppy / 28 / Sentinel, Antara'    
//     ] );