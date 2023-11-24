function heroesOfCode (input) {

    let heroes = {};
    let partyCount = Number(input.shift());
    
    for (let i = 0; i < partyCount; i++) {
        let heroData = input.shift();
        let [name, hp, mp] = heroData.split(' ');

        let hero = {
            hp: Number(hp),
            mp: Number(mp)
        };

        heroes[name] = hero;
    }

    
    let command = input.shift();
    
    while (command != 'End'){
        
        let tokens = command.split(' - ');
        let action = tokens[0];
        let name = tokens[1];
        let hero = heroes[name];
        

        switch (action) {
            case 'CastSpell':
                let mpRequired = Number(tokens[2]);
                let spellName = tokens[3];

            if(hero.mp >= mpRequired){
                hero.mp -= mpRequired;
                console.log(`${name} has successfully cast ${spellName} and now has ${hero.mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }                
                break;

            case 'TakeDamage':
                let damage = Number(tokens[2]);
                let attacker = tokens[3];
                hero.hp -= damage;
                 if (hero.hp > 0) {
                   console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`);
                } else {
                    console.log(`${name} has been killed by ${attacker}!`);
                    delete heroes[name]; 
                }
                break;
            case 'Recharge':
                let rechargeAmount = Number(tokens[2]);
                

                if(hero.mp + rechargeAmount > 200) {
                    rechargeAmount = 200 - hero.mp;  
                } 
                hero.mp += rechargeAmount;
                console.log(`${name} recharged for ${rechargeAmount} MP!`);
                break;

            case 'Heal':
                let healed = Number(tokens[2]);
                if(hero.hp + healed > 100) {
                    healed = 100 - hero.hp;
                } 
                hero.hp += healed;
                console.log(`${name} healed for ${healed} HP!`);              
                break;       
        }
        command = input.shift();
    }
   
    for (let name in heroes) {
        let hero = heroes[name];

        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }
    

}
heroesOfCode([4, 'Adela 90 150', 'SirMullich 70 40', 'Ivor 1 111', 'Tyris 94 61', 'Heal - SirMullich - 50', 'Recharge - Adela - 100', 'CastSpell - Tyris - 1000 - Fireball', 'TakeDamage - Tyris - 99 - Fireball', 'TakeDamage - Ivor - 3 - Mosquito', 'End']);
//heroesOfCode([2, 'Solmyr 85 120', 'Kyrre 99 50', 'Heal - Solmyr - 10', 'Recharge - Solmyr - 50', 'TakeDamage - Kyrre - 66 - Orc', 'CastSpell - Kyrre - 15 - ViewEarth', 'End']);
