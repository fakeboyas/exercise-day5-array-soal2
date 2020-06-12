let teamImpact = [
    "Boyas",
    "Agus",
    "Ciputra",
    "geraldo",
    "Juan",
    "Resha",
    "Rohmad",
    "Sinta",
    "Tri",
    "Wildan",
];

console.log(teamImpact.join());

const team1 = teamImpact.splice(0, 5);
const team2 = teamImpact;
//team 1
let team1list = team1.map((team) => `<li>${team}</li>`);
// Memilih ketua Team 1
document.getElementById("ketua1").innerHTML = `Ketua Team 1: ${team1.shift()}`;

document.getElementById("team1").innerHTML = team1list;

// team 2
let team2list = team2.map((team) => `<li>${team}</li>`);
// Memilih ketua Team 2
document.getElementById("ketua2").innerHTML = `Ketua Team 2: ${team2.shift()}`;
document.getElementById("team2").innerHTML = team2list;
