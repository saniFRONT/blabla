let current = 1;
const audio = document.getElementById("bg-music");
audio.volume = 0.15;

function next(step) {
  document.getElementById("screen" + current).classList.remove("active");
  document.getElementById("screen" + step).classList.add("active");
  current = step;
}
