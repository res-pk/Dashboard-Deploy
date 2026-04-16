import './globals.css';

export const metadata = {
  title: 'Scientechnic ERP Dashboard',
  description: 'Routed Next.js dashboard replica',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
