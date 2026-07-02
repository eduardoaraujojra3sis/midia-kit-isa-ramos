import { useEffect } from 'react'

export function useSecurity() {
  useEffect(() => {
    const blockedKeys: Record<string, (e: KeyboardEvent) => boolean> = {
      F12: () => true,
      I: (e) => e.ctrlKey && e.shiftKey,
      J: (e) => e.ctrlKey && e.shiftKey,
      C: (e) => e.ctrlKey && e.shiftKey,
      U: (e) => e.ctrlKey,
      S: (e) => e.ctrlKey,
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12') {
        e.preventDefault()
        return
      }
      const handler = blockedKeys[e.key.toUpperCase()]
      if (handler && handler(e)) {
        e.preventDefault()
      }
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const handleDevToolsWarning = () => {
      const check = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > 160
        const heightThreshold = window.outerHeight - window.innerHeight > 160
        if (widthThreshold || heightThreshold) {
          document.body.style.opacity = '0'
          document.title = '⛔ Acesso negado'
        }
      }
      const interval = setInterval(check, 2000)
      return () => clearInterval(interval)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('contextmenu', handleContextMenu)
    const cleanupDevTools = handleDevToolsWarning()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('contextmenu', handleContextMenu)
      cleanupDevTools()
    }
  }, [])
}
