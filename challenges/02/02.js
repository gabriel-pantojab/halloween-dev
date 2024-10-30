function battleHorde(zombies, humans) {
  let n = zombies.length;
  let humanPower = 0, zombiePower = 0;

  for(let i = 0; i < n; i++) {
    humanPower += humans[i] - '0';
    zombiePower += zombies[i] - '0';

    let remainingHumanPower = Math.max(humanPower - zombiePower, 0);
    let remainingZombiePower = Math.max(zombiePower - humanPower, 0);
    humanPower = remainingHumanPower, zombiePower = remainingZombiePower;
  }

  if(humanPower > zombiePower) return `${humanPower}h`
  if(zombiePower > humanPower) return `${zombiePower}z`
  return "x";
}

module.exports = battleHorde;