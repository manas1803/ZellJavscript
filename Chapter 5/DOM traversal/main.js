// Up to Down Traversal
const characters = document.querySelector(".characters")

const listOfCharacters = Array.from(characters.children)

const hobbit = characters.querySelector(".humans")

const firstCharacter = characters.firstElementChild
console.log(listOfCharacters);
console.log(hobbit);
console.log(firstCharacter);

// Down to Up Traversal
const gandalf = document.querySelector(".gandalf")
const parentGandalf = gandalf.parentElement
const anyParentGandalf = gandalf.closest(".characters")
console.log(gandalf);
console.log(parentGandalf);
console.log(anyParentGandalf)

// Side ways Traversal
const humans1 = document.querySelector(".humans")

const preSibling = humans1.previousElementSibling;
const nexSibling = humans1.nextElementSibling;
const siblings = Array.from(gandalf.closest(".humans").parentElement.children)


console.log(preSibling);
console.log(nexSibling);
console.log(siblings);
