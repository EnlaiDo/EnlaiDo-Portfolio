import { useEffect, useRef } from 'react'
import './About.css'
import profilePic from '../assets/profile.jpeg'
function About() {
  const dotsRef = useRef(null)

  useEffect(() => {
    const container = dotsRef.current
    const dots = container.querySelectorAll('.dot')
    dots.forEach(dot => {
      dot.style.left = `${Math.random() * 100}%`
      dot.style.top = `${Math.random() * 100}%`
      dot.style.animationDuration = `${15 + Math.random() * 20}s`
      dot.style.animationDelay = `${Math.random() * 5}s`
    })
  }, [])

  return (
    <main className="about">
      {/* Floating dots */}
      <div className="dots-container" ref={dotsRef}>
        {[...Array(30)].map((_, i) => (
          <div className="dot" key={i} />
        ))}
      </div>

      {/* Content */}
      <div className="about-content">
        <div className="about-left">
          <span className="about-badge">High School Senior</span>

          <h1 className="about-heading">
            Crafting <span className="about-highlight">digital</span>
            <br />
            <em>precision.</em>
          </h1>

          <p className="about-bio">
            Hi, I'm Enlai — a senior at Moore High School and Moore Norman. 
            I'm passionate about computer science, game development, and building 
            things that actually work. I know Python and JavaScript, and I'm currently 
            developing Rift Walker, an open-world action RPG in Godot 4.
          </p>
        </div>

        {/* Right column - placeholder for now */}
        <div className="about-right">
          <img src={profilePic} alt="Enlai" className="profile-pic" />
        </div>
      </div>
    </main>
  )
}

export default About