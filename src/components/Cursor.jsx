import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

const TRAIL_LENGTH = 30

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trailing, setTrailing] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  )
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const posRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const down = () => setClicking(true)
    const up = () => setClicking(false)
    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [])

  useEffect(() => {
    let animFrame
    const trailPositions = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
    let ringPos = { x: 0, y: 0 }

    const animate = () => {
      const target = posRef.current

      // update ring
      ringPos = {
        x: ringPos.x + (target.x - ringPos.x) * 0.12,
        y: ringPos.y + (target.y - ringPos.y) * 0.12,
      }
      setTrailing({ ...ringPos })

      // shift trail
      for (let i = trailPositions.length - 1; i > 0; i--) {
        trailPositions[i] = { ...trailPositions[i - 1] }
      }
      trailPositions[0] = { ...target }
      setTrail([...trailPositions])

      animFrame = requestAnimationFrame(animate)
    }

    animFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrame)
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Trail streak */}
      {trail.map((point, i) => {
        const opacity = (1 - i / TRAIL_LENGTH) * 0.7
        const size = Math.max(3, 10 * (1 - i / TRAIL_LENGTH))
        return (
          <div
            key={i}
            className="cursor-trail"
            style={{
              left: point.x,
              top: point.y,
              width: size,
              height: size,
              opacity,
            }}
          />
        )
      })}

      {/* Main dot */}
      <div
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y }}
      />

      {/* Ring */}
      <div
        className={`cursor-ring ${clicking ? 'clicking' : ''}`}
        style={{ left: trailing.x, top: trailing.y }}
      />
    </>
  )
}

export default Cursor