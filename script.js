// Task 1: Button Click
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", function () {
  alert("Button Clicked Successfully");
});

// Task 2: Change Text on Click
const text = document.getElementById("text");
const changeTextBtn = document.getElementById("changeTextBtn");
changeTextBtn.addEventListener("click", function () {
  text.textContent = "Text Updated Successfully";
});

// Task 3: Background Color Change
const bgBtn = document.getElementById("bgBtn");
const colors = ["lightblue", "lightgreen", "lightyellow", "lightpink", "#ffffff"];
let colorIndex = 0;
bgBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

// Task 4: Input Event (Live Typing)
const liveInput = document.getElementById("liveInput");
const liveText = document.getElementById("liveText");
liveInput.addEventListener("input", function () {
  liveText.textContent = liveInput.value;
});

// Task 5: Mouse Events
const box = document.getElementById("box");
box.addEventListener("mouseenter", function () {
  box.style.backgroundColor = "tomato";
});
box.addEventListener("mouseleave", function () {
  box.style.backgroundColor = "steelblue";
});

// Task 6: Double Click Event
const dblBtn = document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", function () {
  alert("Double Click Detected");
});