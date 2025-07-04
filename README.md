
# 🌗 Theme Switcher - Chrome Extension

A lightweight and easy-to-use Chrome Extension that allows users to toggle any website between **Dark Mode** and **Light Mode** instantly. Whether you're browsing at night or just want to reduce eye strain, this tool helps you switch themes with a single click.

---

## ✨ Features

- 🌙 **Dark Mode**: Inverts site colors for a comfortable night experience.
- ☀️ **Light Mode**: Switch back to normal with one click.
- 🔁 **Toggle Button**: Simple popup with a toggle interface.
- ⚡ **Quick Execution**: Instantly applies the theme without reloading.
- 🧠 **Smart Inversion**: Keeps images and videos unaffected.

---

## 🛠 Installation

1. **Clone or download** this repository.

   ```bash
   git clone https://github.com/AvantikaShukla03/chrome_extension.git
   ```

2. Open **Google Chrome** and go to:

   ```
   chrome://extensions/
   ```

3. Turn on **Developer Mode** (toggle in the top right).

4. Click on **Load Unpacked**.

5. Select the folder containing the extension files (`theme-switcher-extension/`).

---

## 📁 File Structure

```
theme-switcher-extension/
├── index.html         # Popup interface
├── popup.js           # JavaScript logic for theme toggling
├── style.css          # Styling for the popup
├── manifest.json      # Chrome extension configuration
```

---

## 🧠 How It Works

- Clicking the extension icon opens a small popup with a **"Toggle Theme"** button.
- When clicked, a script is injected into the active tab.
- The script adds or removes an inverted color style to simulate dark/light mode.
- Images and videos are auto-corrected to prevent visual distortion.
---

## 🔒 Permissions

This extension uses the following Chrome permissions:

```json
"permissions": ["scripting", "activeTab", "storage"]
```

These permissions are needed to:
- Inject the toggle script into the current tab.
- Store user preferences (optional).
---

## 🚀 Future Enhancements

- Save preferred theme on a per-site basis.
- Add auto-theme switching based on system settings or time of day.
- Add theme presets with different color combinations.
---

## 🤝 Contributing

Contributions are welcome!  
If you find bugs or want to suggest features, please open an issue or submit a pull request.

---
