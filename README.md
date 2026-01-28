# React Portfolio

This is a modern, responsive portfolio website built with React.js and Tailwind CSS.

## Features

- 🎨 Modern and elegant design with glass-morphism effects
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations and transitions
- 🌈 Beautiful gradient effects and color schemes
- 📧 Contact form with WhatsApp integration
- 💼 Project showcase with image cycling
- 🎯 Smooth scroll navigation

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Context API** - State management
- **Lucide Icons** (Custom implementation) - Icons

## Installation

1. Install dependencies:
```bash
cd portfolio_app_react
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
portfolio_app_react/
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── FooterSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Icon.jsx
│   │   ├── NavigationBar.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── SkillsSection.jsx
│   ├── context/
│   │   └── PortfolioContext.jsx
│   ├── assets/
│   │   └── styles/
│   │       └── main.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Customization

To customize the portfolio for your own use:

1. Update personal information in `src/context/PortfolioContext.jsx`:
   - Personal info (name, title, description, etc.)
   - Social links
   - Skills
   - Experiences
   - Projects

2. Replace the profile image:
   - Add your image to `src/assets/images/`
   - Update the image path in the portfolio context

3. Update colors in `tailwind.config.js` if needed

4. Modify contact form integration in `ContactSection.jsx`

## Deployment

The application can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Or any other static hosting provider

## License

MIT License - feel free to use this template for your own portfolio!
