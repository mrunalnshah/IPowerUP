const facts = [
    "Copyright is a legal right that grants creators exclusive rights to reproduce, use, and duplicate their original work for a set period. This protection applies to works created independently and in tangible form, known as Original Works of Authorship (OWA). However, copyright does not cover ideas, concepts, theories, or certain items like brand names and logos. Once a copyright expires, the work enters the public domain.",
    "Fact 2: Copyright protects both published and unpublished works.",
    "Fact 3: Copyright does not protect ideas, only their expression.",
    "Fact 4: Infringement can lead to fines and legal action.",
    "Fact 5: Fair use allows limited copying for certain purposes."
];

let currentFactIndex = 0;

const factElement = document.getElementById('fact');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showFact(index) {
    factElement.textContent = facts[index];
}

prevButton.addEventListener('click', () => {
    currentFactIndex = (currentFactIndex === 0) ? facts.length - 1 : currentFactIndex - 1;
    showFact(currentFactIndex);
});

nextButton.addEventListener('click', () => {
    currentFactIndex = (currentFactIndex === facts.length - 1) ? 0 : currentFactIndex + 1;
    showFact(currentFactIndex);
});