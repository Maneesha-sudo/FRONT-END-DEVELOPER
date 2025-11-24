let seconds = parseInt(prompt("Enter seconds to countdown:"));

let timer = setInterval(() => {
  console.log(seconds);
  seconds--;

  if (seconds < 0) {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 1000);

// Check for stop key after 2 seconds
setTimeout(() => {
  let key = prompt("Press 's' to stop countdown");

  if (key === "s") {
    clearInterval(timer);
    console.log("Countdown Stopped by User!");
  }
}, 2000);
