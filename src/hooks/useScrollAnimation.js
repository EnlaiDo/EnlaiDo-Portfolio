import { useEffect, useRef } from 'react'

function useScrollAnimation() {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
             if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return ref
}

export default useScrollAnimation