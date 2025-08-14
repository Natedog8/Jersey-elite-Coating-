'use client';

import dynamic from 'next/dynamic';

// Load your Anima screen on the client only (no SSR), so anything that needs
// window/document/styled-jsx/client-only won't crash the build.
const HomeDesktop = dynamic(
  () => import('@/screens/HomeDesktop/HomeDesktop'),
  { ssr: false }
);

export default function HomeClient() {
  return <HomeDesktop />;
}
