'use client';

import dynamic from 'next/dynamic';

// Import the single composed page component, client-only
const HomeDesktop = dynamic(
  () => import('../components/HomeDesktop/HomeDesktop'),
  { ssr: false }
);

export default function HomeClient() {
  return <HomeDesktop />;
}
