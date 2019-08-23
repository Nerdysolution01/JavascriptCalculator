let btn = document.querySelectorAll(".num");
let equal = document.querySelector(".equals");
let clear = document.querySelector(".clear");
let screen = document.querySelector(".viewer");

//adding vvalue to the screen
btn.forEach(function(btn) {
  btn.addEventListener(
    "click",
    () => (screen.innerHTML += btn.getAttribute("data-num"))
  );
});

//mathematicall operation of what is on the screen
equal.addEventListener(
  "click",
  () => (screen.innerHTML = eval(screen.innerHTML))
);

//clearing the screen
clear.addEventListener("click", () => (screen.innerHTML = " "));
