// values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

function rot13(str) {
  var stringArray = str.split("");
  var newStringArray = [];
  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M"
  ];
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === " ") {
      newStringArray.push(" ");
    } else {
      newStringArray.push(letters[letters.indexOf(stringArray[i]) + 13]);
    }
  }
  if (/\W$/.test(str) === true) {
    newStringArray.pop();
    return newStringArray.concat(stringArray[stringArray.length - 1]).join("");
  }
  return newStringArray.join("");
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
