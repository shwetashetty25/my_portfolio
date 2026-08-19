# Shweta Shetty — Portfolio

> Crafting quiet digital spaces where art meets utility.

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C896?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)

A modern, responsive single-page developer portfolio website with a peaceful burgundy and gold night-sky aesthetic. This platform showcases academic full-stack applications, core technical proficiencies, and professional milestones.

---

## 🌌 Features

* **Twinkling Night-Sky Star Animation**: A custom, performance-tuned HTML5 Canvas background drawing twinkling gold stars, randomized shooting stars, and interactive cursor parallax offsets.
* **Smooth Scroll Navigation**: An elegant navigation bar with glassmorphic backing and a custom active-link highlighter powered by `IntersectionObserver`.
* **Responsive Design**: Fluid grids and adaptive layouts optimized for mobile, tablet, and high-resolution desktop viewports.
* **Project Showcase Grid**: Interactive grid cards demonstrating full-stack projects complete with technology tags and detailed overlay case study modals.
* **Interactive Certification Cards**: Clickable grids containing issue credentials that link directly to actual certificate PDF documents in a new tab.

---

## 🛠️ Built With

* **Frontend Library**: [React.js](https://react.dev/)
* **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite](https://vite.dev/)
* **Styling & Theme**: [Tailwind CSS](https://tailwindcss.com/)
* **Icon Library**: [Lucide React](https://lucide.dev/)
* **Animations**: [CSS Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

---

## 📁 Folder Structure

```
My-Portfolio/
├── public/                 # Static assets directory
│   ├── certificate1.pdf    # Data Analytics Certificate file
│   ├── certificate2.pdf    # AI Certificate file
│   └── ShwetaShetty-Resume.pdf
├── src/                    # Source code
│   ├── components/         # React UI modules (Hero, About, Projects, Certifications)
│   ├── data/               # Centralized data store (portfolio.ts)
│   ├── index.css           # Custom CSS animations & tailwind directives
│   └── main.tsx            # Application entry point
├── index.html              # Core HTML structure
├── package.json            # Project dependencies & scripts
└── vite.config.ts          # Vite bundling specifications
```

---

## 🚀 Getting Started

To run this project locally, you can choose between running the development server or launching the compiled static build.

### Option A: Running the Development Server (Recommended)

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shwetashetty25/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the address shown in the terminal (typically `http://localhost:5173`).

### Option B: Running the Compiled Static Files

1. **Build the Production Bundle**:
   ```bash
   npm run build
   ```
   This generates a self-contained static folder named `dist/` containing the optimized HTML, CSS, JavaScript, and asset PDFs.

2. **Launch with Local Web Server**:
   * Open the project directory in VS Code.
   * Right-click `dist/index.html` and select **Open with Live Server** (requires the *Live Server* extension).

---

## 🌐 Deployment

The website is configured for continuous deployment on **Netlify**, connected directly to this GitHub repository. Any pushes to the main branch trigger automated production builds and deployments.

---

## 📞 Contact

* **GitHub**: [shwetashetty25](https://github.com/shwetashetty25)
* **LinkedIn**: [Shweta Shetty](https://www.linkedin.com/in/shweta-shetty-340196332/)
* **Email**: [shettyshweta48@gmail.com](mailto:shettyshweta48@gmail.com)
