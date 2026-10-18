# Zenith

> A calm, personal workspace for planning your day, tracking progress, and keeping the things that matter in one place.

![License: MIT](https://img.shields.io/badge/license-MIT-8b7bdf)
![Built with](https://img.shields.io/badge/built_with-HTML%20%7C%20CSS%20%7C%20JavaScript-343746)

Zenith brings everyday tools into one flexible dashboard. It runs in a web browser, and a packaged Windows desktop app is also available.

## What you can do

- **Plan your day** with tasks, priorities, schedules, and habit tracking.
- **Keep your finances visible** with transactions, budgets, subscriptions, and savings goals.
- **Capture ideas** in notes, goals, reading lists, and project boards.
- **Build a routine** with health tracking and a focus timer.
- **Make it yours** by choosing which boards to show and switching between themes.
- **Work locally** with your dashboard data saved on your device.

### Your data

The browser dashboard stores its entries in that browser's local storage. Export a JSON backup from Settings before clearing browser data or moving to another device. The Windows app keeps its dashboard data in your Windows user profile.

## Get the Windows desktop app

The portable desktop app is distributed separately from this source repository. On the Zenith website, open **Download** and choose **Instant download**.

1. Extract the downloaded ZIP.
2. Open the extracted folder and run **Zenith.exe**.
3. On first launch, Zenith automatically adds shortcuts to your Desktop and Start menu.

Keep the extracted app folder in place so the shortcuts can find Zenith. You do not need to install Node.js to use the packaged app.

## Run the dashboard from source

This repository contains the dashboard source files at its root.

1. Download the repository from GitHub using **Code → Download ZIP**, then extract it.
2. Open a terminal in the extracted folder.
3. Start a local web server:

   ```bash
   python -m http.server 8080
   ```

4. Visit [http://localhost:8080](http://localhost:8080).

You can also deploy the files in the repository root to a static host such as Cloudflare Pages or GitHub Pages.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Dashboard structure |
| `styles.css` | Layout, themes, and responsive styling |
| `app.js` | Dashboard features and browser-side data handling |
| `LICENSE` | MIT license |

## Tech

Built with plain HTML, CSS, and JavaScript. The dashboard requires no framework or package installation.

## License

Zenith is available under the [MIT License](LICENSE).
