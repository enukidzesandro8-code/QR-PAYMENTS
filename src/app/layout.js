import './globals.css';

export const metadata = {
  title: 'QR გადახდა',
  description: 'გადაიხადე რესტორნის ანგარიში მარტივად',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}
