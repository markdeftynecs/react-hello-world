import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

/**
 * Layout
 * - Provides the page shell (Header • Main • Footer)
 * - Applies global background/text via Tailwind (light/dark handled by <html>.dark)
 * - Accepts children for per-page content
 */
export default function Layout({ theme, onToggleTheme, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main className="flex-1 flex items-center justify-center px-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}
