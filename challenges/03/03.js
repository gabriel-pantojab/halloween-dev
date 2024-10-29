function findSafestPath(dream) {
  let n = dream.length;
  let m = dream[0].length;
  
  let dp = [];
  for(let i = 0; i < n + 1; i++) {
    dp.push(new Array(m + 1).fill(123456789));
  }
  dp[0][0] = dream[0][0];

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(i > 0) {
        dp[i][j] = Math.min(dp[i][j], dream[i][j] + dp[i - 1][j]);
      }
      if(j > 0) {
        dp[i][j] = Math.min(dp[i][j], dream[i][j] + dp[i][j - 1]);
      }
    }
  }

  return dp[n - 1][m - 1];
}

module.exports = findSafestPath;