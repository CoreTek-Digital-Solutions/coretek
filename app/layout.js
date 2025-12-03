import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

// /app/layout.js (top-level layout)
export const metadata = {
  title: "CoreTek Digital Solutions",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
