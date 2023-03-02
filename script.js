let screen = document.querySelector('.screen');
let clear = false;

function appendToScreen(value) {
    if (clear) {
        screen.textContent = '';
        clear = false;
    }
    screen.textContent += value;
}

function clearScreen() {
    screen.textContent = '';
}

function deleteChar() {
    screen.textContent = screen.textContent.slice(0, -1);
}

function calculate() {
    screen.textContent = eval(screen.textContent);
    clear = true;
}
