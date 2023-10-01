function dungeonestDark(arr) {
  let roomsInfo = arr[0];
  let roomsArr = roomsInfo.split("|");

  let health = 100;
  let coins = 0;
  let roomsCount = 1;

  for (let room of roomsArr) {
    let els = room.split(" ");
    let command = els[0];
    let value = Number(els[1]);

    if (command == "potion") {
      let newHP = health + value <= 100 ? value : 100 - health;
      health += newHP;
      console.log(`You healed for ${newHP} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command == "chest") {
      coins += value;
      console.log(`You found ${value} coins.`);
    } else {
      health -= value;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${roomsCount}`);
        break;
      }
      
    }roomsCount++;
  }
  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"] );
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
