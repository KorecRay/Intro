import React, { useRef, useState, useEffect } from "react";
import AStar from "./algorithms/AStar";
import Dijkstra from "./algorithms/Dijkstra";
import BFS from "./algorithms/BFS";

const algorithms = [
    { id: "astar", name: "A* Search", Component: AStar },
    { id: "dijkstra", name: "Dijkstra", Component: Dijkstra },
    { id: "bfs", name: "BFS", Component: BFS },
];

export default function AlgorithmVisualizer() {
    const sectionRefs = useRef({});
    const [activeId, setActiveId] = useState(algorithms[0].id);

    // 偵測滾動到哪個區塊
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { root: null, threshold: 0.5 }
        );
        Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div style={styles.container}>
            {/* 左側固定導航 */}
            <div style={styles.sidebar}>
                {algorithms.map((algo) => (
                    <div
                        key={algo.id}
                        onClick={() => scrollToSection(algo.id)}
                        style={{
                            ...styles.sidebarItem,
                            ...(activeId === algo.id ? styles.sidebarItemActive : {}),
                        }}
                    >
                        {algo.name}
                    </div>
                ))}
            </div>

            {/* 右側滑動內容 */}
            <div style={styles.content}>
                {algorithms.map(({ id, Component }) => (
                    <div
                        key={id}
                        id={id}
                        ref={(el) => (sectionRefs.current[id] = el)}
                        style={styles.algorithmBlock}
                    >
                        <Component />
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        height: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
        background: "#f0f2f5",
    },
    sidebar: {
        width: 220,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        borderRight: "1px solid #ddd",
        background: "#fff",
        padding: "30px 15px",
        boxSizing: "border-box",
    },
    sidebarItem: {
        marginBottom: 15,
        cursor: "pointer",
        padding: "10px 12px",
        borderRadius: 8,
        transition: "all 0.3s",
        color: "#555",
        fontWeight: 500,
    },
    sidebarItemActive: {
        background: "#007bff",
        color: "#fff",
        boxShadow: "0 2px 8px rgba(0,123,255,0.3)",
    },
    content: {
        flex: 1,
        padding: "30px",
        overflowY: "auto",
        scrollBehavior: "smooth",
    },
    algorithmBlock: {
        marginBottom: 60,
        padding: 25,
        borderRadius: 12,
        background: "#fff",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        transition: "transform 0.3s",
    },
};