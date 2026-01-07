const KEY = "tasks";

function doLogin() {
  login.style.display = "none";
  routine.style.display = "block";
}

function create() {
  let t = [
    "Wake up " + wake.value,
    "Study " + study.value,
    "Sleep " + sleep.value
  ];
  localStorage.setItem(KEY, JSON.stringify(t));
  routine.style.display = "none";
  todo.style.display = "block";
  show();
}

function show() {
  list.innerHTML = "";
  (JSON.parse(localStorage.getItem(KEY)) || []).forEach(x => {
    let li = document.createElement("li");
    li.innerText = x;
    li.onclick = () => li.classList.toggle("done");
    list.appendChild(li);
  });
}

task.onkeydown = e => {
  if (e.key == "Enter" && task.value) {
    let t = JSON.parse(localStorage.getItem(KEY)) || [];
    t.push(task.value);
    localStorage.setItem(KEY, JSON.stringify(t));
    task.value = "";
    show();
  }
};

function toggle() {
  document.body.classList.toggle("dark");
}