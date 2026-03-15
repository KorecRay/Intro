import { useState, useEffect } from "react"

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState("about")

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 50)

            const sections = ["about", "projects"]

            for (let id of sections) {

                const el = document.getElementById(id)

                if (!el) continue

                const rect = el.getBoundingClientRect()

                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActive(id)
                }

            }

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    const scrollTo = (id) => {

        const el = document.getElementById(id)

        if (!el) return

        window.scrollTo({
            top: el.offsetTop - 60,
            behavior: "smooth"
        })

    }

    return (

        <nav style={{ ...nav, ...(scrolled ? navScrolled : {}) }}>

            <div style={logo}>Ray</div>

            <div style={menu}>

                <div
                    style={{
                        ...link,
                        ...(active === "about" ? linkActive : {})
                    }}
                    onClick={() => scrollTo("about")}
                >
                    About
                </div>

                <div
                    style={{
                        ...link,
                        ...(active === "projects" ? linkActive : {})
                    }}
                    onClick={() => scrollTo("projects")}
                >
                    Projects
                </div>

                <div
                    style={{
                        ...link,
                        ...(active === "certification" ? linkActive : {})
                    }}
                    onClick={() => scrollTo("certification")}
                >
                    Certification
                </div>

                <div
                    style={{
                        ...link,
                        ...(active === "timeline" ? linkActive : {})
                    }}
                    onClick={() => scrollTo("timeline")}
                >
                    Timeline
                </div>


            </div>

        </nav>

    )
}

const nav = {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "0 80px",
    backdropFilter: "blur(14px)",
    background: "rgba(15,23,42,0.35)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    transition: "all 0.3s ease",
    zIndex: 100
}

const navScrolled = {
    background: "rgba(15,23,42,0.85)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
}

const logo = {
    fontWeight: "700",
    fontSize: "20px",
    letterSpacing: "1px",
    cursor: "pointer",
    marginLeft: "20px"
}

const menu = {
    display: "flex",
    alignItems: "center",
    gap: "36px"
}

const link = {
    cursor: "pointer",
    fontSize: "15px",
    color: "rgba(255,255,255,0.75)",
    position: "relative",
    float: "right",
    marginRight: "20px",
    transition: "all 0.25s"
}

const linkActive = {
    color: "white"
}