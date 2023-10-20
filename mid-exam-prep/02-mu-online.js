function muOnline(input) {
  let health = 100;
  let bitcoins = 0;

  let array = input.split('|');

  for (let i = 0; i < array.length; i++) {
    let tokens = array[i].split(' ');
    let command = tokens[0];
    let num = Number(tokens[1]);

    if (command == 'potion') {
        if (health + num > 100) {
            num = 100 - health;
        } 
        health += num;
        console.log(`You healed for ${num} hp.`);
        console.log(`Current health: ${health} hp.`);

        } else if (command == 'chest') {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            health -= num;
        if (health > 0) {
            console.log(`You slayed ${command}.`);  
        } else {
            console.log(`You died! Killed by ${command}.`)
            console.log(`Best room: ${i + 1}`);
            return;
        }}
        } 
        console.log("You've made it!")
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
  }

  



//muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
