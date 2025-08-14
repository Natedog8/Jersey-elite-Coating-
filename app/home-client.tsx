'use client';

import dynamic from 'next/dynamic';

// Import relatively from app/ → ../src/… so it always resolves
const HomeDesktop = dynamic(
  () => import('../src/screens/HomeDesktop/HomeDesktop'),
  { ssr: false }
);

export default function HomeClient() {
  return <HomeDesktop />;
}
