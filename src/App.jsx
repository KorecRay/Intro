import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Certification from "./sections/Certification"
import Timeline from "./sections/Timeline"

export default function App() {

    return (
        <>
            <Navbar />

            <Hero />
            <About />
            <Projects />
            <Certification />
            <Timeline />
        </>
    )

}