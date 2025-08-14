'use client';

import dynamic from 'next/dynamic';

// Dynamically load each section (no SSR) so browser-only code is safe
const Navigation   = dynamic(() => import('../components/Navigation'), { ssr: false });
const Hero         = dynamic(() => import('../components/Hero'),         { ssr: false });
const Services     = dynamic(() => import('../components/Services'),     { ssr: false });
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: false });
const Locations    = dynamic(() => import('../components/Locations'),    { ssr: false });
const Transform    = dynamic(() => import('../components/Transform'),    { ssr: false });
const Contact      = dynamic(() => import('../components/Contact'),      { ssr: false });
const Footer       = dynamic(() => import('../components/Footer'),       { ssr: false });

// If your global styles live at styles/tailwind.css (or components/globals.css) and
// you want them available here, you can import them as well. The App Router already
// imports app/globals.css from app/layout.tsx, so only add more if you need it.
// import '../components/globals.css';

export default function HomeClient() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <Locations />
      <Transform />
      <Contact />
      <Footer />
    </main>
  );
}
