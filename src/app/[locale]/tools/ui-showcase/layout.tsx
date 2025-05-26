import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI Showcase | Genius Ad District',
  description: 'Demonstration of UI components with theme variations for Genius Ad District and its subsidiaries.'
};

export default function UIShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
