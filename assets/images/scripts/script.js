// **Typewriter Effect**
const typewriterWords = ["Web Designer", "Web Developer", "Frontend Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
const typewriterText = document.getElementById("dynamic-text");

function typeWriterEffect() {
  if (charIndex < typewriterWords[wordIndex].length) {
    typewriterText.textContent += typewriterWords[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriterEffect, 100); // Typing speed
  } else {
    setTimeout(eraseEffect, 1500); // Pause before erasing
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typewriterText.textContent = typewriterWords[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50); // Erasing speed
  } else {
    wordIndex = (wordIndex + 1) % typewriterWords.length; // Move to next word
    setTimeout(typeWriterEffect, 500); // Pause before typing next word
  }
}

document.addEventListener("DOMContentLoaded", () => typeWriterEffect());

// **Dynamic Word Cycling (CREATIVE, INNOVATIVE, etc.)**
const dynamicWords = ["CREATIVE", "INNOVATIVE", "PASSIONATE", "DEDICATED"];
let currentWordIndex = 0;

function updateWord() {
  const dynamicWordElement = document.getElementById("dynamic-word");
  currentWordIndex = (currentWordIndex + 1) % dynamicWords.length; // Loop through the words
  dynamicWordElement.textContent = dynamicWords[currentWordIndex];
}

// Change the word every 3 seconds
setInterval(updateWord, 3000);
