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
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-800/70 backdrop-blur">
        <h1 className="text-4xl font-bold text-center mb-6">
          Hello World 👋
        </h1>

        <p className="text-center mb-6 text-gray-700 dark:text-gray-300">
          Tailwind dark mode is enabled by toggling the{' '}
          <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700">dark</code>{' '}
          class on <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700">&lt;html&gt;</code>.
        </p>

        <div className="flex items-center justify-center">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600
                       bg-gray-100 hover:bg-gray-200
                       dark:bg-gray-700 dark:hover:bg-gray-600
                       text-gray-900 dark:text-white
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                       transition-colors duration-200"
            aria-label="Toggle light/dark mode"
          >
            {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Theme: <span className="font-mono">{theme}</span> • Tip: press <kbd>D</kbd> to toggle
        </div>
      </div>
    </div>
  )
}

export default App
