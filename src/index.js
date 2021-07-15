module.exports = function check(str, bracketsConfig) {
  const pairs = {},
      strArr = str.split(''),
      stek = [];
  let bool = true;    
  bracketsConfig.forEach(item => {
    pairs[item[0]] = item[1];
  });
  strArr.forEach(item => {
    if (item in pairs && (item != pairs[item] || !stek.length || item != stek[stek.length-1])) {
      stek.push(item);
    } else if (stek.length > 0 && item === pairs[stek[stek.length-1]]) {
      stek.pop();
    } else {
      bool = false;
    }
  });
  if (bool && stek.length == 0) {
    return true;
  } else { 
    return false;
  }
}
