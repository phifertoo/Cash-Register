function checkCashRegister(price, cash, cid) {
  var difference = cash - price;
  var changeObject = {
    status: "OPEN",
    change: []
  };
  var changeArray = JSON.parse(JSON.stringify(cid)).reverse();
  var inputArray = cid.reverse();
  var incrementArray = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  var finalArray = [];
  for (let k = 0; k < changeArray.length; k++) {
    changeArray[k][1] = 0;
  }
  for (let j = 0; j < inputArray.length; j++) {
    while (difference - incrementArray[j] >= 0 && inputArray[j][1] > 0) {
      inputArray[j][1] -= incrementArray[j];
      changeArray[j][1] += incrementArray[j];
      changeArray[j][1] = Math.round(changeArray[j][1] * 100) / 100;
      difference -= incrementArray[j];
      difference = Math.round(difference * 100) / 100;
    }
    if (changeArray[j][1] > 0) {
      finalArray.push(changeArray[j]);
    }
  }
  var remainingCash =
    Math.round(
      inputArray.reduce(function(acc, nextVal) {
        return (acc += nextVal[1]);
      }, 0) * 100
    ) / 100;
  changeObject.change = finalArray.reverse();
  if ((remainingCash === 0) & (difference === 0)) {
    changeObject.status = "CLOSED";
    return changeObject;
  } else if (difference > 0) {
    changeObject.status = "INSUFFICIENT_FUNDS";
    return changeObject;
  } else {
    return changeObject;
  }
}
