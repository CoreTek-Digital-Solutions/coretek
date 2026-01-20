import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#04101a] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
          <img src="/logo.png" alt="CoreTek Logo" className="w-20 h-20" />
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-gray-700 dark:text-gray-300 text-m leading-relaxed max-w-s">
              CoreTek Digital Solutions
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              Building reliable digital systems.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2 text-gray-600 dark:text-gray-400">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Quick Links</h4>
          <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          <a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Follow Us</h4>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=61585688147679"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <FaFacebookF size={18} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Facebook
              </span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-pink-500 hover:text-white transition-colors"
            >
              <FaInstagram size={18} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Instagram
              </span>
            </a>
            <a
              href="mailto:coretekdigitalsolutions@gmail.com"
              className="group relative p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-500 hover:text-white transition-colors"
            >
              <FaEnvelope size={18} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Email
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-4 text-center text-gray-500 dark:text-gray-400 text-xs flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
        <span>CoreTek Digital Solutions</span>
        <span className="hidden md:inline">•</span>
        <span>All rights reserved © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
