import React from 'react'

export default function Footer() {
  return (
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
            href="https://react-hello-world-drab.vercel.app"
            className="underline-offset-4 hover:underline text-gray-700 dark:text-gray-300"
            target="_blank"
            rel="noreferrer"
            title="Live site on Vercel"
          >
            Live Site
          </a>
        </nav>
      </div>
    </footer>
  )
}
