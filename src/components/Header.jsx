import React from 'react'

/**
 * Header
 * - Shows app title
 * - Shows live deploy badge (link to your Vercel app)
 * - Provides a theme toggle button (receives props from parent)
 */
export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
      <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-tight">
          React + Vite + Tailwind • Hello World
        </h1>

        <div className="flex items-center gap-3">
          {/* Live deployment badge */}
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

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
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
  )
}
