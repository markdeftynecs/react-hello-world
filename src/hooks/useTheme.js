import { useEffect, useState } from 'react'

/**
 * useTheme
 * - Persists theme to localStorage
 * - Applies/removes the 'dark' class on <html>
 * - Optionally falls back to system preference on first load
 */
export function useTheme(defaultTheme = 'dark', useSystemPreference = true) {
  const getInitial = () => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    if (!useSystemPreference) return defaultTheme
    // System preference fallback
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getInitial)

  // Keep <html> in sync
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  // Optional: react to system changes if user never explicitly chose a theme
  useEffect(() => {
    if (!useSystemPreference) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = e => {
      const saved = localStorage.getItem('theme')
      if (saved !== 'light' && saved !== 'dark') {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [useSystemPreference])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return { theme, setTheme, toggleTheme }
}
