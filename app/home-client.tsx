'use client';

import dynamic from 'next/dynamic';

// point to components/HomeDesktop/sections/*
const Navigation   = dynamic(() => import('../components/HomeDesktop/sections/Navigation'),   { ssr: false });
const Hero         = dynamic(() => import('../components/HomeDesktop/sections/Hero'),         { ssr: false });
const Services     = dynamic(() => import('../components/HomeDesktop/sections/Services'),     { ssr: false });
const Testimonials = dynamic(() => import('../components/HomeDesktop/sections/Testimonials'), { ssr: false });
const Locations    = dynamic(() => import('../components/HomeDesktop/sections/Locations'),    { ssr: false });
const Transform    = dynamic(() => import('../components/HomeDesktop/sections/Transform'),    { ssr: false });
const Contact      = dynamic(() => import('../components/HomeDesktop/sections/Contact'),      { ssr: false });
const Footer       = dynamic(() => import('../components/HomeDesktop/sections/Footer'),       { ssr: false });

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
