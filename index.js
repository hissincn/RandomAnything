/*
    Author:hissin
    Date:2024/02/0
    Email:hissin@126.com
    Blog:https://hissin.cn

*/

function RandomOne(nicknamesArray, options = {}) {
    const {
        prefix = '',
        suffix = '',
        addRandomizePrefix = false,
        addRandomizeSuffix = false
    } = options;

    function getRandomNickname() {
        const randomIndex = Math.floor(Math.random() * nicknamesArray.length);
        let nickname = nicknamesArray[randomIndex];

        if (addRandomizePrefix) {
            const randomPrefix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
            nickname = randomPrefix + prefix + nickname;
        } else {
            nickname = prefix + nickname;
        }

        if (addRandomizeSuffix) {
            const randomSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
            nickname = nickname + suffix + randomSuffix;
        } else {
            nickname = nickname + suffix;
        }

        return nickname;
    }

    return getRandomNickname;
}

module.exports = RandomOne;
