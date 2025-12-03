export default function Footer(){
  return (
    <footer className="border-t bg-white dark:bg-[#04101a]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" className="w-8 h-8" alt="logo" />
          <div>© <strong>CoreTek Digital Solutions</strong> • All rights reserved</div>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="#privacy" className="mr-4 hover:underline">Privacy</a>
          <a href="#terms" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  )
}
