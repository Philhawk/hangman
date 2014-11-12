// Store list of words in an array called "words". 
var words = ['Andrew', 'Rusli', 'Phil', 'Angela', 'Jacquie']

// Create a function that randomly selects a word from the array.

var word_selector = function() {
var shuffled_word = words[Math.floor(Math.random() * words.length)];
return shuffled_word
};