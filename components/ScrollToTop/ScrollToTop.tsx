'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Disable smooth-scroll temporarily so we jump instantly, not animate
    document.documentElement.style.scrollBehavior = 'auto'
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    // Re-enable on next frame
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = ''
    })
  }, [pathname])

  return null
}
