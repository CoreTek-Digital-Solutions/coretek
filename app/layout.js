import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: "CoreTek Digital Solutions",
  description: "SaaS, e-commerce, software development and IT services.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-[#071226] text-gray-900 dark:text-gray-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
