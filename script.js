// Countdown Timer (60 seconds loop) with safety checks
let time = 60;

function updateTimer() {
  const el = document.getElementById("timer");
  if (!el) {
    console.warn('Timer element not found (id="timer").');
    return;
  }

  el.textContent = time + "s";

  // Update the large central counter (if present)
  const big = document.getElementById('big-counter');
  if (big) {
    // show just the number (no 's')
    big.textContent = String(time);
    // small pulse animation by toggling a class
    big.classList.remove('pulse');
    // trigger reflow then add class to restart animation
    void big.offsetWidth;
    big.classList.add('pulse');
  }

  time--;
  if (time < 0) {
    time = 60;
  }
}

// Start timer after DOM content loaded to be safe
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    updateTimer();
    setInterval(updateTimer, 1000);
  });
} else {
  updateTimer();
  setInterval(updateTimer, 1000);
}
