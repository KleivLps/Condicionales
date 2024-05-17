const temperatura = prompt("podrias indicarme la temperatura");

if (temperatura > 30) {
  alert("hace mucho calor!");
} else if (temperatura > 24) {
  alert("hace una temperatura buena");
} else if (temperatura > 18) {
  alert("Hace una temperatura agradable");
} else if (temperatura > 5) {
  alert("hace frio");
} else {
  alert("hace demasiado frio");
}
