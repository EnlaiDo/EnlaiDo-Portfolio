import './Projects.css'

const projects = [
    {
        title: 'Rift Walker',
        description: "Open-world action RPG with dimensional travel and real-time combat, built in Godot.",
        tags: ["Godot", "GDScript", "Game Development"],
        status: "In Progress",
        link: null
    },
    {
        title: "Word Definer",
        description: "Chrome extension that lets you click any word on a page and instantly get a definition powered by the Gemini API.",
        tags: ["JavaScript", "Chrome API", "Gemini API"],
        status: "In Progress",
        link: null
    },
    {
        title: "Crypto Simulator",
        description: "Paper trading app that lets you simulate crypto investments in real time. No real money, all the experience.",
        tags: ["JavaScript", "React", "Crypto API"],
        status: "In Progress",
        link: null
    }
]

function Projects() {
    return (
        <main className="projects">
            <h1 className="projects-title">Projects</h1>
            <p className="projects-sub">Things I've built or am currently building.</p>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <div className="card-top">
                            <span className="status">{project.status}</span>
                        </div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="tags">
                            {project.tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Projects