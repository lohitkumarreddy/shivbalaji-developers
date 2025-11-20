import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let mouseX = 0
    let mouseY = 0
    let posX = 0
    let posY = 0
    const speed = 0.15

    function mouseMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
      if (el) el.style.display = 'block'
    }

    function animate() {
      posX += (mouseX - posX) * speed
      posY += (mouseY - posY) * speed
      if (el) el.style.transform = `translate3d(${posX}px, ${posY}px, 0)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', mouseMove)
    animate()

    const interactive = document.querySelectorAll('a, button, .interactive')
    interactive.forEach(node => {
      node.addEventListener('mouseenter', () => { if (el) { el.style.width = '44px'; el.style.height = '44px'; el.style.background = 'rgba(11,110,79,0.12)'; } })
      node.addEventListener('mouseleave', () => { if (el) { el.style.width = '20px'; el.style.height = '20px'; el.style.background = 'rgba(11,110,79,0.9)'; } })
    })

    return () => window.removeEventListener('mousemove', mouseMove)
  }, [])

  return (
    <div ref={ref} className="custom-cursor w-5 h-5 rounded-full bg-green-700 opacity-95" style={{ display: 'none', pointerEvents: 'none' }} />
  )
}
