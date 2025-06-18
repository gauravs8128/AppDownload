# 🎤 VoiceHover AI - Talk-Guided Cursor Extension

**VoiceHover AI** is a Chrome Extension that automatically scrolls and highlights elements on a webpage based on your voice. Just click "Start Listening" and speak — it will find and hover over matching content on the screen.

---

## 🚀 Features

- 🎙️ Voice-controlled interaction using Web Speech API
- 🔍 Highlights and scrolls to matching screen content
- 🧠 Simple keyword matching for relevant elements
- 🧪 Works on most text-based webpages (Google Docs, articles, slides)

---

## 📦 Installation

1. **Download or clone this repo.**
2. Extract the folder (if ZIP).
3. Open **Google Chrome** and navigate to `chrome://extensions/`.
4. Enable **Developer Mode** (top-right toggle).
5. Click **“Load unpacked”** and select the extracted folder.
6. Navigate to any webpage and click the extension icon.
7. Click **"🎤 Start Listening"** and speak any visible phrase.

---

## 🛠️ Technologies Used

- JavaScript
- Chrome Extension APIs (Manifest V3)
- Web Speech API (Speech Recognition)
- DOM Parsing and Text Matching

---

## 📁 File Structure

```
voice-hover-extension/
├── manifest.json          # Chrome extension config
├── popup.html             # Extension popup UI
├── popup.js               # Speech recognition logic
├── content.js             # DOM scanning & hover logic
├── background.js          # Placeholder for future features
└── styles.css             # Optional styling
```

---

## ✅ Future Improvements

- 🔊 Whisper or OpenAI GPT integration for smarter matching
- 🧠 Semantic understanding of screen context
- 👁️‍🗨️ OCR support for images and slides (via Tesseract.js)
- 👥 Multi-language and accessibility features

---

## 🧠 Author

Built with ❤️ by Gaurav & ChatGPT

---

## 📄 License

This project is open-source and free to use for educational purposes.
