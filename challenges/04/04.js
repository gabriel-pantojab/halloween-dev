function findTheKiller(whisper, suspects) {
  let hasTermination = false;
  let n = whisper.length;
  if(whisper[n - 1] === '$') {
    hasTermination = true;
    n--;
  }
  
  for(let i = 0; i < n; i++) {
    const c = whisper[i];
    if(c !== '~') {
      suspects = suspects.filter(w => {
        return i < w.length && (w[i] === c || w[i].toLowerCase() === c);
      });
    }
  }
  
  if(hasTermination) suspects = suspects.filter(w => w.length === n);
  
  return suspects.join(",")
}

module.exports = findTheKiller;