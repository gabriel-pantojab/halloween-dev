function battleHorde(zombies, humans) {
  const n = zombies.length;
  let humanPower = 0, zombiePower = 0;

  for(let i = 0; i < n; i++) {
    humanPower += humans[i] - '0';
    zombiePower += zombies[i] - '0';
    if(humanPower > zombiePower) {
      humanPower -= zombiePower;
      zombiePower = 0;
      continue;
    }

    if(zombiePower > humanPower) {
      zombiePower -= humanPower;
      humanPower = 0;
      continue;
    }

    humanPower = zombiePower = 0;
  }
  
  if(zombiePower == humanPower) return "x";
  return humanPower > zombiePower ? `${humanPower}h` : `${zombiePower}z`;
}

module.exports = battleHorde;