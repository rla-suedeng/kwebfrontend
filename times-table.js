const displayTimes = () => {
    const num = document.getElementById('number').value;
    const timeResult = document.getElementById('times-result');
    result = [];
    if(num >= 1 & num<=9 & (num % 1 === 0)){
        for(let i = 1; i<10; i++){
            result.push(num + ' X ' + i + ' = ' + num*i + '\n');
        }
        timeResult.innerText = result.join('\n');
    }
    else{
        timeResult.innerText = 'Input Error!';
    }
}