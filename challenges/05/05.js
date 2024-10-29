function escapePyramidHead(room) {
  const rowIndex = room.findIndex(row => row.includes("▲"));
  const colIndex = room[rowIndex].indexOf("▲");
  
  const INF = 123456789;

  const di = [-1, 0, 1, 0];
  const dj = [0, 1, 0, -1];

  function isValidPosition(i, j) {
    return room[i] !== undefined && room[i][j] !== undefined;
  }
  
  function findShortestPath(i, j) {
    if(room[i][j] === 'T') return 0;
    let minSteps  = INF;

    room[i][j] = '#';
    for(let k = 0; k < 4; k++) {
      const x = i + di[k];
      const y = j + dj[k];
      if(isValidPosition(x, y) && room[x][y] !== "#") {
        minSteps = Math.min(minSteps , 1 + findShortestPath(x, y));
      }
    }
    room[i][j] = '.';

    return minSteps;
  }
  
  const result = findShortestPath(rowIndex, colIndex);
  
  return result === INF ? -1 : result;
}

module.exports = escapePyramidHead;