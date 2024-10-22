const facts = [
    `<p>Fact : The Statute of Anne, passed in England in 1710, was a milestone in the history of copyright law.</p>

     <p>It recognized that authors should be the primary beneficiaries of copyright law and established the idea that such copyrights should have only limited duration (then set at 28 years), after which works would pass into the public </p>`,
    `Fact 2: The Copyright Act of 1957 provides three types of remedies: administrative, civil, and criminal. The criminal remedies are covered under Chapter 13 of the statute, and the penalties upon infringement include imprisonment of up to 3 years along with a fine of up to Rs.200,000.`,
    `Fact 3: Copyright protects the specific way you express your ideas, not the ideas themselves. This distinction encourages a balance between fostering creativity and allowing others to innovate.`,
    `Fact 4: Copyright, the exclusive, legally secured right to reproduce, distribute, and perform a literary, musical, dramatic, or artistic work.`,
    `Fact 5: The Copyright Act of 1957 marked the inception of Copyright legislation in Independent India. Till now, the law has undergone six amendments (the most recent being the Copyright Amendment Act, 2012).`
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