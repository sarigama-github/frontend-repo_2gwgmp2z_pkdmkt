import { BookOpen, Code2, Search } from 'lucide-react'

export default function Header({ onTest }) {
  return (
    <header className="w-full sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/60 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white grid place-items-center shadow-sm">
            <Code2 size={22} />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">Beginner Coder</p>
            <p className="text-xs text-gray-500 -mt-1">Learn by seeing and doing</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3 text-sm">
          <a href="#languages" className="text-gray-600 hover:text-gray-900">Languages</a>
          <a href="#how" className="text-gray-600 hover:text-gray-900">How it works</a>
          <button onClick={onTest} className="inline-flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm hover:bg-black">
            <Search size={16} />
            Test backend
          </button>
        </div>
      </div>
    </header>
  )
}
