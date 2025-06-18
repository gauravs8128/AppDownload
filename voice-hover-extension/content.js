chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const spokenText = message.text.toLowerCase();

    const elements = document.querySelectorAll("p, span, h1, h2, h3, li, td");

    let bestMatch = null;
    let highestScore = 0;

    elements.forEach(el => {
        const elText = el.innerText.toLowerCase();
        const score = getMatchScore(spokenText, elText);
        if (score > highestScore) {
            highestScore = score;
            bestMatch = el;
        }
    });

    if (bestMatch) {
        bestMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        bestMatch.style.backgroundColor = "yellow";
        simulateHover(bestMatch);
    }
});

function getMatchScore(a, b) {
    const aWords = a.split(" ");
    const bWords = b.split(" ");
    let count = 0;
    aWords.forEach(word => {
        if (bWords.includes(word)) count++;
    });
    return count;
}

function simulateHover(el) {
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    window.scrollTo(x - window.innerWidth / 2, y - window.innerHeight / 2);
}