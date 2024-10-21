const facts = [
    "Fact 1: Copyright lasts the author's lifetime plus 70 years.",
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
  




 