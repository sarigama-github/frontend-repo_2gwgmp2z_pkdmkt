import { X, ExternalLink, Clipboard } from 'lucide-react'
import { useState } from 'react'

export default function LanguageModal({ open, lang, onClose }) {
  const [copied, setCopied] = useState(false)
  if (!open || !lang) return null

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(lang.hello_world.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl border border-gray-200">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div>
            <p className="text-lg font-semibold text-gray-800">{lang.name} quick start</p>
            <p className="text-xs text-gray-500 -mt-1">Hello world and essential tips</p>
          </div>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100"><X size={18} /></button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Hello world</p>
            <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 text-xs overflow-auto min-h-[180px]">
{lang.hello_world.code}
            </pre>
            <div className="flex items-center gap-2 mt-3">
              <button onClick={copy} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-lg">
                <Clipboard size={14} /> {copied ? 'Copied!' : 'Copy code'}
              </button>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-1">What to learn next</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {lang.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-1">Tips</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {lang.tips.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Resources</p>
              <div className="flex flex-wrap gap-2">
                {lang.resources.map((r) => (
                  <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full text-xs">
                    <ExternalLink size={14} /> {r.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
