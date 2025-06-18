const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';

recognition.onresult = function(event) {
    const transcript = event.results[event.results.length - 1][0].transcript;
    console.log("Heard:", transcript);
    chrome.runtime.sendMessage({ text: transcript });
};

document.getElementById("startBtn").onclick = () => recognition.start();