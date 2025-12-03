const scanBtn = document.getElementById('scanBtn');
const resultList = document.getElementById('resultList');

scanBtn.addEventListener('click', async () => {
    resultList.innerHTML = '<li>Scanning...</li>';
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: detectTech
    }, (results) => {
        const tech = results[0].result;
        if (!tech.length) {
            resultList.innerHTML = '<li>No known tech detected</li>';
        } else {
            resultList.innerHTML = '';
            tech.forEach(t => {
                const li = document.createElement('li');
                li.textContent = t;
                resultList.appendChild(li);
            });
        }
    });
});

// Simple detection function
function detectTech() {
    const tech = [];

    // JS Frameworks
    if (window.React) tech.push("React");
    if (window.angular) tech.push("Angular");
    if (window.Vue) tech.push("Vue.js");

    // CMS detection via meta generator
    const generator = document.querySelector('meta[name="generator"]');
    if (generator) tech.push(generator.content);

    // Google Analytics
    if (window.ga || window.gtag) tech.push("Google Analytics");

    // jQuery
    if (window.jQuery) tech.push("jQuery");

    return tech;
}
