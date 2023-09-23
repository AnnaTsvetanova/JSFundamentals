function gladiator(fights, helmet, sword, shield, armor) {
  let damageCount = 0;
  let helmetCount = 0;
  let swordCount = 0;
  let shieldCount = 0;
  let armorCount = 0;

  helmetCount = Math.trunc(fights / 2);
  swordCount = Math.trunc(fights / 3);
  shieldCount = Math.trunc(fights / 6);

  if (shieldCount > 1) {
    armorCount = Math.trunc(shieldCount / 2);
  }
  damageCount =
    helmetCount * helmet +
    swordCount * sword +
    shieldCount * shield +
    armorCount * armor;
  console.log(`Gladiator expenses: ${damageCount.toFixed(2)} aureus`);
}

//gladiator(7, 2, 3, 4, 5);
gladiator(23, 12.50, 21.50, 40, 200);

