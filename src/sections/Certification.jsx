import { certifications } from "../data/certifications"
import { motion } from "framer-motion"

export default function Certification() {

    return (

        <section id="certification" style={section}>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={title}
            >
                Certifications
            </motion.h2>

            <div style={grid}>

                {certifications.map((c, i) => (

                    <motion.div
                        key={i}
                        style={card}
                        whileHover={{ y: -8 }}
                    >

                        <h3 style={cardTitle}>{c.title}</h3>

                        <div style={meta}>
                            {c.issuer} • {c.year}
                        </div>

                        <p style={description}>
                            {c.description}
                        </p>

                        <a href={c.link} style={button}>
                            View Certificate
                        </a>

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
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "25px"
}

const card = {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column"
}

const cardTitle = {
    fontSize: "20px",
    marginBottom: "8px"
}

const meta = {
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "10px"
}

const description = {
    fontSize: "14px",
    lineHeight: "1.6",
    opacity: 0.9,
    marginBottom: "15px",
    flexGrow: 1
}

const button = {
    alignSelf: "flex-start",
    padding: "8px 14px",
    borderRadius: "8px",
    background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
    color: "white",
    textDecoration: "none",
    fontSize: "14px"
}