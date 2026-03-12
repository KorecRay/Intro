import { useState, useEffect } from "react"

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav style={{ ...nav, ...(scrolled ? navScrolled : {}) }}>

            <div style={logo}>Ray</div>

            <div style={menu}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
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
    padding: "0 8%",
    backdropFilter: "blur(12px)",
    background: "rgba(15,23,42,0.5)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    transition: "0.3s",
    zIndex: 100
}

const navScrolled = {
    background: "rgba(15,23,42,0.85)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
}

const logo = {
    fontWeight: "bold",
    fontSize: "20px"
}

const menu = {
    display: "flex",
    gap: "30px"
}