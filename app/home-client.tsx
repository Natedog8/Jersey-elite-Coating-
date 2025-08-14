'use client';

import dynamic from 'next/dynamic';

// ✅ import the single composed page component
const HomeDesktop = dynamic(
  () => import('../components/HomeDesktop/HomeDesktop'),
  { ssr: false }
);

export default function HomeClient() {
  return <HomeDesktop />;
}
