# 🚀 DEVOPS-FRONTEND

A frontend web application built with **React** and **Vite**. This project serves as the UI for a DevOps-related platform. It uses modern JavaScript, modular components, and efficient tooling.

---

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- npm (comes with Node.js)

---

### 📥 Installation & run

Clone the repository and install dependencies:

```bash
git clone https://github.com/minhphuc2544/DevOps-Frontend.git
cd devops-frontend
npm install
```

Run the project locally:
```bash
npm run dev
```

### Project structure
```
DEVOPS-FRONTEND/
│
├── public/                           # Static files served as-is (e.g., favicon, robots.txt, public images)
│
├── src/                              # Source code lives here
│   ├── assets/                       # Static assets like images, fonts, icons, etc. (used via import)
│   │
│   ├── components/                   # Reusable React components (e.g., buttons, headers, menus)
│   │
│   ├── pages/                        # Page-level components (for routing like Home, About, Dashboard)
│   │
│   ├── styles/                       # Global CSS, module CSS, or styling files
│   │
│   ├── App.jsx                       # Root component of the React app (used by main.jsx)
│   ├── main.jsx                      # Entry point for ReactDOM.createRoot, bootstraps App.jsx
│   ├── Menu.jsx                      # Likely a navigation menu or sidebar component
│
├── .gitignore                        # Tells Git which files/folders to ignore (e.g., node_modules)
├── eslint.config.js                 # ESLint configuration file for linting JavaScript/React code
├── index.html                        # HTML template used by Vite to inject the React app
├── package-lock.json                 # Auto-generated; locks exact versions of installed npm packages
├── package.json                      # Lists dependencies, scripts, metadata about the project
├── README.md                         # Project description, instructions, and documentation
├── vite.config.js                    # Vite config file; can customize plugins, aliases, and use SWC
```
