function findTheKiller(whisper, suspects) {
  let n = whisper.length;
  
  for(let i = 0; i < n; i++) {
    let c = whisper[i];
    if(c >= 'a' && c <= 'z') {
      suspects = suspects.filter(w => {
        return w[i]?.toLowerCase() === c;
      });
    }
  }
  
  if(whisper[n - 1] === '$')
    suspects = suspects.filter(w => w.length === n - 1);
  
  return suspects.join(",")
}

module.exports = findTheKiller;