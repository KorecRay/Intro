import { motion } from "framer-motion"
import profilePic from "../assets/images/profile.jpg" // 你的圖片路徑

const skillsList = ["VS Code", "C++", "JavaScript", "TypeScript", "React", "Node.js", "PixiJS", "Three.js", "CSS/HTML", "Python", "GODOT Engine", "UI / UX", "Music Production", "FL Studio", "DJ", "VFX", "Badminton"]

export default function About() {
    return (
        <section id="about" style={section}>
            <div style={glow1}></div>
            <div style={glow2}></div>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={title}
            >
                About Me
            </motion.h2>

            <motion.div
                style={container}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div style={imageWrapper}>
                    <motion.img
                        src={profilePic}
                        alt="Profile"
                        style={image}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                {/* 右側文字框 */}
                <div style={textWrapper}>
                    <p style={text}>
                        Hi! I'm <strong>Ray Qiu</strong>, a passionate software developer
                        who loves <span style={highlight}>creative coding</span>,
                        <span style={highlight}>interactive web apps</span>, and <span style={highlight}>music tech</span>.
                    </p>

                    <p style={text}>
                        My experience spans <strong>algorithm visualization</strong>,
                        <strong>rhythm game engines</strong>, and <strong>decentralized simulations</strong>.
                        I enjoy building projects that combine <span style={highlight}>visual creativity</span> with <span style={highlight}>technical rigor</span>.
                    </p>

                    <p style={text}>
                        Outside of coding, I explore <span style={highlight}>electronic music production</span>
                        and <span style={highlight}>interactive media</span>.
                    </p>
                </div>

            </motion.div>

            {/* Skills / Languages */}
            <motion.div style={skillsContainer} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <h3 style={skillsTitle}>Languages & Technologies</h3>
                <div style={skillsGrid}>
                    {skillsList.map((skill, i) => (
                        <div
                            key={i}
                            style={skillCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-4px)"
                                e.currentTarget.style.boxShadow = "0 10px 30px rgba(100,150,255,0.4)"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)"
                                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)"
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </motion.div>

        </section>
    )
}

/* ==== Styles ==== */

const section = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px", // 距離 Hero 更近
}

const title = {
    fontSize: "36px",
    textAlign: "center",
    marginBottom: "40px",
    background: "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "0 0 20px rgba(100,150,255,0.2)"
}

const container = {
    display: "flex",
    gap: "40px",
    alignItems: "flex-start",
    position: "relative",
    flexWrap: "wrap",
    zIndex: 1
}

const imageWrapper = {
    flex: "0 0 200px",
    marginTop: "-100px",
    marginRight: "-60px",
    zIndex: 2,
}

const image = {
    width: "300px",
    height: "400px",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
    transition: "0.3s",
}

const textWrapper = {
    flex: "1 1 400px",
    background: "#1e293b",
    borderRadius: "20px",
    padding: "40px 30px 30px 50px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    position: "relative",
    zIndex: 1,
}

const text = {
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "20px",
    opacity: 0.9
}

const highlight = {
    color: "#60a5fa",
    fontWeight: "600"
}

/* ==== Skills ==== */
const skillsContainer = {
    marginTop: "60px",
    textAlign: "center"
}

const skillsTitle = {
    fontSize: "28px",
    marginBottom: "30px",
    color: "#a78bfa"
}

const skillsGrid = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px"
}

const skillCard = {
    padding: "10px 20px",
    background: "#0f172a",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    transition: "0.25s",
    cursor: "default",
    fontWeight: "500",
}

const glow1 = {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle,#6366f1,transparent)",
    filter: "blur(120px)",
    top: "-100px",
    left: "-100px",
    opacity: 0.4,
    zIndex: -1
}

const glow2 = {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle,#22d3ee,transparent)",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px",
    opacity: 0.4,
    zIndex: -1
}