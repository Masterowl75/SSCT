
let registrationCount = 0;

function register() {
    registrationCount++;
    updateCounter();
}

function updateCounter() {
    const countElement = document.getElementById('count');
    countElement.textContent = registrationCount;
}
