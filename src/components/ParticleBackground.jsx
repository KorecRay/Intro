import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ParticleBackground() {

    const mountRef = useRef(null)

    useEffect(() => {

        const mount = mountRef.current

        const scene = new THREE.Scene()

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )

        const renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)

        mount.appendChild(renderer.domElement)

        camera.position.z = 5

        const geometry = new THREE.BufferGeometry()

        const count = 2000
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
        }

        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        )

        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.02
        })

        const particles = new THREE.Points(geometry, material)
        scene.add(particles)

        let mouseX = 0
        let mouseY = 0

        const handleMouseMove = (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5
            mouseY = (e.clientY / window.innerHeight) - 0.5
        }

        window.addEventListener("mousemove", handleMouseMove)

        const animate = () => {

            particles.rotation.y += mouseX * 0.003
            particles.rotation.x += mouseY * 0.003

            renderer.render(scene, camera)

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        return () => {

            window.removeEventListener("resize", handleResize)
            window.removeEventListener("mousemove", handleMouseMove)

            if (mount && renderer.domElement) {
                mount.removeChild(renderer.domElement)
            }

            geometry.dispose()
            material.dispose()
            renderer.dispose()

        }

    }, [])

    return (
        <div
            ref={mountRef}
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 0
            }}
        />
    )

}