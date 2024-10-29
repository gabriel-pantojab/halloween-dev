function createMagicPotion(potions, target) {
  const dp = {};
  for(let index = 0; index < potions.length; index++) {
    const v = potions[index];
    if(dp[target - v] != undefined) {
      return [dp[target - v], index];
    }
    dp[v] = index;
  }
  return undefined
}

module.exports = createMagicPotion;