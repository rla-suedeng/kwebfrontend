const setRandomBgColor = () => {
    const colorBox = document.getElementById('color-box');
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const bgColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    colorBox.style.backgroundColor = bgColor;
}