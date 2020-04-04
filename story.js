// Collection of data stored into variables
const name = prompt(`Hello, stranger. What is your name?`);
const place = prompt(`Okay, ${name}, I would like to ask you some questions. First, tell me, what place would you like to visit?`);
const animal = prompt(`What animal scares or disgusts you?`);
const famousPerson = prompt(`Sorry to bring that topic up. Now, ${name}, tell me a famous person you like or that comes to your mind right now.`);
const magicObject = prompt(`Tell me the name of an object that is close to you right now or that comes to your mind.`);
const favoriteFood = prompt(`Let's move to more pleasant things, shall we, ${name}? What is your favorite food?`);
const favoriteDrink = prompt(`And what is your favorite drink?`);
alert(`Thank you for your patience, ${name}. Now, I would like to tell you a story.`);

// Combination of the input with other words to create a story.
let story = `Upon visiting ${place}, you were attacked by a giant, rabid, mutant ${animal.toLowerCase()}.<p>Suddenly, ${famousPerson} came to your aid and gave you a magical ${magicObject}. With it you, then, transformed the evil ${animal.toLowerCase()} into a delicious ${favoriteFood.toLowerCase()} which you and ${famousPerson} savored along with lots of ${favoriteDrink.toLowerCase()}.</p><p>You, ${name}, are a <strong>Hero</strong>!</p>` 

// Applying the story inside the HTML document.
document.querySelector('main').innerHTML = `<p>${story}</p>`;