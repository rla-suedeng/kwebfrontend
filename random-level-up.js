const probablity = [ 100, 60, 36, 22, 33, 13, 8, 5, 3 ,2, 1];
let curr_level = 0;
let chance_try = 0;

const getRandomBinary = (tryLevel) => {
    const randomNumber = Math.floor(Math.random() * 100);
    return (randomNumber < tryLevel);
}

const tryLevelUp = () => {
    const tryLoopID = setInterval(() => {
        chance_try++;
        const success = getRandomBinary(probablity[curr_level]);
        if (success) {
            curr_level++;
            document.getElementById('gauge-bar').style.width = curr_level*10 + '%';
            document.getElementById('current-level').innerText = curr_level;
        }
        document.getElementById('attempts').innerText = chance_try;

        if (curr_level >= 10 ) clearInterval(tryLoopID);
    }, 50)
}