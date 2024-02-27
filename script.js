
let registrationCount = 4;

function register() {
    registrationCount++;
    updateCounter();
}

function updateCounter() {
    const countElement = document.getElementById('count');
    countElement.textContent = registrationCount;
}
