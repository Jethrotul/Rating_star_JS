let list = document.querySelectorAll(".star");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", fijar);
  list[i].addEventListener("mouseover", rellenar);
  list[i].addEventListener("mouseout", vaciar);
}
let fijacion = 0;
function fijar() {
  if (fijacion == 0) {
    return (fijacion = 1);
  } else if (fijacion == 1) {
    for (let i = 1; i < 6; i++) {
      document.getElementById("star" + i).classList.remove("fas");
      document.getElementById("star" + i).classList.add("far");
    }
    return (fijacion = 0);
  }
}
function rellenar() {
  if (fijacion == 0) {
    for (let i = 1; i <= this.id.substr(4, 4); i++) {
      document.getElementById("star" + i).classList.remove("far");
      document.getElementById("star" + i).classList.add("fas");
      fijacion = false;
    }
  }
}
function vaciar() {
  if (fijacion == 0) {
    for (let i = 1; i <= this.id.substr(4, 4); i++) {
      document.getElementById("star" + i).classList.remove("fas");
      document.getElementById("star" + i).classList.add("far");
    }
  }
}
