let redCircle = document.getElementById('red-color');
let greenCircle = document.getElementById('green-color');
let blueCircle = document.getElementById('blue-color');

let redResult = document.getElementById('red-result');
let greenResult = document.getElementById('green-result');
let blueResult = document.getElementById('blue-result');

let redInput = document.getElementById('red-input');
let greenInput = document.getElementById('green-input');
let blueInput = document.getElementById('blue-input');
    
function changeColorRed() {
    const val = Math.floor(Math.random() * 256);
    redCircle.style.backgroundColor = `rgb(${val}, 0, 0)`;
    redInput.value = val; // Put value in input
    document.getElementById('red-result').innerText = `Red: ${val}`;
}

// 2. Function for Green
function changeColorGreen() {
    const val = Math.floor(Math.random() * 256);
    greenCircle.style.backgroundColor = `rgb(0, ${val}, 0)`;
    greenInput.value = val;
    document.getElementById('green-result').innerText = `Green: ${val}`;
}

// 3. Function for Blue
function changeColorBlue() {
    const val = Math.floor(Math.random() * 256);
    blueCircle.style.backgroundColor = `rgb(0, 0, ${val})`;
    blueInput.value = val;
    document.getElementById('blue-result').innerText = `Blue: ${val}`;
}

// 4. Function to Mix Background
function changeBackground() {
    let r = redInput.value || 0;
    let g = greenInput.value || 0;
    let b = blueInput.value || 0;
    
    // Change the body or a specific container background
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}