function escapePyramidHead(room) {
  let startRowIndex = -1,
    startColIndex,
    endRowIndex = -1,
    endColIndex;
  for (let i = 0; i < room.length; i++) {
    const v = room[i];
    if (startRowIndex === -1) {
      startRowIndex = v.includes("▲") ? i : -1;
      startColIndex = v.indexOf("▲");
    }
    if (endRowIndex === -1) {
      endRowIndex = v.includes("T") ? i : -1;
      endColIndex = v.indexOf("T");
    }
  }

  const di = [-1, 0, 1, 0],
    dj = [0, 1, 0, -1];

  function isValidPosition(i, j) {
    return room[i]?.[j] && room[i][j] !== "#";
  }

  const q = [];
  const distance = {};
  q.push([startRowIndex, startColIndex]);
  distance[`${startRowIndex}${startColIndex}`] = 0;
  while (q.length) {
    const [i, j] = q.shift();
    for (let k = 0; k < 4; k++) {
      const x = i + di[k];
      const y = j + dj[k];
      if (isValidPosition(x, y) && distance[`${x}${y}`] === undefined) {
        q.push([x, y]);
        distance[`${x}${y}`] = distance[`${i}${j}`] + 1;
      }
    }
  }
  if (distance[`${endRowIndex}${endColIndex}`] !== undefined)
    return distance[`${endRowIndex}${endColIndex}`];
  else return -1;
}

module.exports = escapePyramidHead;
