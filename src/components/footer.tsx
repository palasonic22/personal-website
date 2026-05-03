'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function Footer() {
  const [time, setTime] = useState<string>('')
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="w-full border-t py-4 mt-24 -mb-12" style={{ borderColor: 'var(--footer-border)', backgroundColor: 'var(--footer-bg)', width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
      <div className="max-w-xl mx-auto px-4 flex items-center justify-between text-sm">
        {/* Left: Signature */}
        <div className="h-[22px] w-[140px] relative">
          {mounted && (
            <Image
              src={resolvedTheme === 'dark' ? '/dark_mode_footer.png' : '/light_mode_footer.png'}
              alt="Ezekiel Lee"
              fill
              className="object-contain"
              style={{ filter: resolvedTheme === 'dark' ? 'brightness(0) invert(1)' : 'none' }}
            />
          )}
        </div>

        {/* Right: Time + Tagline */}
        <div className="text-[13px]" style={{ color: 'var(--footer-text)' }}>
          {time} - All we have is now.
        </div>
      </div>
    </footer>
  )
}
