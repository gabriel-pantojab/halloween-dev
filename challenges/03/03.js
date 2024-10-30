function findSafestPath(dream) {
  let n = dream.length;
  let m = dream[0].length;
  let dp = [];
  for(let i = 0; i<=n; i++) {
    dp.push(new Array(m+1).fill(123456789));
  }
  dp[1][1] = dream[0][0];
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= m; j++) {
      dp[i][j] = Math.min(dp[i][j], dream[i-1][j-1] + dp[i - 1][j]);
      dp[i][j] = Math.min(dp[i][j], dream[i-1][j-1] + dp[i][j - 1]);
    }
  }
  return dp[n][m];
}

module.exports = findSafestPath;