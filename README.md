# Jersey Elite Coatings - Professional Epoxy Flooring Website

A modern, professional website for Jersey Elite Coatings built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **SEO Optimized**: Built with Next.js for excellent search engine performance
- **Fast Performance**: Optimized images and code splitting
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter & Gelasio (Google Fonts)
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Connect repository for auto-deploy
- **Static Export**: Run `npm run build` for static files

## 📁 Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Header navigation
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Services.tsx    # Services showcase
│   │   ├── Transform.tsx   # Transform section
│   │   ├── Testimonials.tsx # Customer testimonials
│   │   ├── Locations.tsx   # Service locations
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer section
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```js
colors: {
  'chathams-blue': '#154563',
  'chathams-blue-dark': '#103747',
  // ... more colors
}
```

### Content
- Update component content in `app/components/`
- Modify metadata in `app/layout.tsx`
- Replace images with your own assets

### Styling
- Global styles: `app/globals.css`
- Component styles: Tailwind classes in components
- Custom utilities: Add to `tailwind.config.js`

## 📞 Support

For technical support or customization requests, please contact the development team.

## 📄 License

This project is proprietary. All rights reserved.

---

Built with ❤️ for Jersey Elite Coatings
