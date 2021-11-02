const colors = [ 
    '#FFFFFF', 
    '#2196F3', 
    '#4CAF50', 
    '#FF9800', 
    '#009688', 
    '#795548', 
];

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

let timeoutId = false;

const randomIntegerFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColor = function (array) { 
    return randomIntegerFromInterval(0, (array.length - 1));
};

const onButtonClickBodyColorChange = function () { 
    if(timeoutId) { 
        return; 
    } timeoutId = setInterval(() => { 
        body.style.backgroundColor = `${colors[getRandomColor(colors)]}`; 
    }, 1000);};

    const onButtonClickBodyColorChangeStop = function () { 
        clearInterval(timeoutId); timeoutId = false;
    }
        
startButton.addEventListener('click', onButtonClickBodyColorChange);
stopButton.addEventListener('click', onButtonClickBodyColorChangeStop);