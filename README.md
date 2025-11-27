<div align="center">

# 🌌 PRODHOSH PORTFOLIO 🌌

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=35&duration=3000&pause=1000&color=00F7FF&center=true&vCenter=true&random=false&width=800&height=100&lines=AI+%2F+ML+Explorer+%F0%9F%9A%80;Data+Scientist+%F0%9F%93%8A;Full+Stack+Developer+%F0%9F%92%BB;Innovating+the+Future+%E2%9C%A8" alt="Typing SVG" />

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-00F7FF?style=for-the-badge&logo=github&logoColor=white)](https://prodhosh.github.io/prodhosh-portfolio/)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="1000">

</div>

---

## ⚡ Quick Start

<div align="center">

<table>
<tr>
<td align="center" width="50%">

### 🐳 Docker (Recommended)

```bash
# One-liner to run
docker-compose up -d

# Visit http://localhost
```

</td>
<td align="center" width="50%">

### 📦 NPM/PNPM

```bash
pnpm install
pnpm dev

# Visit http://localhost:3000
```

</td>
</tr>
</table>

</div>

---

## 🎯 About

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif" width="500">

A **next-generation portfolio** featuring dual-theme backgrounds (Galaxy 🌌 & Cyberpunk City 🏙️), interactive animations, and an AI chatbot assistant.

</div>

---

## ✨ Features

<div align="center">

| 🎨 Visual | ⚡ Performance | 🛠️ Tech |
|:---------:|:--------------:|:-------:|
| Galaxy & Cyberpunk Themes | Next.js 16 + Turbopack | TypeScript |
| Custom Glowing Cursor | Static Export | Tailwind CSS v4 |
| 3D Animated Cards | Docker Ready | Radix UI |
| Smooth Scroll Animations | Nginx Optimized | React 19 |
| Interactive Modals | 95+ Lighthouse Score | pnpm |

</div>

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" width="80">
  <img src="https://user-images.githubusercontent.com/74038190/212257472-08e52665-c503-4bd9-aa20-f5a4dae769b5.gif" width="80">
  <img src="https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif" width="80">
  <img src="https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif" width="80">
  <img src="https://user-images.githubusercontent.com/74038190/212257463-4d082cb4-7483-4eaf-bc25-6dde2628aabd.gif" width="80">
  <img src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif" width="80">
  <img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="80">
</div>

---

## 🐳 Docker Deployment

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif" width="100">

</div>

### Available Options

| Method | Command | Port | Use Case |
|:------:|:--------|:----:|:---------|
| 🌐 **Static** (Nginx) | `docker-compose up -d` | `80` | Production - Fastest |
| 🚀 **Server** (Node) | `docker-compose --profile server up -d` | `3000` | SSR Features |
| 🛠️ **Dev** (Hot Reload) | `docker-compose --profile dev up -d` | `3000` | Development |

### Quick Commands

```bash
# 🏗️ Build & Run Static Site
docker build -f Dockerfile.static -t prodhosh-portfolio .
docker run -d -p 80:80 prodhosh-portfolio

# 🛑 Stop all containers
docker-compose down

# 📊 View logs
docker-compose logs -f

# 🔄 Rebuild after changes
docker-compose up -d --build
```

### Docker Files Included

```
📦 Docker Setup
├── 🐳 Dockerfile           # Next.js server mode
├── 🌐 Dockerfile.static    # Nginx static export (recommended)
├── 🛠️ Dockerfile.dev       # Development with hot reload
├── 📋 docker-compose.yml   # Orchestration
├── ⚙️ nginx.conf           # Nginx configuration
└── 🚫 .dockerignore        # Build exclusions
```

---

## 📁 Project Structure

```
prodhosh-portfolio/
├── 🎨 app/
│   ├── page.tsx         # Main portfolio (1600+ lines)
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Animations & themes
├── 🧩 components/
│   └── theme-provider.tsx
├── 🖼️ public/
│   ├── certificates/    # Achievement images
│   ├── images/          # Profile & assets
│   └── logos/           # Organization logos
├── 🐳 Docker/
│   ├── Dockerfile
│   ├── Dockerfile.static
│   ├── Dockerfile.dev
│   ├── docker-compose.yml
│   └── nginx.conf
└── ⚙️ Config
    ├── next.config.mjs
    ├── tsconfig.json
    └── package.json
```

---

## 🎨 Themes

<div align="center">

<table>
<tr>
<td align="center">

### 🌌 Galaxy
Purple nebula clouds  
95 animated stars  
Floating orbs  
Deep space vibes

</td>
<td align="center">

### 🏙️ Night City
Dubai-style skyline  
White lit windows  
Flying cyber drones  
Water reflections

</td>
</tr>
</table>

</div>

---

## 🛠️ Development

```bash
# Clone
git clone https://github.com/PRODHOSH/prodhosh-portfolio.git
cd prodhosh-portfolio

# Install (pnpm recommended)
pnpm install

# Dev server
pnpm dev

# Build
pnpm build

# Deploy to GitHub Pages
git subtree push --prefix out origin gh-pages
```

---

## 🚀 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=nextjs,react,typescript,tailwind,docker,nginx,git,github,vscode" />

</div>

---

## 🤝 Connect

<div align="center">

<a href="https://github.com/PRODHOSH">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>
<a href="https://linkedin.com/in/prodhoshvs">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a href="mailto:prodhosh3@gmail.com">
  <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>
<a href="https://prodhosh.github.io/prodhosh-portfolio/">
  <img src="https://img.shields.io/badge/Portfolio-00F7FF?style=for-the-badge&logo=firefox&logoColor=white" />
</a>

<br><br>

<img src="https://user-images.githubusercontent.com/74038190/212284119-fbfd994d-8c2a-4a07-a75f-84e513833c33.gif" width="300">

### ⭐ Star this repo if you like it!

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&text=Built%20with%20%E2%9D%A4%EF%B8%8F%20by%20Prodhosh&fontSize=24&fontColor=fff&animation=twinkling&fontAlignY=70" width="100%">

</div>
