module.exports = function check(str, bracketsConfig) {
  let strIsArr = str.split('');

  for (let i = 0; i < strIsArr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (strIsArr[i] == bracketsConfig[j][1] && strIsArr[i - 1] == bracketsConfig[j][0]){
        strIsArr.splice(i - 1, 2);
        i = 0;
        break;
      }
    }
  }

  return strIsArr == 0 ? 1 : 0;
}
