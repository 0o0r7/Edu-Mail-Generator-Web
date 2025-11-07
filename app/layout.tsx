'use client';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edu-Mail Generator | Free Educational Emails',
  description: 'Generate free educational email accounts instantly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
