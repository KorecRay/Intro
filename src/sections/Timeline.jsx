import { activities } from "../data/activities"
import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

export default function Timeline() {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (

        <section id="timeline" style={section} ref={ref}>

            <h2 style={title}>
                Club Activities
            </h2>

            <div style={timelineWrapper}>

                {/* background line */}
                <div style={line}></div>

                {/* progress line */}
                <motion.div
                    style={{
                        ...progressLine,
                        scaleY
                    }}
                />

                {activities.map((a, i) => {

                    const left = i % 2 === 0

                    return (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: left ? -120 : 120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                            style={{
                                ...row,
                                justifyContent: left ? "flex-start" : "flex-end"
                            }}
                        >

                            {/* node */}
                            <div style={node} />

                            {/* connector */}
                            <div
                                style={{
                                    ...connector,
                                    [left ? "right" : "left"]: "50%"
                                }}
                            />

                            {/* card */}
                            <motion.div
                                whileHover={{ y: -10, scale: 1.03 }}
                                style={card}
                            >

                                <div style={date}>
                                    {a.date}
                                </div>

                                <div style={activity}>
                                    {a.title}
                                </div>

                                <div style={role}>
                                    {a.role}
                                </div>

                            </motion.div>

                        </motion.div>

                    )

                })}

            </div>

        </section>

    )

}

const section = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "120px 20px"
}

const title = {
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "100px",
    background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
    WebkitBackgroundClip: "text",
    color: "transparent"
}

const timelineWrapper = {
    position: "relative"
}

const line = {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: "4px",
    background: "rgba(255,255,255,0.08)",
    transform: "translateX(-50%)"
}

const progressLine = {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: "4px",
    background: "linear-gradient(#60a5fa,#a78bfa)",
    transform: "translateX(-50%)",
    transformOrigin: "top",
    boxShadow: "0 0 18px rgba(120,150,255,0.7)"
}

const row = {
    position: "relative",
    display: "flex",
    marginBottom: "90px"
}

const node = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: "#60a5fa",
    boxShadow: "0 0 14px #60a5fa"
}

const connector = {
    position: "absolute",
    top: "8px",
    width: "60px",
    height: "2px",
    background: "#60a5fa",
    opacity: 0.6
}

const card = {
    width: "420px",
    padding: "22px",
    borderRadius: "16px",
    background: "rgba(30,41,59,0.7)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 18px 35px rgba(0,0,0,0.45)"
}

const date = {
    fontSize: "13px",
    opacity: 0.7,
    marginBottom: "6px"
}

const activity = {
    fontSize: "18px",
    marginBottom: "6px"
}

const role = {
    fontSize: "14px",
    color: "#60a5fa"
}