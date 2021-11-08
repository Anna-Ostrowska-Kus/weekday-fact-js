const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
	' “I am” is the shortest complete sentence in the English language.',
	'A pangram sentence is one that contains every letter in the language.',
	'Supercalifragilisticexpialidocious (*breath*) is NOT the longest word in English.',
	'There are “ghost words” that mean nothing.',
	'The shortest, oldest, and most commonly used word is “I.”',
	'A new word is added to the dictionary every two hours.',
	'Swims will be swims even when turned upside down.',
	'Girl used to mean small boy or girl.'
]

const date = new Date()
// const weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// let day = weekday[date.getDay()]
// currentDay.textContent = day
let day
day = new Date(date).toLocaleString('en-us', {weekday:'long'})
currentDay.textContent = day

let fact = facts [Math.floor(Math.random()*facts.length-1)]


funFact.textContent = fact

