// generate a random color in hex format

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;

// start changing the background color every second

let intervalId

    const startChangingColor = function() {

        if (!intervalId) { // only start if there isn't already an interval running
            intervalId = setInterval(changingColor, 1000);
        }
        
        function changingColor(){
            document.body.style.backgroundColor = randomColor();
        }
    }
    const stopChangingColor = function() {
        clearInterval(intervalId);
        intervalId = null; // stop the interval and reset the id
    }

    document.querySelector('#start').addEventListener('click', startChangingColor);

    document.querySelector('#stop').addEventListener('click', stopChangingColor);
}