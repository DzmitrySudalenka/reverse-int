module.exports = function reverse (n) {
  
  const absNum = Math.abs(n);
  
  const reversedNumStr = String(absNum).split('').reverse().join('');
  
  const resultNum = Number(reversedNumStr);
  
  return resultNum;
  
}
