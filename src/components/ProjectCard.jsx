import { motion } from "framer-motion"

export default function ProjectCard({ project }) {

    return (
        <motion.div
            className="project-card"

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.03
            }}

            transition={{ type: "spring", stiffness: 200 }}
        >

            <div className="project-image">
                <img src={project.image} />
            </div>

            <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech">
                    {project.tech.map((t, i) => (
                        <span key={i}>{t}</span>
                    ))}
                </div>

                <div className="links">
                    <a href={project.github}>GitHub</a>
                    <a href={project.demo}>Demo</a>
                </div>

            </div>

        </motion.div>
    )
}