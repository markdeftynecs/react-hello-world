import React, { useEffect } from 'react'
import './index.css'
import { useTheme } from './hooks/useTheme'
import Layout from './layouts/Layout'
import Home from './pages/Home'

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
    <Layout theme={theme} onToggleTheme={toggleTheme}>
      <Home />
    </Layout>
  )
}

export default App
