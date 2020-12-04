window.onload = () => {
  "use strict";

  // test si le navigateur du client gère le serviceWorker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js"); // le cas échant on enregistre notre gestionnaire
  }
};

// configurer la combinaison secrète aléatoire
var secret = [];

function seqOrdi() {
  start.classList.add("hidden");
  uno.classList.remove("hidden");
  dos.classList.remove("hidden");
  tres.classList.remove("hidden");
  quatro.classList.remove("hidden");
  val.classList.remove("hidden");
  sequence.classList.remove("hidden");
  wonlose.classList.add("hidden");
  for (var i = 0; i < 4; i++) {
    secret[i] = Math.floor(Math.random() * 4 + 1);
  }
  console.log(secret);
}

// rentrer la combinaison du joueur
var tentative = [];

function oneClick() {
  tentative.push(1);
  document.getElementById("sequence").innerHTML = tentative;
}
function twoClick() {
  tentative.push(2);
  document.getElementById("sequence").innerHTML = tentative;
}
function threeClick() {
  tentative.push(3);
  document.getElementById("sequence").innerHTML = tentative;
}
function fourClick() {
  tentative.push(4);
  document.getElementById("sequence").innerHTML = tentative;
}

var nbtent = 0;

function seqJoueur() {
  console.log(tentative);

  // déterminer le nombre de chiffres mal placés
  var BP = 0;

  for (var i = 0; i < 4; i++) {
    if (secret[i] == tentative[i]) {
      BP++;
    }
  }

  console.log(BP + " bien placé");
  document.getElementById("BienP").innerHTML = BP + " bien placé";

  // déterminer le nombre de chiffres mal placés
  var MP = 0;

  if (
    !(tentative[0] == secret[0]) &&
    (tentative[0] == secret[1] ||
      tentative[0] == secret[2] ||
      tentative[0] == secret[3])
  ) {
    MP++;
  }
  if (
    !(tentative[1] == secret[1]) &&
    (tentative[1] == secret[0] ||
      tentative[1] == secret[2] ||
      tentative[1] == secret[3])
  ) {
    MP++;
  }
  if (
    !(tentative[2] == secret[2]) &&
    (tentative[2] == secret[0] ||
      tentative[2] == secret[1] ||
      tentative[2] == secret[3])
  ) {
    MP++;
  }
  if (
    !(tentative[3] == secret[3]) &&
    (tentative[3] == secret[0] ||
      tentative[3] == secret[1] ||
      tentative[3] == secret[2])
  ) {
    MP++;
  }

  console.log(MP + " mal placé");
  document.getElementById("MalP").innerHTML = MP + " mal placé";

  // supprimer les données du tableau tentative
  enleves = tentative.splice(0);

  // affiche dans la console "Perdu !" quand l'utilisateur a utilisé ses 12 tentatives
  nbtent++;
  if (nbtent == 12) {
    console.log("Perdu !");
    wonlose.classList.remove("hidden");
    document.getElementById("wonlose").innerHTML =
      "Perdu ! La combinaison était : " + secret;
    start.classList.remove("hidden");
    uno.classList.add("hidden");
    dos.classList.add("hidden");
    tres.classList.add("hidden");
    quatro.classList.add("hidden");
    val.classList.add("hidden");
    sequence.classList.add("hidden");
    BienP.classList.add("hidden");
    MalP.classList.add("hidden");
  }

  // affiche dans la console "Gagné !" quand l'utilisateur a trouvé la combinaison
  if (BP == 4) {
    console.log("Gagné !");
    wonlose.classList.remove("hidden");
    document.getElementById("wonlose").innerHTML =
      "Gagné ! La combinaison était bien : " + secret;
    start.classList.remove("hidden");
    uno.classList.add("hidden");
    dos.classList.add("hidden");
    tres.classList.add("hidden");
    quatro.classList.add("hidden");
    val.classList.add("hidden");
    sequence.classList.add("hidden");
    BienP.classList.add("hidden");
    MalP.classList.add("hidden");
  }
}
