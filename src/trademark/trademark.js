const facts = [
    "A Trademark is a recognizable sign, logo, word, or phrase that distinguishes the goods or services of one entity from others. It symbolizes quality and brand identity, allowing consumers to identify the source of products. Protected by law, trademarks grant exclusive rights to their owners and prevent others from using similar marks. This protection builds consumer trust and encourages fair competition.",
    "Fact 1: In India, a registered trademark is initially valid for a period of 10 years from the date of registration. After this term, the trademark can be renewed for additional 10-year periods indefinitely, as long as it continues to be used in commerce. Renewal ensures that the owner retains exclusive rights to the trademark and helps maintain brand recognition. Owners should monitor their registration and renew it.",
    "Fact 2: India adheres to the first-to-use principle for trademark registration, which grants ownership to the first entity that uses a trademark in commerce, regardless of registration status. This approach emphasizes actual use of the mark in the market over mere registration, encouraging businesses to actively utilize their trademarks. Establishing prior use is essential for asserting rights and preventing infringement.",
    "Fact 3: In India, trademarks are categorized into 45 different classes based on the nature of goods and services, following the Nice Classification system. This classification helps streamline the registration process by clearly defining which types of products or services a trademark applies to. Organizing trademarks into distinct classes helps businesses identify conflicts.",
    "Fact 4: India is a member of the Paris Convention for the Protection of Industrial Property, an international treaty that offers a framework for the protection of industrial property, including trademarks. This membership ensures that trademarks registered in India are recognized in other member countries, facilitating international trade and brand protection.",
    "Fact 5: India utilizes the Nice Classification system to categorize trademarks, aligning with international standards for the classification of goods and services. This system includes 45 classes, allowing for a systematic approach to trademark registration, where similar goods or services are grouped together. By adopting this classification, India facilitates easier identification of trademarks."
    
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
  