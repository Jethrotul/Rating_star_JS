var vacio = 0;
function relleno(e) {
  if (vacio == 1) {
    for (var i = 1; i < 6; i++) {
      document.getElementById("estrella" + i).classList.remove("fas");
      document.getElementById("estrella" + i).classList.add("far");
      document.getElementById("estrella" + i).style.color = "#FD0";
      vacio = 0;
    }
  }
  for (var i = 1; i <= e.substr(8, 8); i++) {
    document.getElementById("estrella" + i).classList.remove("far");
    document.getElementById("estrella" + i).classList.add("fas");
    document.getElementById(e).style.color = "#FD0";
    vacio = 0;
  }
}
function vaciado(e) {
  if (vacio == 0) {
    for (var i = 1; i <= e.substr(8, 8); i++) {
      document.getElementById("estrella" + i).classList.remove("fas");
      document.getElementById("estrella" + i).classList.add("far");
    }
  }
}
function fijado(e) {
  for (var i = 1; i <= e.substr(8, 8); i++) {
    document.getElementById("estrella" + i).classList.remove("far");
    document.getElementById("estrella" + i).classList.add("fas");
    document.getElementById("estrella" + i).style.color = "#F95";
    vacio = 1;
  }
}
