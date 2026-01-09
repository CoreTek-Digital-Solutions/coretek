// app/layout.js
import './globals.css';                // <- must be in the app/ folder (app/globals.css)
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'CoreTek Digital Solutions',
  description: 'SaaS, e-commerce, custom software',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased dark:bg-[#0D1E40]">
        <Header />
        <main className="min-h-screen dark:bg-[#0D1E40]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
