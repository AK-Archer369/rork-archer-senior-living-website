import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Archer Senior Living | Adult Foster Care in Livingston County MI',
  description: 'Small-home adult foster care in Pinckney and Hamburg, Michigan. 6-bed homes with 24/7 staffing, memory care, and all-inclusive pricing. Serving Livingston County families.',
  keywords: 'adult foster care, assisted living, Pinckney Michigan, Hamburg Michigan, Livingston County senior care, memory care, AFC home',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
