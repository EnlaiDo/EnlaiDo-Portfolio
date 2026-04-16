import { useEffect, useRef } from 'react'
import profilePic from '../assets/profile.jpeg'
import './Home.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
const projects = [
  {
    title: "Rift Walker",
    description: "Open-world action RPG with dimensional travel and real-time combat, built in Godot 4.",
    tags: ["Godot", "GDScript", "Game Dev"],
    status: "In Progress",
  },
  {
    title: "Word Definer Extension",
    description: "Chrome extension that lets you click any word on a page and instantly get a definition powered by the Gemini API.",
    tags: ["JavaScript", "Chrome API", "Gemini API"],
    status: "In Progress",
  },
  {
    title: "Crypto Simulator",
    description: "Paper trading app that lets you simulate crypto investments in real time. No real money, all the experience.",
    tags: ["JavaScript", "React", "Crypto API"],
    status: "In Progress",
  }
]

function Home() {
  const dotsRef = useRef(null)
  const aboutRef = useScrollAnimation()
  const projectsRef = useScrollAnimation()
  const contactRef = useScrollAnimation()
  const skillsRef = useScrollAnimation()
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
    <main className="home">
      {/* Floating dots */}
      <div className="dots-container" ref={dotsRef}>
        {[...Array(30)].map((_, i) => (
          <div className="dot" key={i} />
        ))}
      </div>

      {/* Hero */}
      <section className="hero" id="hero">
        <p className="tag">Computer Science Student</p>
        <h1>Enlai.</h1>
        <p className="bio">
          I build games, apps, and websites. Currently developing Rift Walker —
          an open-world action RPG built in Godot 4.
        </p>
        <div className="hero-links">
          <a href="#projects">View Projects</a>
          <a href="#about">About Me</a>
        </div>
      </section>

      {/* About */}
      <section className="about-section fade-up" id="about" ref={aboutRef}>
        <div className="about-left">
          <span className="about-badge">High School Senior</span>
          <h2 className="about-heading">
            Crafting <span className="about-highlight">digital</span>
            <br />
            <em>precision.</em>
          </h2>
          <p className="about-bio">
            Hi, I'm Enlai — a senior at Moore High School and Moore Norman.
            I'm passionate about computer science, game development, and building
            things that actually work. I know Python and JavaScript, and I'm currently
            developing Rift Walker, an open-world action RPG in Godot 4.
          </p>
        </div>
        <div className="about-right">
          <img src={profilePic} alt="Enlai" className="profile-pic" />
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section fade-up" id="projects" ref={projectsRef}>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">Things I've built or am currently building.</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="card-top">
                <span className="status">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
        
      {/* Skills */}
      <section className="skills-section fade-up" id="skills" ref={skillsRef}>
        <h2 className="section-title">Skills & Tools</h2>
        <p className="section-sub">What I work with.</p>
        <div className="skills-grid">
          <div className="skill-group">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>JavaScript</span>
              <span>HTML</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Tools & Frameworks</h3>
            <div className="skills-tags">
              <span>React</span>
              <span>Godot</span>
              <span>Git</span>
              <span>VS Code</span>
              <span>PyCharm</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Certifications</h3>
            <div className="skill-tags">
              <span>PCPE - Certified Entry-Level Python Programmer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section fade-up" id="contact" ref={contactRef}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub">
          Whether it's a project, opportunity, or just to say hi — my inbox is open.
        </p>
        <div className="contact-links">
          <a href="enlaido05@outlook.com">enlaido05@outlook.com</a>
          <a href="https://github.com/EnlaiDo" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  )
}

export default Home