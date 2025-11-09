import React from 'react'

export default function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800/60">
      <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
        {label}
      </div>
      <div className="mt-1 text-base font-medium">{value}</div>
    </div>
  )
}
