const name = 'peter'
const repoCount = 40

// console.log(name + repoCount + 'value'); => peter40value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('gear-gun')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = '  GearGod   '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://geargun.com/geargod%20category'

console.log(url.replace('%20', '-'));
console.log(url.includes('rubygod'));
console.log(gameName.split('-'));













