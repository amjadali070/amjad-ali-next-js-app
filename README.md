# Amjad Ali - Portfolio Website

A modern, developer-first portfolio website showcasing premium coding vibes with smooth animations, interactive UI, and 3D-inspired design elements.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.25-ff69b4?style=for-the-badge&logo=framer)

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for fluid page transitions and interactive elements
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark Theme**: Eye-friendly dark color scheme with cyan and purple accents
- **Interactive Components**: Dynamic project modals, skill panels, and contact forms
- **Performance Optimized**: Fast loading with Next.js optimizations and lazy loading
- **Accessibility Focused**: ARIA labels, keyboard navigation, and screen reader support
- **Glass Morphism**: Modern glass-panel effects throughout the UI

## 📁 Project Structure

```
amjad-ali-next-js-app/
├── src/
│   ├── app/
│   │   ├── assets/          # Images and static assets
│   │   ├── globals.css      # Global styles and utilities
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Main homepage
│   ├── components/
│   │   ├── AboutSection.tsx          # About me section
│   │   ├── ArticlesList.tsx          # Blog articles (optional)
│   │   ├── CertificationsGrid.tsx    # Certifications display
│   │   ├── ContactConsole.tsx        # Contact form with terminal theme
│   │   ├── EducationPath.tsx         # Education timeline
│   │   ├── ExperienceTimeline.tsx    # Work experience timeline
│   │   ├── Footer.tsx                # Footer with social links
│   │   ├── Header.tsx                # Navigation header
│   │   ├── ProjectModal.tsx          # Project details modal popup
│   │   ├── ProjectsGrid.tsx          # Projects showcase grid
│   │   ├── SkillsPanel.tsx           # Skills categorization
│   │   └── TestimonialsCarousel.tsx  # Client testimonials (optional)
│   ├── lib/
│   │   └── data.tsx         # All portfolio data and content
│   └── types/
│       └── css.d.ts         # CSS module type declarations
├── public/                  # Public assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

- **Background**: `#0B0F15` - Deep dark blue-black
- **Surface**: `#0F1720` - Slightly lighter surface color
- **Primary**: `#4FC3F7` - Vibrant cyan for main accents
- **Secondary**: `#7DD3FC` - Light blue for secondary elements
- **Text**: `#E6EEF6` - Soft white for readability

### Typography

- **Sans Font**: Inter (Google Fonts)
- **Mono Font**: JetBrains Mono (Google Fonts)

### Key Design Elements

- **Glass Panels**: Frosted glass effect with backdrop blur
- **Gradient Rings**: Animated rotating borders
- **Floating Badges**: Animated tech stack indicators
- **Terminal Windows**: Code-themed UI elements

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 16.0.7** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 3.4.17** - Utility-first styling

### Libraries & Tools

- **Framer Motion 12.23.25** - Animation library
- **React Icons 5.5.0** - Icon components
- **clsx 2.1.1** - Conditional classNames
- **tailwind-merge 3.4.0** - Merge Tailwind classes

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation & Setup

### Prerequisites

- Node.js 20+
- npm or yarn or pnpm

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/amjadali070/amjad-ali-next-js-app.git
   cd amjad-ali-next-js-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint Code

```bash
npm run lint
```

## 📱 Sections Overview

### 1. Hero Section

- Animated profile image with rotating gradient rings
- Professional introduction
- CTA buttons (View Work, Download Resume)
- Tech stack badges (Next.js, TypeScript)

### 2. About Section

- Personal introduction and background
- Code-themed developer profile card
- Skills overview

### 3. Skills Panel

- Categorized skills display
- Icons for each technology
- Programming Languages, Frontend, Backend, AI/ML, DevOps

### 4. Experience Timeline

- Work history with company details
- Role descriptions and achievements
- Interactive timeline design

### 5. Education Path

- Academic background
- Degrees and certifications
- Institution details

### 6. Projects Grid

- Featured project cards with images
- Project filtering and categorization
- Interactive modal for detailed project information
- Technologies, features, challenges, and achievements

### 7. Certifications

- Professional certifications display
- Credential verification links
- Organized grid layout

### 8. Contact Section

- Terminal-themed contact form
- Email integration
- Social media links
- Contact information display

### 9. Footer

- Social media links (GitHub, LinkedIn)
- Copyright information
- Built with Next.js & Tailwind branding

## 🎯 Key Components

### ProjectModal

Interactive popup modal that displays comprehensive project details including:

- Full project description
- Technologies used
- Key features
- Challenges faced
- Achievements and metrics
- Project metadata (duration, team size, role)

### HeroGraphic

Animated profile section featuring:

- Rotating gradient rings
- Pulsing glow effects
- Floating tech badges
- Smooth entrance animations

### ContactConsole

Terminal-styled contact form with:

- Code syntax highlighting
- Developer-themed UI
- Email integration
- Contact information cards

## 🎨 Customization Guide

### Update Personal Information

Edit `src/lib/data.tsx` to update:

- Projects
- Skills
- Experience
- Education
- Certifications
- Testimonials

### Modify Colors

Edit `tailwind.config.ts` to change:

- Theme colors
- Font families
- Custom utilities

### Add New Sections

1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add section data in `src/lib/data.tsx`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lazy Loading**: Images and components
- **Code Splitting**: Automatic via Next.js

## 🔒 Security

- No API keys exposed in frontend
- HTTPS enforced
- Content Security Policy headers
- XSS protection enabled

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Amjad Ali**

- GitHub: [@amjadali070](https://github.com/amjadali070)
- LinkedIn: [amjadali070](https://www.linkedin.com/in/amjadali070/)
- Email: amjadpitafi070@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for animation capabilities
- Tailwind CSS for styling utilities
- React Icons for comprehensive icon set
- Google Fonts for typography

## 📝 Notes

- This is a personal portfolio website template
- Some sections (Articles, Testimonials) are optional and can be enabled/disabled
- Project data contains confidential client information placeholders
- Resume PDF should be placed in `public/` directory

---

**Built with ❤️ using Next.js & Tailwind CSS**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
