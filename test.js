const RandomOne = require('randomone');
const nicknamesArray = ['CoolGuy', 'AwesomeCoder', 'HappyDev', 'TechGeek'];
const randomOneNickname = RandomOne(nicknamesArray, { suffix: "_", addRandomizeSuffix: true });
console.log(randomOneNickname());
