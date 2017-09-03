color = [];
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
color.push(getRandomIntInclusive(0,255));
color.push(getRandomIntInclusive(0,255));
color.push(getRandomIntInclusive(0,255));
console.log(color)
