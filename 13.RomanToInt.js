//EASY

const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
let acc;

// Benim kodum hiz olarak daha iyi ama hafiza yonetiminde biraz geride.
//Time complexity : 97.20%
//Space complexity : 80.71%
function romantoInt(r) {
  acc = 0;
  for (let i = 0; i < r.length; i++) {
    romanNumbers[r[i]] < romanNumbers[r[i + 1]]
      ? (acc -= romanNumbers[r[i]])
      : (acc += romanNumbers[r[i]]);
  }
  return acc;
}

// Alternatif kod hafiza kullaniminda daha basarili
//Time complexity : 77.90%
//Space complexity : 97.52%
function altRomanToInt(s) { 
  let acc = 0;
  let last = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      let curr;
      switch(s[i]) {
          case 'I':
              curr = 1;
              break;
          case 'V':
              curr = 5;
              break;
          case 'X':
              curr = 10;
              break;
          case 'L':
              curr = 50;
              break;
          case 'C':
              curr = 100;
              break;
          case 'D':
              curr = 500;
              break;
          case 'M':
              curr = 1000;
              break;
      }
      if (curr < last) {
          acc -= curr;
      } else {
          acc += curr;
      }
      last = curr;
  }
  return acc;
}

console.log(romantoInt("MCMXCIV"));
