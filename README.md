# Web-Technology-Fingerprinter

A lightweight browser extension that identifies the technologies used by any webpage — including CMSs, JavaScript frameworks, analytics tools, and more. Detects the technology stack of any webpage including CMS, JS frameworks, analytics, and more. Works as a Chrome/Firefox extension.

## 🌐 Overview

**Web-Technology-Fingerprinter** analyzes client-side data (DOM, scripts, patterns, and hints) to detect what tools and frameworks a website is built with.  
Useful for developers, students, researchers, and anyone curious about how websites work under the hood.

## ✨ Features

- Detects popular:
  - Content Management Systems (CMS)
  - Frontend & backend frameworks
  - JavaScript libraries
  - Analytics & tracking tools
- Runs entirely client-side — no server involved  
- Works as a browser extension for **Chrome** and **Firefox**
- Clean popup UI with quick insights  
- Simple and fast detection

## 🚀 Installation

### **1. Clone the Repository**
```
git clone https://github.com/TheRuchirShah/Web-Technology-Fingerprinter.git
```
### **2\. Install in Chrome**

1.  Open chrome://extensions/
2.  Toggle **Developer Mode** on
3.  Click **Load Unpacked**
4.  Select the project folder
    

### **3\. Install in Firefox**

1.  Open about:debugging
2.  Select **This Firefox**
3.  Click **Load Temporary Add-on**
4.  Choose the manifest.json file

## 📁 Project Strucure
Web-Technology-Fingerprinter/
│
├── manifest.json        # Extension manifest
├── popup.html           # Popup UI layout
├── popup.css            # Popup styling
├── popup.js             # Technology detection logic
└── README.md


## ⚙️ How It Works

The extension evaluates:
* HTML patterns
* Script tags and inline JavaScript clues
* Network hints where available
* Library-specific markers and signatures
It then displays the best-matched technologies with confidence based on detected signals.

## 🧪 Limitations

* Detection is best-effort and not always perfect
* Some sites obfuscate or hide their tech stack
* Purely client-side — cannot detect server-only technologies unless exposed indirectly

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch (feature/my-improvement)
3. Commit your changes
4. Open a Pull Request with details

Feel free to add new technology signatures, enhance detection, or improve UI/UX.
3. Commit your changes
4. Open a Pull Request with details
Feel free to add new technology signatures, enhance detection, or improve UI/UX.
