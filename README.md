# Zenith — Life Operating System

A minimalist, modular personal dashboard built with vanilla HTML, CSS, and JavaScript. Zero frameworks. Zero dependencies. 100% client-side with localStorage persistence.

![Zenith Screenshot](https://img.shields.io/badge/status-production--ready-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## Features

### 8 Modular Boards
Each board is independently toggleable from Settings:

| Board | Description |
|---|---|
| **Overview** | Clock, greeting, omni-search, quick links, KPI cards, priority tasks, and a Deep Work focus timer with ambient soundscapes |
| **Finance** | Transaction ledger, subscription renewal radar, category budget burn bars, savings vaults, and CSV export |
| **Planner & Habits** | Weekly schedule with inline task entry, habit streak matrix, and a 3-lane Kanban board (Backlog → In Progress → Completed) |
| **Notes** | Tag-filtered knowledge base with live Markdown preview, pinning, and word/character counters |
| **Goals** | Strategic objectives with nested milestone checklists that auto-calculate completion percentage |
| **Library & Media** | Reading tracker for books, papers, and articles with progress indicators and takeaway notes |
| **Health & Wellness** | 1-click workout preset logging, hydration tracker, and sleep monitoring |
| **Projects** | Side project catalog with lifecycle badges, tech stack tags, and repository links |

### Productivity Tools
- **Command Palette** (`Ctrl+K`) — Fuzzy search to jump between boards, log transactions, or add tasks instantly
- **Natural Language Shorthands** — Type `exp 45 groceries` or `water 500` directly into the palette
- **Deep Work Focus Timer** — Pomodoro timer with pure Web Audio ambient soundscapes (Rain, Brown Noise, Alpha Waves)
- **1-Click Workout Logging** — Preset chips to log common training sessions in a single tap
- **Subscription Renewal Radar** — Countdown badges showing days until each recurring charge

### Design System
- **3 Themes** — Obsidian (dark), Slate Studio, Paper (light)
- **Custom Bespoke Checkboxes** — Animated SVG checkmarks with spring physics, zero native browser controls
- **Fluid Micro-Interactions** — Spring easing curves, smooth board transitions, custom 4px scrollbars
- **100% Vector SVG Icons** — Hand-crafted 1.75px stroke icons, zero emoji

### Keyboard Shortcuts
| Shortcut | Action |
|---|---|
| `Ctrl+K` | Command Palette |
| `Ctrl+B` | Toggle Sidebar |
| `/` | Focus Search |
| `?` | Keyboard Shortcuts Cheatsheet |
| `Alt+1-8` | Jump to Board by Position |
| `Esc` | Close Dialog / Exit Focus Mode |

### Data Management
- All data persists in browser `localStorage` under `zenith_*` keys
- **JSON Export/Import** — Full backup and restore of all boards
- **Restore Demo Data** — Reset to the rich seed dataset
- **Clear All Data** — Start with a clean blank slate
- **CSV Export** — Download transaction ledger as `.csv`

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/zenith-life-os.git
cd zenith-life-os

# Serve locally (any static server works)
python -m http.server 8080
# or
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

> No build step. No `npm install`. Just open the HTML file.

---

## Project Structure

```
zenith-life-os/
├── index.html      # Semantic HTML5 markup for all 8 boards and dialogs
├── styles.css      # Complete design system with 3 themes and responsive layout
├── app.js          # Application logic, state management, and event wiring
├── README.md       # This file
├── LICENSE         # MIT License
└── .gitignore      # Git ignore rules
```

---

## Tech Stack

- **HTML5** — Semantic markup, `<dialog>` elements, ARIA roles
- **CSS3** — Custom properties, CSS Grid, Flexbox, `@media print`, custom scrollbars
- **Vanilla JavaScript** — ES6+, Web Audio API, Geolocation API, localStorage
- **Open-Meteo API** — Free weather data (no API key required)
- **Google Fonts** — Plus Jakarta Sans, JetBrains Mono

---

## Browser Support

| Browser | Supported |
|---|---|
| Chrome 90+ | Yes |
| Firefox 98+ | Yes |
| Safari 15.4+ | Yes |
| Edge 90+ | Yes |

---

## Deployment

Zenith is a static site. Deploy to any static hosting provider:

- **GitHub Pages** — Push to `main` and enable Pages in repository settings
- **Netlify** — Drag and drop the project folder
- **Vercel** — `vercel --prod` from the project root
- **Cloudflare Pages** — Connect your GitHub repository

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

[MIT](LICENSE) — free for personal and commercial use.
