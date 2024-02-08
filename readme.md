// 使用 randomone 包
const RandomOne = require('randomone');

// 传入昵称数组和可选信息
const nicknamesArray = ['CoolGuy', 'AwesomeCoder', 'HappyDev', 'TechGeek'];
const options = { prefix: 'Mr_' };  // 可选信息

// 创建 randomone 实例
const randomOneNickname = new RandomOne(nicknamesArray, options);

// 直接调用获取随机昵称的函数
const randomNickname = randomOneNickname();
console.log(randomNickname);