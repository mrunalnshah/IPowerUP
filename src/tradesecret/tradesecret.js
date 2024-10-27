const facts = [
    "A Trade Secret is any confidential business information that provides a competitive advantage, such as formulas, practices, processes, designs, or customer lists. Unlike patents, trade secrets are not registered and remain protected as long as they are kept confidential and provide economic value. Legal protection against trade secret theft typically involves nondisclosure agreements.",
    "Fact 1: Under contract law, a person can be bound contractually from disclosing information. For instance, non-disclosure agreements (NDAs) is the most common tool to protect trade secrets. Non-disclosure agreements (NDAs) protect trade secrets by specifying confidential information that must remain undisclosed to third parties. NDAs protect trade secrets by specifying confidential information.",
    "Fact 2: Google has developed a sophisticated search algorithm that it continually refines to enhance user experience and search result relevance. While some updates are announced, many remain undisclosed to prevent exploitation for better rankings. This ongoing evolution helps maintain Google's dominance as the leading search engine, delivering accurate and timely information.",
    "Fact 3: According to the World Intellectual Property Organization (WIPO), trade secrets are intellectual property rights that protect confidential information, enabling businesses to sell or license it. Unlike patents and trademarks, trade secrets do not require formal registration, making it easier for companies to safeguard proprietary information. This lack of registration highlights the need for maintaining confidentiality.",
    "Fact 4: The New York Times is known for its influential bestseller list, which serves as a benchmark in the United States. However, the specific criteria for determining bestsellers remain undisclosed, making the process somewhat enigmatic. Rankings consider not just sales volume but also sales patterns, regional variations, and market trends. Ultimately, the list shapes public perception and significantly influences book sales.",
    "Fact 5: Patent protection lasts for 20 years from the filing date, granting inventors exclusive rights to their inventions. Copyright protection extends up to 70 years after an author’s death, ensuring that heirs benefit from creative works. Trademark protection is indefinite but requires renewal every 10 years to remain valid. In contrast, a trade secret can be protected indefinitely as long as it remains confidential."
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
  