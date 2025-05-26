import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Define metadata (server-side)
export const metadata: Metadata = {
  title: 'About Us - Genius Ad District',
  description: 'Discover the story, mission and values of Genius Ad District, a leading creative agency in Morocco and the MEA region.',
  keywords: ['about us', 'creative agency', 'mission', 'vision', 'values', 'team', 'history', 'Morocco']
};

// Dynamically import the client component with SSR disabled
const AboutPageClient = dynamic(
  () => import('@/components/pages/AboutPageClient'),
  { ssr: false }
);

// Main page component (server-side)
export default function AboutPage() {
  return <AboutPageClient />;
}