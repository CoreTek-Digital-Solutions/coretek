export default function BrandStrip(){
  return (
    <div className="mt-10 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-6">
        <div className="p-2 rounded hover:shadow-lg transform transition">
          <svg className="w-28 h-10" viewBox="0 0 200 50"><rect width="200" height="50" rx="6" fill="#FF9900"/><text x="100" y="32" fontSize="18" textAnchor="middle" fill="#fff" fontWeight="700">AWS</text></svg>
        </div>
        <div className="p-2 rounded hover:shadow-lg transform transition">
          <svg className="w-36 h-10" viewBox="0 0 260 50"><rect width="260" height="50" rx="6" fill="#4285F4"/><text x="130" y="32" fontSize="14" textAnchor="middle" fill="#fff" fontWeight="700">Google Cloud</text></svg>
        </div>
        <div className="p-2 rounded hover:shadow-lg transform transition">
          <svg className="w-28 h-10" viewBox="0 0 200 50"><rect width="200" height="50" rx="6" fill="#0078D4"/><text x="100" y="32" fontSize="16" textAnchor="middle" fill="#fff" fontWeight="700">Azure</text></svg>
        </div>
        <div className="p-2 rounded hover:shadow-lg transform transition">
          <svg className="w-28 h-10" viewBox="0 0 200 50"><rect width="200" height="50" rx="6" fill="#1877F2"/><text x="100" y="32" fontSize="14" textAnchor="middle" fill="#fff" fontWeight="700">Meta</text></svg>
        </div>
      </div>
    </div>
  )
}
