const durationInput = document.getElementById("duration");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");

class Timer {
  constructor(durationInput, startBtn, pauseBtn) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;

    console.log(this);

    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }

  start = () => {
    console.log("click");
    console.log(this);
  };

  pause = () => {
    console.log("click");
  };

  onDurationChange = () => {};
}

const timer = new Timer(durationInput, startBtn, pauseBtn);
