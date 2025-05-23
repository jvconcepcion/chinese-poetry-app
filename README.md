# Chinese Poetry Collection - 中国诗词库

## About the Project

[![Next.js](https://img.shields.io/badge/Next.js-15.3.^+-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3+-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)

A modern web application showcasing classical Chinese poetry with multi-language support and interactive features.

## Features

- 📜 Collection of classical Chinese poems
- 🌐 Multi-language support
- 🔍 Real-time search functionality
- ♾️ Infinite scroll pagination
- 📱 Responsive design
- 📖 Poem details with original text and translations
- 🎨 Tailwind CSS styling
- ⚡ Next.js optimized performance

## Technology Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-i18next
- **State Management**: React Hooks
- **Build Tool**: npm

## Multi-language Support
The app supports 2 languages (for now):

- Chinese (zh)
- English (en)

Translation files are located in:
```
public/locales/
  ├── en/
  └── zh/
```

To add a new language:

- Create new folder in `public/locales`
- Add `common.json` translation file
- Update `next-i18next.config.ts`

## Project Structure
```
src/
├── components/
│   ├── layout/
│   ├── poem/
│   └── ui/
├── config/
├── data/
├── hooks/
├── interfaces/
├── lib/
├── pages/
├── public/
│   └── locales/
└── styles/
```

## Getting Started

Clone the repository:
```bash
git clone https://github.com/your-username/chinese-poetry-app.git
```

Install dependencies:
```bash
cd chinese-poetry-app
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Acknowledgments

- Poem data sourced from [古诗文网](https://www.gushiwen.cn)
- Translations from various classical Chinese poetry sources
- Inspired by Chinese cultural heritage

## License
MIT License

---
✨ **Designed & Developed by Jonathan V. Concepcion** ✨
