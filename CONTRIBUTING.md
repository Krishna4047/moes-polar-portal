# Contributing to POLARIS

Thank you for your interest in contributing to **POLARIS (MoES Integrated Polar Science Outreach & Knowledge Repository)**!

POLARIS is an open-source platform dedicated to public science communication, polar research telemetry, interactive cryosphere exploration, and educational dissemination for India's Arctic, Antarctic, and Himalayan expeditions.

---

## 🧭 How You Can Contribute

1. **Bug Reports & Feature Requests**: Submit an issue on GitHub detailing what went wrong or proposing improvements.
2. **Polar Datasets & Media**: Contribute verified open research data, photos, audio soundscapes, or research papers.
3. **Frontend & Visualization Enhancements**: Improve interactive charts, 3D/2D polar projections, performance, or mobile responsiveness.
4. **Translations**: Help translate scientific summaries into Hindi and other regional Indian languages.

---

## 🛠️ Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Krishna4047/moes-polar-portal.git
   cd moes-polar-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📱 Progressive Web App (PWA) Testing

- POLARIS includes a full service worker (`public/sw.js`) and web app manifest (`public/manifest.json`).
- You can test installation on Chrome, Edge, and iOS Safari directly in development or production preview mode.

---

## 📜 Code Style & Commit Guidelines

- Write clean, accessible, and semantic JSX components.
- Use Tailwind CSS with established color tokens (`cyan`, `slate`, `sky`, `amber`).
- Commit messages should be concise and descriptive.

---

## ⚖️ License

By contributing to POLARIS, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
