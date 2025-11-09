import React, { useEffect } from 'react'
import './index.css'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme('dark', true)

  // Keyboard shortcut: press "D" to toggle theme
  useEffect(() => {
    const onKeyDown = e => {
      if ((e.key === 'd' || e.key === 'D') && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault()
        toggleTheme()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [toggleTheme])

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">
            React + Vite + Tailwind • Hello World
          </h1>

          <div className="flex items-center gap-2">
            {/* Deploy status placeholder (swap for a real badge later) */}
            <a
              href="https://react-hello-world-drab.vercel.app"
              target="_blank"
              rel="noreferrer"
              title="View live deployment"
            >
              <img
                src="https://deploy-badge.vercel.app/?url=https://react-hello-world-drab.vercel.app&name=Hello%20World&style=flat"
                alt="Deployment Status"
                className="h-5"
              />
            </a>


            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600
                         bg-gray-100 hover:bg-gray-200
                         dark:bg-gray-700 dark:hover:bg-gray-600
                         text-gray-900 dark:text-white
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                         transition-colors"
              aria-label="Toggle light/dark mode (D)"
              title='Toggle light/dark mode (shortcut: "D")'
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl rounded-2xl border border-gray-200 dark:border-gray-800 p-10 bg-white/80 dark:bg-gray-800/70 shadow-sm">
          <h2 className="text-4xl font-bold text-center mb-4">Hello World 👋</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
            This is a minimal, production-ready starter using{' '}
            <span className="font-semibold">React</span>, <span className="font-semibold">Vite</span>, and{' '}
            <span className="font-semibold">Tailwind CSS</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <InfoCard label="Framework" value="React 18" />
            <InfoCard label="Bundler" value="Vite 5" />
            <InfoCard label="Styling" value="Tailwind 3" />
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Tip: Press <kbd className="px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600">D</kbd> to toggle theme
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-4 py-4 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Hello World Starter
          </p>
          <nav className="flex items-center gap-4">
            <a
              href="https://github.com/markdeftynecs/react-hello-world"
              className="underline-offset-4 hover:underline text-gray-700 dark:text-gray-300"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
            <a
              href="/"
              className="underline-offset-4 hover:underline text-gray-700 dark:text-gray-300"
              onClick={e => e.preventDefault()}
              title="Add your Vercel project URL once deployed"
            >
              Live Site
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800/60">
      <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">{label}</div>
      <div className="mt-1 text-base font-medium">{value}</div>
    </div>
  )
}

export default App
