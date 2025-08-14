'use client';

import dynamic from 'next/dynamic';

// Use a RELATIVE import so we don't depend on tsconfig path aliases:
const HomeDesktop = dynamic(
  () => import('../src/screens/HomeDesktop/HomeDesktop'),
  { ssr: false }
);

export default function HomeClient() {
  return <HomeDesktop />;
}
