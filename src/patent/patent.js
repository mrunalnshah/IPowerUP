const facts = [
    "Copyright is a legal right that grants creators exclusive rights to reproduce, use, and duplicate their original work for a set period. This protection applies to works created independently and in tangible form, known as Original Works of Authorship (OWA). However, copyright does not cover ideas, concepts, theories, or certain items like brand names and logos. Once a copyright expires, the work enters the public domain.",
    "Fact 1: The 1710 Statute of Anne was a landmark in copyright history, establishing authors as primary beneficiaries and setting a limited copyright duration of 28 years, after which works would enter the public domain.",
    "Fact 2: The Copyright Act of 1957 offers administrative, civil, and criminal remedies, with Chapter 13 prescribing up to 3 years' imprisonment and fines up to Rs. 200,000 for infringement.",
    "Fact 3: Copyright protects the specific way you express your ideas, not the ideas themselves. This distinction encourages a balance between fostering creativity and allowing others to innovate.",
    "Fact 4: Copyright, the exclusive, legally secured right to reproduce, distribute, and perform a literary, musical, dramatic, or artistic work.",
    "Fact 5: The Copyright Act of 1957 marked the inception of Copyright legislation in Independent India. Till now, the law has undergone six amendments (the most recent being the Copyright Amendment Act, 2012).",
    "Fact 6: Work of joint authorship means a work produced by the collaboration of two or more authors in which the contribution of one author is not distinct from the contribution of the other author or authors.",
    "Fact 7: In 2016, Starbucks sued Obsidian Group, claiming its Freddoccino drink name infringed on the Frappuccino trademark. Despite Obsidian renaming it the Freddo, Starbucks continued the case, still unresolved as of mid-2022."
  ];
  
  let currentFactIndex = 0;
  const factElement = document.getElementById('facts');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  // Show fact with slide-in effect
  function showFact(index, direction) {
    factElement.style.transition = 'transform 0.5s ease-in-out';
    factElement.style.transform = `translateX(${direction === 'next' ? '-100%' : '100%'})`;
  
    setTimeout(() => {
      factElement.textContent = facts[index];
      factElement.style.transition = 'none';
      factElement.style.transform = `translateX(${direction === 'next' ? '100%' : '-100%'})`;
  
      setTimeout(() => {
        factElement.style.transition = 'transform 0.5s ease-in-out';
        factElement.style.transform = 'translateX(0)';
      }, 20);
    }, 500);
  }
  

  
  // Update fact on button click with direction for sliding effect
  prevButton.addEventListener('click', () => {
    currentFactIndex = (currentFactIndex === 0) ? facts.length - 1 : currentFactIndex - 1;
    showFact(currentFactIndex, 'prev');
  });
  
  nextButton.addEventListener('click', () => {
    currentFactIndex = (currentFactIndex === facts.length - 1) ? 0 : currentFactIndex + 1;
    showFact(currentFactIndex, 'next');
  });
  
  // Initialize
  showFact(currentFactIndex, 'next');
  