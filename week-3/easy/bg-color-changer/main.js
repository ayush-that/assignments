function redBg() {
  document.body.style.backgroundColor = "red";
}

function yellowBg() {
  document.body.style.backgroundColor = "yellow";
}

function greenBg() {
  document.body.style.backgroundColor = "green";
}

function blackBg() {
  document.body.style.backgroundColor = "black";
}

function blueBg() {
  document.body.style.backgroundColor = "blue";
}

function defaultBg() {
  document.body.style.backgroundColor = "white";
}

function customBg() {
  const customBg = document.querySelector("input").value;
  document.body.style.backgroundColor = customBg;
}
