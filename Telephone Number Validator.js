//checks to see if the telephone number is in a valid format

function telephoneCheck(str) {
  var regex = /^1* *(\(\d{3}\)|\d{3})(-| )*\d{3}(-| )*\d{4}$/;
  return regex.test(str);
}

telephoneCheck("1 555-555-5555");
