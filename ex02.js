// ex01.js

function greetings(firstname) {
	let greetings = "bienvenut" + firstname + "!";
  return greetings
}

console.log(greetings("")); // Résultat attendu: "Bienvenue, !"
console.log(greetings("Ben")); // Résultat attendu: "Bienvenue, Ben !"