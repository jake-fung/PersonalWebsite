# Jake Fung's Personal Website

A modern, interactive personal portfolio website built with React, TypeScript, and advanced animation libraries.

## 🚀 Features

- **Interactive Animations**: Custom text splitting and rotating animations using GSAP and Framer Motion
- **3D Particle System**: WebGL-powered particle background using OGL (Open Graphics Library)
- **Dark/Light Mode**: Theme switching with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Magnetic Effects**: Interactive hover effects on UI elements
- **Smooth Scrolling**: Advanced scroll-triggered animations

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1.0** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.0.4** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Styled Components 6.1.19** - CSS-in-JS styling
- **Radix UI Icons** - High-quality icon library

### Animations & Graphics
- **GSAP 3.13.0** - Professional-grade animation library
- **Framer Motion 12.23.6** - React animation library
- **OGL 1.0.11** - Lightweight WebGL library for 3D graphics

### Development Tools
- **ESLint 9.30.1** - Code linting
- **Prettier 3.6.2** - Code formatting
- **React Router DOM 7.7.0** - Client-side routing

## 📁 Project Structure

```
src/
├── App.tsx                 # Main app component with routing
├── main.tsx               # Application entry point
├── index.css              # Global styles
├── assets/
│   └── avatar.jpg         # Profile image
├── components/
│   ├── SplitText.tsx      # GSAP-powered text animation component
│   ├── RotatingText.tsx   # Framer Motion text rotation component
│   ├── Particles.tsx      # WebGL particle system
│   ├── Magnet.tsx         # Magnetic hover effect component
│   ├── Switch.tsx         # Dark/light mode toggle
│   ├── DarkVeil.tsx       # Theme transition overlay
│   ├── FuzzyText.tsx      # Text blur/focus effects
│   └── ProfileCard.tsx    # Profile information card
└── pages/
    ├── Home.tsx           # Main landing page
    └── NotFound.tsx       # 404 error page
```

## 🎨 Components Overview

### Core Animation Components

#### `SplitText.tsx`
Advanced text animation component using GSAP's SplitText plugin:
- **Features**: Character, word, or line-level animations
- **Props**: Customizable timing, easing, and scroll triggers
- **Use Case**: Main heading animations with staggered character reveals

#### `RotatingText.tsx`
Dynamic text rotation component with Framer Motion:
- **Features**: Smooth transitions between multiple text strings
- **Props**: Configurable intervals, stagger effects, and animation presets
- **Use Case**: Role/description cycling text ("UI developer", "UBC student", etc.)

#### `Particles.tsx`
WebGL-powered 3D particle system:
- **Features**: Customizable particle count, colors, and movement
- **Technology**: OGL (Open Graphics Library) for performance
- **Props**: Particle behavior, hover interactions, and visual effects

### Interactive Components

#### `Magnet.tsx`
Creates magnetic attraction effects on hover:
- **Behavior**: Elements move toward cursor on hover
- **Implementation**: Smooth CSS transforms with configurable padding

#### `Switch.tsx`
Dark/light mode toggle with smooth transitions:
- **Features**: Theme persistence, animated state changes
- **Integration**: Works with Tailwind's dark mode classes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Animation System
The website uses a sophisticated animation system combining:
- **GSAP**: For precise, timeline-based animations
- **Framer Motion**: For React-friendly component animations
- **CSS Transitions**: For simple hover effects and theme changes

### Performance Optimizations
- **WebGL Rendering**: Particles run on GPU for smooth performance
- **Lazy Loading**: Components load as needed
- **Optimized Assets**: Compressed images and efficient bundling

### Responsive Design
- **Mobile-First**: Tailwind CSS breakpoint system
- **Adaptive Layouts**: Flexbox and CSS Grid for flexible layouts
- **Touch-Friendly**: Hover effects adapted for mobile devices

## 🎨 Customization

### Updating Content
1. **Personal Information**: Edit `src/pages/Home.tsx`
2. **Social Links**: Modify the `openInNewTab` function calls
3. **Profile Image**: Replace `src/assets/avatar.jpg`
4. **Rotating Text**: Update the `texts` array in `RotatingText` component

### Styling Modifications
1. **Colors**: Update Tailwind classes or add custom CSS variables
2. **Animations**: Adjust timing and easing in component props
3. **Layout**: Modify Flexbox/Grid classes in components

### Adding New Sections
1. Create new components in `src/components/`
2. Add routes in `src/App.tsx` if needed
3. Import and use in `src/pages/Home.tsx`

## 🔧 Configuration Files

- **`vite.config.ts`** - Vite build configuration
- **`tsconfig.json`** - TypeScript compiler options
- **`eslint.config.js`** - Linting rules
- **`prettier.config.cjs`** - Code formatting rules
- **`package.json`** - Dependencies and scripts

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **WebGL Support**: Required for particle effects
- **JavaScript**: ES2020+ features used

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for personal use. Please respect the author's work and don't use it commercially without permission.

## 👨‍💻 Author

**Jake Fung**
- LinkedIn: [funghokyeung](https://www.linkedin.com/in/funghokyeung/)
- GitHub: [jake-fung](https://github.com/jake-fung)
- Website: This repository

---

Built with ❤️ using React, TypeScript, and modern web technologies.
