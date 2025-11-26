let time = Number(prompt("Enter number of seconds to count down:"));

const timer = setInterval(() => {
  console.log("Time left:", time);
  time--;

  if (time < 0) {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 1000);

setTimeout(() => {
  let key = prompt("Press 's' to stop countdown");

  if (key === "s") {
    clearInterval(timer);
    console.log("Countdown Stopped by User!");
  }
}, 2000);
