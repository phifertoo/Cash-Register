function palindrome(str) {
  var stringArray = str.replace(/\s+|\W+|_/g, "").toLowerCase();
  var firstHalf = "";
  var secondHalf = "";
  if (stringArray.length % 2 === 0) {
    firstHalf = stringArray.slice(0, stringArray.length / 2);
    secondHalf = stringArray
      .slice(stringArray.length / 2)
      .split("")
      .reverse()
      .join("");
    if (firstHalf === secondHalf) {
      return true;
    } else {
      return false;
    }
  }
  if (stringArray.length % 2 === 1) {
    firstHalf = stringArray.slice(0, stringArray.length / 2);
    secondHalf = stringArray
      .slice((stringArray.length + 1) / 2)
      .split("")
      .reverse()
      .join("");
    console.log(firstHalf);
    console.log(secondHalf);
    if (firstHalf === secondHalf) {
      return true;
    } else {
      return false;
    }
  }
}
