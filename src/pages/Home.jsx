import React from 'react'
import InfoCard from '../components/InfoCard'

export default function Home() {
  return (
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
  )
}
