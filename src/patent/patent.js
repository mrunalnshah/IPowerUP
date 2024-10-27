const facts = [
    "A Patent is a legal right granted by a government to an inventor, giving them exclusive rights to their invention for a specified period, typically 20 years. This protection prevents others from making, using, or selling the invention without the inventor's permission. Patents encourage innovation by allowing inventors to profit from their creations. To be patentable, an invention must be novel, non-obvious, and useful.",
    "Fact 1: An invention refers to a novel product or process that introduces a unique method of achieving a specific function or solving a problem, distinguishing it from existing solutions. To qualify as an invention, it must not only be new but also offer a significant improvement or technical advancement over trivial or obvious alternatives, thereby contributing to technological progress and innovation.",
    "Fact 2: The Patents Act of 1970 is the primary legislation governing patent rights in India, establishing the legal framework for patent registration and protection. It was enacted to promote innovation and protect the interests of inventors while balancing public access to knowledge. The Act came into force in 1972 and has undergone several amendments.",
    "Fact 3: Antonio Meucci invented the first telephone in 1871 but was unable to secure a patent due to financial constraints, notably his refusal to pay a ten-dollar fee. Five years later, Alexander Bell patented the invention, leading to significant financial success, while Meucci's contributions went largely unrecognized, highlighting the tragic consequences of innovation without adequate protection.",
    "Fact 4: In India, the term of every patent is 20 years from the date of filing the patent application, regardless of whether a provisional or complete specification is submitted. This standard duration applies to all patents to ensure uniformity in intellectual property protection. For applications filed under the PCT, the 20-year term starts from the international filing date, providing a streamlined process.",
    "Fact 5: Samsung Company had to pay 1.5 billion US dollars for the design stolen incidentally: the rounded corners of a tablet. All this was due to the fact that it had not occurred to the marketing department of the Corporation to carry out a preliminary check and to find out that such design was legally owned by Apple Company. They paid an impressive penalty for this."
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
  