const facts = [
    "Copyright is a legal right that grants creators exclusive rights to reproduce, use, and duplicate their original work for a set period. This protection applies to works created independently and in tangible form, known as Original Works of Authorship (OWA). However, copyright does not cover ideas, concepts, theories, or certain items like brand names and logos. Once a copyright expires, the work enters the public domain.",
    "Fact 1: The 1710 Statute of Anne, passed in Great Britain, marked a milestone in copyright law by establishing authors, not publishers, as the primary copyright beneficiaries. It set a copyright term of 14 years, renewable once to a maximum of 28 years, after which works entered the public domain. This law balanced creators' rights with public access, laying the groundwork for modern copyright principles.",
    "Fact 2: The Copyright Act of 1957 provides comprehensive protection for intellectual property in India, offering administrative, civil, and criminal remedies for copyright infringement. Chapter 13 of the Act includes strict penalties for violators, prescribing imprisonment for up to 3 years and fines reaching Rs. 200,000. These provisions aim to deter unauthorized use and ensure the enforcement of creators' rights.",
    "Fact 3: Copyright law protects the unique expression of ideas, such as the words, images, or forms used to convey them, rather than the ideas themselves. This distinction allows others to build on general concepts and themes, promoting a balance between individual creative rights and broader innovation.Copyright protects expression, not ideas, encouraging originality while keeping ideas open for public use.",
    "Fact 4: Copyright is a legal right granting creators exclusive control over the reproduction, distribution, and performance of their original literary, musical, dramatic, or artistic works. This protection ensures that creators can benefit financially and retain control over how their work is used. Copyright encourages creativity and provides a framework for managing the use and sharing of intellectual property.",
    "Fact 5: The Copyright Act of 1957 was the first major copyright legislation in independent India, establishing a framework for protecting creative works. Since then, it has been amended six times, with the most recent being the Copyright Amendment Act of 2012. These amendments enhance protection for creators and adapt to technological changes. They also ensure compliance with international copyright standards."
    
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
  