import { useEffect, useState } from 'react'
import Header from './components/Header'
import LanguageCard from './components/LanguageCard'
import LanguageModal from './components/LanguageModal'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [languages, setLanguages] = useState([])
  const [query, setQuery] = useState('')
  const [openLang, setOpenLang] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetchLanguages()
  }, [])

  const fetchLanguages = async () => {
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/languages`)
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json()
      setLanguages(data)
      setStatus('ready')
    } catch (e) {
      setStatus('error')
    }
  }

  const filtered = languages.filter(l => {
    const q = query.toLowerCase()
    return (
      l.name.toLowerCase().includes(q) ||
      l.topics.some(t => t.toLowerCase().includes(q))
    )
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header onTest={() => window.location.assign('/test')} />

      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Start coding with simple, guided examples
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Pick a language like C, C++, Python, or HTML. See a working Hello World, core topics, and curated resources for beginners.
        </p>

        <div className="mt-6 max-w-xl mx-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics or languages (e.g., loops, vectors, html)"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      <section id="languages" className="max-w-6xl mx-auto px-4 pb-16">
        {status === 'loading' && (
          <p className="text-center text-gray-600">Loading...</p>
        )}
        {status === 'error' && (
          <div className="text-center">
            <p className="text-red-600">Could not load data. Try again.</p>
            <button onClick={fetchLanguages} className="mt-2 bg-gray-900 text-white px-4 py-2 rounded-lg">Retry</button>
          </div>
        )}

        {status === 'ready' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((lang) => (
              <LanguageCard key={lang.id} lang={lang} onOpen={setOpenLang} />
            ))}
          </div>
        )}
      </section>

      <LanguageModal open={!!openLang} lang={openLang} onClose={() => setOpenLang(null)} />

      <footer className="border-t bg-white/60">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500 flex items-center justify-between">
          <p>Built for beginners — learn one step at a time.</p>
          <a className="text-blue-600 hover:underline" href="#how">How it works</a>
        </div>
      </footer>
    </div>
  )
}
