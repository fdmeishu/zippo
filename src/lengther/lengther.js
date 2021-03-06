/**
 * @desc 根据配置识别中英文，按长度截取字符串
 * @param {string} str 待切割字符
 * @param {number} len 长度限制，以英文或半角符号为1个单位长度，中文占2个
 */

function index(str, len) {
  str = isStr(str);
  var weight = 0,
    tmp = '',
    i=0;
  while(weight <= len && i < str.length){
    tmp += str[i];
    if(isZh(str[i])){
      weight += 2;
    }else{
      weight += 1;
    }
    i++;
  }
  if(tmp.length < str.length){
    tmp += '…';
  }
  return tmp;
}

function isStr(str){
  if(str == undefined || str == '' || str == null || !str.toString()){
    str = '-';
  }else{
    str = str.toString();
  }
  return str;
}

function isZh(token) {
  if(token.charCodeAt(0) > 128){
    return true;
  }else{
    return false;
  }
}

module.exports = {
  cut: index
}