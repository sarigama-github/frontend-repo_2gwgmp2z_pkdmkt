import { ArrowRight, BookOpen, Code2 } from 'lucide-react'

export default function LanguageCard({ lang, onOpen }) {
  return (
    <button onClick={() => onOpen(lang)} className="group text-left w-full">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 text-white grid place-items-center">
              <Code2 size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">{lang.name}</p>
              <p className="text-xs text-gray-500">{lang.difficulty} • {lang.topics.slice(0,3).join(', ')}</p>
            </div>
          </div>
          <ArrowRight className="text-gray-400 group-hover:text-gray-600 transition-colors" size={18} />
        </div>
        <p className="text-sm text-gray-600 mt-3 line-clamp-3">{lang.description}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-blue-600">
          <BookOpen size={14} />
          <span>Open quick start</span>
        </div>
      </div>
    </button>
  )
}
