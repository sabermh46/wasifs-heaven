import { useEffect, useRef } from 'react'

export default function WaveParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    let particleCount = Math.floor(width / 12)
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (i / particleCount) * width,
        y: height / 2,
        baseY: height / 2,
        amplitude: 30 + Math.random() * 20,
        speed: 0.02 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2,
        radius: 1.5 + Math.random() * 1.5
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p, i) => {
        p.phase += p.speed
        p.y = p.baseY + Math.sin(p.phase) * p.amplitude

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.6)'
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Responsive resizing
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* 👇 Children content goes here */}
        <h1 className="text-white text-4xl font-bold text-center py-20">
          Welcome to the Wave
        </h1>
      </div>
    </div>
  )
}
