# 🎯 Prince Kumar - Data Analyst Portfolio

A stunning, high-performance portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This portfolio showcases data analysis skills, projects, and experience with next-level animations and visual effects.

![Portfolio Preview](https://via.placeholder.com/1200x600/050505/00ff88?text=Portfolio+Preview)

## ✨ Features

- 🎨 **Modern Dark Theme** with neon green accents
- ✨ **Smooth Animations** using Framer Motion
- 📱 **Fully Responsive** design (Mobile, Tablet, Desktop)
- 🌟 **Glass Morphism** UI elements
- 🎭 **Particle Effects** and floating shapes
- 🚀 **High Performance** with Next.js App Router
- 💫 **Interactive UI** with hover effects and transitions

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main portfolio page
├── components/           # Reusable components
├── public/              # Static assets
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## 🎯 Sections

1. **Hero** - Animated introduction with floating particles
2. **Skills** - Technical skills with category cards
3. **Experience** - Timeline of work experience
4. **Projects** - Featured data analysis projects
5. **Education** - Academic background and certifications
6. **Contact** - Contact form and social links

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#00ff88',      //  secondary: '#0a0a Main accent color
0a',   // Secondary color
  accent: '#00cc6a',      // Accent shade
}
```

### Resume Data

Update the `resumeData` object in `app/page.tsx` with your own information.

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

- **Netlify:** `npm run build` → upload `.next` folder
- **Docker:** Use multi-stage Docker build

## 📄 License

MIT License - Feel free to use this portfolio template!

---

Built with ❤️ using Next.js and Tailwind CSS
