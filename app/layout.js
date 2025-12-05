// app/layout.js
import "./globals.css"; // your Tailwind/global styles (this is OK here)
import Header from "../components/Header";
import Footer from "../components/Footer"; // or wherever your footer lives

export const metadata = {
  title: "CoreTek Digital Solutions",
  description: "CoreTek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
