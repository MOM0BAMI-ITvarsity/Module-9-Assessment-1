// Countdown Timer JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.getElementById('timerDisplay');
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');

    let countdown;
    let timeLeft = 0;

    function updateDisplay() {
        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;

        // Format the time to always show two digits
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }

    function startTimer(duration) {
        timeLeft = duration;
        updateDisplay();
        
        countdown = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert('Time is up!');
                return;
            }
            timeLeft--;
            updateDisplay();
        }, 1000);
    }

    function resetTimer() {
        clearInterval(countdown);
        timeLeft = 0;
        updateDisplay();
    }

    startButton.addEventListener('click', () => {
        const hours = parseInt(prompt('Enter hours:', '0'));
        const minutes = parseInt(prompt('Enter minutes:', '0'));
        const seconds = parseInt(prompt('Enter seconds:', '0'));

        if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
            const totalSeconds = hours * 3600 + minutes * 60 + seconds;
            startTimer(totalSeconds);
        } else {
            alert('Please enter valid numbers.');
        }
    });

    resetButton.addEventListener('click', () => {
        resetTimer();
    });

    // Initialize display
    updateDisplay();
});
