const bilbo = document.createElement("li")
bilbo.textContent = "Bilbo Baggins"

const hobbits = document.querySelector(".hobbits")
hobbits.appendChild(bilbo)

const legos = document.createElement("li")
legos.textContent = "Legolas"

const elves = document.querySelector(".elves")
const gorfield  = elves.children[0]
elves.insertBefore(legos,gorfield)

const aragorn = document.createElement("li")
aragorn.textContent = "Aaragorn"

const humans = document.querySelector(".humans")
const bormir = humans.children[2]
humans.insertBefore(aragorn,bormir)