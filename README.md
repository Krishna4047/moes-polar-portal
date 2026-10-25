# POLARIS ❄️
### Ministry of Earth Sciences (MoES) — Integrated Polar Science Outreach & Knowledge Repository

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready%20%26%20Installable-emerald.svg)](public/manifest.json)
[![React 18](https://img.shields.io/badge/React-18.3-cyan.svg)](https://react.dev)
[![Vite 5](https://img.shields.io/badge/Vite-5.4-purple.svg)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)](https://tailwindcss.com)
[![Open Source](https://img.shields.io/badge/Open%20Source-MoES%20Outreach-0284c7.svg)](CONTRIBUTING.md)

> **POLARIS** is an open-source, mobile-first Progressive Web Application (PWA) built for the **Ministry of Earth Sciences (MoES), Government of India** to disseminate polar science, real-time Antarctic and Arctic station telemetry, cryospheric climate datasets, expedition history, and educational outreach to citizens, researchers, and students worldwide.

---

## 🚀 Live 24/7 Access (Independent of Your Laptop)

You do **NOT** need to keep your laptop running or stay on the same Wi-Fi network for people to use or install the app. POLARIS is configured for permanent 24/7 cloud hosting for free:

### ⚡ Option 1: 1-Click Free Deploy with Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FKrishna4047%2Fmoes-polar-portal)

1. Sign in to [vercel.com](https://vercel.com) with your GitHub account.
2. Select **`Krishna4047/moes-polar-portal`**.
3. Click **Deploy**.
4. In under 60 seconds, you get a permanent, 24/7 live HTTPS URL (e.g. `https://moes-polar-portal.vercel.app`) that works on any phone, anywhere in the world!

### 🐙 Option 2: Automated GitHub Pages
We have pre-configured a GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. In your GitHub repository, navigate to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Push your code to `main`:
   ```bash
   git add .
   git commit -m "Configure 24/7 PWA deployment"
   git push origin main
   ```
4. GitHub will automatically build and publish your portal to:
   **`https://krishna4047.github.io/moes-polar-portal/`**

---

## 📱 How to Install POLARIS on Any Phone (PWA)

Anyone who opens the live website on a mobile device can install it directly to their phone's home screen without downloading it from the Google Play Store or Apple App Store:

### 🤖 On Android (Google Chrome / Samsung Internet)
1. Open your live website URL in **Google Chrome**.
2. Tap the **"Install App"** banner in the navbar, OR tap the **Three Dots (⋮)** in the top right.
3. Tap **"Install app"** (or **"Add to Home screen"**).
4. Tap **Install**. The POLARIS icon will appear on your home screen and open in full-screen native mode!

### 🍎 On Apple iPhone & iPad (Safari)
1. Open your live website URL in **Safari**.
2. Tap the **Share** button (the square with an arrow pointing up `⎋` at the bottom of Safari).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **Add** in the top right. POLARIS is now installed on your iOS home screen!

### 💻 On Windows & Mac (Desktop Chrome / Edge)
1. Open the website.
2. Look at the right side of the URL address bar and click the **Install icon (⊕)**, or click the **"Install App"** button in the POLARIS navigation bar.

---

## ✨ Features & Architecture

| Module | Description |
| :--- | :--- |
| **🛰️ Station Telemetry** | Live telemetry, meteorological feeds, webcam status, and life support metrics for **Bharati**, **Maitri**, **Himadri**, **IndARC**, and **Himansh**. |
| **🗺️ Dual Polar GIS Map** | Interactive Leaflet-powered GIS mapping both the Antarctic Continent (70°S) and Arctic Archipelago (78°N) with station coordinates and scientific sensors. |
| **🤖 DhruvAI Assistant** | Domain-specialized AI assistant capable of answering questions about polar science, ice core extraction, ozone layer dynamics, and MoES expedition logistics. |
| **📈 Climate Visualizer** | Interactive time-series charts visualizing Antarctic ice sheet mass loss, Arctic sea ice extent trends (1979–Present), and atmospheric CO₂ ppm. |
| **🕸️ Knowledge Graph** | Interactive node-link graph mapping scientific connections between cryosphere, ocean currents, atmospheric chemistry, and marine biology. |
| **🎵 Polar Media & Soundscapes** | Authentic polar audio recordings (Weddell seal vocalizations, katabatic blizzards, glacier calving) and high-res expedition galleries. |
| **📜 40-Year Expedition Timeline** | Interactive historical journey spanning from **Operation Gangotri (1981)** to the **44th Indian Scientific Expedition to Antarctica (2025–26)**. |
| **📊 Verified Open Datasets** | Public science repository with DOI references, citation generators (BibTeX/APA), and CSV/JSON downloads. |
| **🛡️ Admin CMS** | Mock editorial verification portal for scientific peer-review approvals and data publishing. |

---

## 🛠️ Local Development & Quickstart

### Prerequisites
- Node.js (v18 or higher recommended)
- Git

### 1. Clone & Install
```bash
git clone https://github.com/Krishna4047/moes-polar-portal.git
cd moes-polar-portal
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build Production Bundle
```bash
npm run build
```
Creates an optimized, compressed production build in the `dist/` directory ready for deployment.

---

## 📁 Repository Structure

```
moes-polar-portal/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD pipeline
├── public/
│   ├── manifest.json            # PWA Web App Manifest
│   ├── sw.js                    # PWA Service Worker for offline caching
│   └── icons/
│       ├── icon.svg             # Vector Polar Compass Icon
│       ├── icon-192x192.png     # Android PWA 192px icon
│       ├── icon-512x512.png     # Android PWA 512px icon
│       └── apple-touch-icon.png # iOS Apple Touch icon
├── src/
│   ├── components/
│   │   ├── admin/               # Admin CMS & Approval Workflow
│   │   ├── ai/                  # DhruvAI Polar Scientific Assistant
│   │   ├── datasets/            # Open Scientific Datasets & Citations
│   │   ├── graph/               # Polar Science Knowledge Graph
│   │   ├── layout/              # Navbar, MobileConnectModal, Footer
│   │   ├── map/                 # Dual Polar Leaflet GIS Map
│   │   ├── media/               # Polar Audio Soundscapes & Visuals
│   │   ├── overview/            # Mission Hero, Polar Stats & Expeditions
│   │   ├── search/              # Global Command Palette (Ctrl+K)
│   │   ├── stations/            # Bharati, Maitri, Himadri Real-Time Telemetry
│   │   ├── timeline/            # 1981–2026 Polar History Timeline
│   │   └── visualizer/          # Cryospheric Climate Charts (Chart.js)
│   ├── hooks/
│   │   └── usePWAInstall.js     # Custom React Hook for PWA installation
│   ├── data/                    # Polar station telemetry & datasets
│   ├── App.jsx                  # Main Application Shell
│   ├── index.css                # Tailwind CSS Design System
│   └── main.jsx                 # Entry Point & Service Worker registration
├── vercel.json                  # Vercel 1-click cloud configuration
├── netlify.toml                 # Netlify deployment configuration
├── vite.config.js               # Vite build & relative path config
├── LICENSE                      # MIT Open Source License
└── README.md                    # Project Documentation
```

---

## 🤝 Open Source & Contributing

We welcome contributions from researchers, developers, educators, and science enthusiasts! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on opening issues, proposing features, and submitting pull requests.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
