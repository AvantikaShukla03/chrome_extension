
# 🌗 Theme Switcher - Chrome Extension (Manifest V2)

This version of the Theme Switcher Chrome Extension uses **Manifest V2**, which was previously the standard for Chrome Extensions before Manifest V3. It provides the same functionality — allowing users to toggle between **Dark Mode** and **Light Mode** — with minor differences in background script handling.

> ⚠️ Note: Google is phasing out support for Manifest V2. For long-term use, migrating to Manifest V3 is recommended.

---

## ✨ Features

- 🌙 Toggle **Dark Mode** to reduce eye strain
- ☀️ Restore to **Light Mode**
- 🔘 Easy toggle via popup
- ⚙️ Background script handled via `background.scripts[]`
- 💡 Works instantly on any active tab

---

## 🆕 What's New in This Version

- Switched to **Manifest Version 2** structure
- Background script defined using `background.scripts` instead of `service_worker`
- Compatible with older Chrome environments

---

## 🛠 Installation

1. Clone or download this repository:

   ```bash
   git clone https://github.com/AvantikaShukla03/chrome_extension.git
   ```

2. Go to `chrome://extensions/` in your browser.

3. Enable **Developer Mode** (top-right).

4. Click **Load Unpacked** and select the extension folder.

---

## 📁 File Structure

```
theme-switcher-extension-v2/
├── index.html         # Popup UI
├── popup.js           # Theme toggle logic
├── style.css          # Popup styling
├── manifest.json      # Manifest version 2
```

---

## 🔧 Manifest V2 Specific Notes

- `manifest_version: 2`
- Background scripts are defined like:

```json
"background": {
  "scripts": ["popup.js"],
  "persistent": false
}
```

- No use of `chrome.scripting`, we use `chrome.tabs.executeScript()` instead.

---

## 🔒 Permissions Required

```json
"permissions": ["tabs", "activeTab", "storage"]
```

---

## 🧠 How It Works

- The popup UI has a "Toggle Theme" button.
- On click, the script in `popup.js` executes a dark/light CSS switch in the active tab.
- The background script helps inject code via `chrome.tabs.executeScript`.

---

## 📢 Warning

Chrome will deprecate Manifest V2 by June 2025. Please migrate to Manifest V3 for future compatibility made in the next branch.

---
