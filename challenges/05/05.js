function escapePyramidHead(room) {
  const rowIndex = room.findIndex(row => row.includes("▲"));
  const colIndex = room[rowIndex].indexOf("▲");
  
  let INF = 123456789;
  let di = [-1, 0, 1, 0], dj = [0, 1, 0, -1];

  function isValidPosition(i, j) {
    return room[i]?.[j] && room[i][j] !== "#";
  }
  
  function findShortestPath(i, j) {
    if(room[i][j] === 'T') return 0;
    let minSteps  = INF;

    room[i][j] = '#';
    for(let k = 0; k < 4; k++) {
      let x = i + di[k];
      let y = j + dj[k];
      if(isValidPosition(x, y)) {
        let a = 1 + findShortestPath(x, y);
        minSteps = Math.min(minSteps, a);
      }
    }
    room[i][j] = '.';
    
    return minSteps; 
  }
  
  let result = findShortestPath(rowIndex, colIndex);
  
  return result === INF ? -1 : result;
}

module.exports = escapePyramidHead;