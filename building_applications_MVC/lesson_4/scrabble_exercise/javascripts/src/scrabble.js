
function Scrabble(word) {
  
  var total = 0;
  if (word === null || word.length === 0) {return 0;}
  var word = word.toUpperCase();
  console.log(word);
  
  for (var i = 0; i< word.length; i++) {
    if (["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ].includes(word[i])) {
      total += 1;
    }

    else if (["D", "G"].includes(word[i])) {
      total += 2;
    }

    else if (["B", "C", "M", "P" ].includes(word[i])) {
      total += 3;
    }

    else if (["F", "H", "V", "W", "Y"].includes(word[i])) {
      total += 4;
    }

    else if (word[i] === "K") {
      total += 5;
    }

    else if (["J", "X" ].includes(word[i])) {
      total += 8;
    }

    else if (["Q", "Z"].includes(word[i])) {
      total += 10;
    }

    else {
      total += 0;
    }
  }
  
  return total;
  
}