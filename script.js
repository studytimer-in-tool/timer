let timerInterval;
let timeRemaining = 0;
let isRunning = false;

const timeInput = document.getElementById('timeInput');
const timerDisplay = document.getElementById('timerDisplay');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(timeRemaining);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startStopButton.textContent = 'Stop';
        if (timeRemaining <= 0) {
            timeRemaining = parseInt(timeInput.value) * 60 || 0;
        }
        timerInterval = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                alert("Time's up!");
                isRunning = false;
                startStopButton.textContent = 'Start';
            }
        }, 1000);
    } else {
        isRunning = false;
        startStopButton.textContent = 'Start';
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    startStopButton.textContent = 'Start';
    timeRemaining = parseInt(timeInput.value) * 60 || 0;
    updateDisplay();
}

startStopButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize timer display
resetTimer();
