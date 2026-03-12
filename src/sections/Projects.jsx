import { motion } from "framer-motion"
import { projects } from "../data/projects"
import profilePic from "../assets/images/profile.png"
const images = import.meta.glob("../assets/images/projects/*.png", { eager: true })

export default function Projects() {
    return (
        <section id="projects" style={section}>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={title}
            >
                Projects
            </motion.h2>

            <div style={grid}>
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        style={card}
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >

                        {/* preview image */}
                        <div style={imageWrapper}>
                            <img src={profilePic} style={image} />
                        </div>

                        {/* content */}
                        <div style={content}>

                            <h3 style={projectTitle}>{p.title}</h3>

                            <p style={description}>
                                {p.description}
                            </p>

                            {/* tech tags */}
                            <div style={tagContainer}>
                                {p.tech.map((t, j) => (
                                    <span key={j} style={tag}>{t}</span>
                                ))}
                            </div>

                            {/* buttons */}
                            <div style={buttons}>
                                <a href={p.github} style={githubBtn}>GitHub</a>
                                <a href={p.demo} style={demoBtn}>Live Demo</a>
                            </div>

                        </div>

                    </motion.div>
                ))}
            </div>

        </section>
    )
}

const section = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "80px 20px"
}

const title = {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "50px",
    background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
    WebkitBackgroundClip: "text",
    color: "transparent"
}

const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "30px"
}

const card = {
    background: "#1e293b",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transition: "0.3s"
}

const imageWrapper = {
    height: "180px",
    overflow: "hidden"
}

const image = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.4s"
}

const content = {
    padding: "20px"
}

const projectTitle = {
    fontSize: "22px",
    marginBottom: "10px"
}

const description = {
    fontSize: "15px",
    lineHeight: "1.6",
    opacity: 0.85,
    marginBottom: "15px"
}

const tagContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "15px"
}

const tag = {
    fontSize: "12px",
    background: "#0f172a",
    padding: "5px 10px",
    borderRadius: "8px",
    color: "#60a5fa"
}

const buttons = {
    display: "flex",
    gap: "10px"
}

const githubBtn = {
    padding: "8px 14px",
    borderRadius: "8px",
    background: "#334155",
    textDecoration: "none",
    color: "white",
    fontSize: "14px"
}

const demoBtn = {
    padding: "8px 14px",
    borderRadius: "8px",
    background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
    textDecoration: "none",
    color: "white",
    fontSize: "14px"
}