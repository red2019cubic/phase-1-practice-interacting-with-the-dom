const h1 = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const now = new Date().getTime();
const commentForm = document.getElementsByTagName("form")[0];
let playing = !0;

function _toConsumableArray(a) {
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
    return c;
  }
  return Array.from(a);
}
let seconds = Math.floor((now % (1000 * 60)) / 1000);
(timer = function () {
  return setInterval(function () {
    const a = document.getElementById("counter");
    const b = parseInt(a.innerText);
    a.innerText = b + 1;
  }, 1000);
}),
  (h1.textContent = timer());
minus.addEventListener("click", () => {
  const counter = document.getElementById("counter");
  const b = parseInt(counter.innerText);
  counter.innerText = b - 1;
});

plus.addEventListener("click", () => {
  const counter = document.getElementById("counter");
  const b = parseInt(counter.innerText);
  counter.innerText = b + 1;
});

heart.addEventListener("click", function () {
  const counter = document.getElementById("counter");
  const b = parseInt(counter.innerText);
  const div = document.getElementById("list");

  const h4 = document.createElement("li");

  h4.textContent = `${b} Likes`;
  div.appendChild(h4);
});
let interval = timer();
pause.addEventListener("click", function () {
  playing
    ? ((playing = !1), clearInterval(interval), (this.innerText = "resume"))
    : ((playing = !0), (interval = timer()), (this.innerText = "pause")),
    []
      .concat(_toConsumableArray(document.getElementsByTagName("button")))
      .forEach(function (a) {
        "pause" !== a.id && (a.disabled = !playing);
      });
});

commentForm.addEventListener("submit", function (a) {
  a.preventDefault();
  const b = this.children[0],
    c = b.value;
  b.value = "";
  const d = document.querySelector(".comments"),
    e = document.createElement("p");
  (e.innerText = c), d.appendChild(e);
});
